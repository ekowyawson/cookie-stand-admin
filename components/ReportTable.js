import { timeSlots } from '/components/data';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ReportTable({ reports }) {
  const calculateHourlyTotals = (reports) => {
    const hourlyTotals = Array(timeSlots.length).fill(0);
    
    reports.forEach(report => {
      report.hourly_sales.forEach((sales, index) => {
        hourlyTotals[index] += sales;
      });
    });
    return hourlyTotals;
  };

  // Call the function to calculate hourly totals
  const getHourlyTotals = calculateHourlyTotals(reports);
  // Calculate the grand total by summing up all hourly totals
  const grandTotal = getHourlyTotals.reduce((sum, current) => sum + current, 0);

  if (!reports || reports.length === 0) {
    return <h2 className="my-4 text-xl text-center">No Cookie Stands Available</h2>;
  }

  return (
    <>
      <div className="w-full max-w-3xl mx-auto mt-8 overflow-auto text-black">
        <table className="w-full bg-green-300 rounded-lg table-auto">
          <thead className="text-black bg-green-500">
            <tr>
              <th className="border border-white p-2">Location</th>

              {timeSlots.map((time, index) => (
                <th key={index} className="border border-white p-2">{time}</th>
              ))}

              <th className="border border-white p-2">Total</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white">
            {reports.map((report, index) => (
              <tr key={index} className={`${index % 2 ? ' bg-green-400' : 'bg-green-300'}`}>
                <td className='pl-4 border-green-900 p-2'>{report.location}</td>
                
                {report.hourly_sales.map((sale, saleIndex) => (
                  <td key={saleIndex} className="border border-white pl-4 p-2">{parseFloat(sale).toFixed(1)}</td>
                ))}
                
                <td className="border border-white p-2">{parseFloat(report.hourly_sales.reduce((sum, current) => sum + current, 0)).toFixed(1)}</td>
              </tr>
            ))}
          </tbody>

          <tfoot className="bg-orange-1">
            <tr>
              <th className="border border-white p-2">Total</th>

              {
                getHourlyTotals.map((total, index) => (
                  <td key={index} className="border border-white font-bold text-center p-2">{parseFloat(total).toFixed(1)}</td>
                ))
              }

              <td className="border border-white text-center font-bold p-2">{parseFloat(grandTotal).toFixed(1)}</td>
            </tr>
          </tfoot>
        </table>

      </div>

      <div className={`flex flex-col items-center justify-between p-2 ${inter.className}`}>
        <i><strong>Total Locations Worldwide</strong>: {reports.length}</i>
      </div>
    </>
  );
}
