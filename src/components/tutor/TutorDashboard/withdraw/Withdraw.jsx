import { Icon } from '@iconify/react';
const WithdrawPage = () => {
    const withdrawHistory = [
      { date: "21 Sep, 2021 at 2:14 AM", bank: "Kuda Bank", amount: "$7,443", status: "Pending" },
      { date: "21 Sep, 2021 at 2:14 AM", bank: "Kuda Bank", amount: "$7,443", status: "Completed" },
      { date: "21 Sep, 2021 at 2:14 AM", bank: "Kuda Bank", amount: "$7,443", status: "Failed" },
      { date: "21 Sep, 2021 at 2:14 AM", bank: "Kuda Bank", amount: "$7,443", status: "Pending" },
      { date: "21 Sep, 2021 at 2:14 AM", bank: "Kuda Bank", amount: "$7,443", status: "Completed" },
      { date: "21 Sep, 2021 at 2:14 AM", bank: "Kuda Bank", amount: "$7,443", status: "Failed" },
    ];
  
    const getStatusStyle = (status) => {
      switch (status) {
        case "Pending":
          return "text-orange-500";
        case "Completed":
          return "text-green-500";
        case "Failed":
          return "text-red-500";
        default:
          return "";
      }
    };
  
    return (
      <div className="p-4 bg-gray-100 min-h-screen flex justify-center">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">Withdrawal</h1>
            <div className="flex items-center gap-3">
              <button className="p-1 bg-gray-200 rounded-full">
                <span role="img" aria-label="Notification">
                  🔔
                </span>
              </button>
              <img
                src="https://via.placeholder.com/40"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
  
          {/* Summary Cards */}
          <div className="flex grid-cols-1 sm:grid-cols-2 gap-4">
                     <div
                        className="bg-white rounded-lg shadow-sm flex items-center gap-5 p-5"
                        style={{ width: "312px", height: "115px" }}
                        >
                        {/* Icon container with background color */}
                        <div
                            className="bg-orange-200 flex items-center justify-center rounded-lg"
                            style={{ width: "60px", height: "60px" }} // Adjust size as needed
                        >
                            <Icon icon="iconoir:apple-shortcuts" className="text-orange-500" style={{ fontSize: "28px" }} />
                        </div>
                        
                        {/* Text container */}
                        <div>
                            <p className="text-base font-bold">$13,804.00</p>
                            <h2 className="text-xs text-gray-500">Total Revenue</h2>
                        </div>
                    </div>

            <div
              className="bg-white rounded-lg shadow-sm flex items-center gap-5 p-5"
              style={{ width: "312px", height: "115px" }}
            >
               
                
                <div
                            className="bg-orange-200 flex items-center justify-center rounded-lg"
                            style={{ width: "60px", height: "60px" }} // Adjust size as needed
                        >
                            <Icon icon="ion:card-sharp" className="text-orange-500" style={{ fontSize: "28px" }} />
                        </div>
              <div>
                <p className="text-base font-bold">$13,184.00</p>
                <h2 className="text-xs text-gray-500">Total Withdrawals</h2>
              </div>
            </div>
          </div>
  
          {/* Current Balance Card with Withdraw Button */}
          <div className="mt-4 flex items-center gap-4">
            <div
              className="bg-white p-3 rounded-lg shadow-sm "
              style={{ width: "312px", height: "115px" }}
            >
              <p className="text-base font-bold">$16,593.00</p>
              <h2 className="text-xs text-gray-500">Current Balance</h2>

            </div>
            <button
              className="px-4 py-2 bg-blue text-white rounded-lg text-sm shadow-sm"
              style={{ height: "" }}
            >
              Withdraw
            </button>
          </div>
  
          {/* Withdraw History */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Withdraw History</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead>
                  <tr className="text-left bg-gray-100">
                    <th className="px-3 py-2">Date</th>
                    <th className="px-3 py-2">Bank</th>
                    <th className="px-3 py-2">Amount</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawHistory.map((entry, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-2">{entry.date}</td>
                      <td className="px-3 py-2">{entry.bank}</td>
                      <td className="px-3 py-2">{entry.amount}</td>
                      <td className={`px-3 py-2 font-semibold ${getStatusStyle(entry.status)}`}>
                        {entry.status}
                      </td>
                      <td className="px-3 py-2 text-right">
                        <button className="text-gray-400">...</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WithdrawPage;
  