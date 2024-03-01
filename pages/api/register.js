import { hash } from 'bcrypt';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.ELEPHANTSQL_URL
});

export default async function register(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        const hashedPassword = await hash(password, 10);

        try {
            const result = await pool.query(
                'INSERT INTO users(username, password_hash) VALUES($1, $2) RETURNING *',
                [username, hashedPassword]
            );
            return res.status(201).send({ user: result.rows[0] });
        } catch (error) {
            return res.status(500).send('User registration failed');
        }
    } else {
        // Block non-POST requests
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
