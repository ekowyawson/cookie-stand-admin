export default function LoginForm({ onLogin }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = event.target.elements;
        onLogin(username.value, password.value);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="w-full max-w-xs p-8 space-y-6 bg-white dark:bg-gray-800 rounded shadow-lg">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                    <input name="username" type="text" required placeholder="Username"
                        className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                    <input name="password" type="password" required placeholder="Password"
                        className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white" />
                </div>
                <div>
                    <button type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-chartreuse-500 hover:bg-chartreuse-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chartreuse-400 border border-transparent rounded-md shadow-sm dark:bg-green-400 dark:hover:bg-green-500">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
