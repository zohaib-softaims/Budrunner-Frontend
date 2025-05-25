import { ChevronLeft, ChevronRight } from "lucide-react";
import { adminOrdersData } from "../../contants/admin-data/adminOrdersData";
export const AdminOrders = () => {
  return (
    <div className="ml-72 min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-600 mt-1">Manage BudRunners Orders</p>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-7 gap-4 text-center">
          <div>
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">COUNT</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">301</p>
          </div>
          <div>
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">PRE-TAX TOTAL</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">6,302.10</p>
          </div>
          <div>
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">TOTAL TAX</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">0.00</p>
          </div>
          <div>
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">TOTAL COMMISSION</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">931.95</p>
          </div>
          <div>
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">ERROR CHARGE</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">0.00</p>
          </div>
          <div>
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">FEES</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">0.00</p>
          </div>
          <div>
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">NET PAYOUT</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">$5,370.15</p>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Order History</h3>
          <p className="text-sm text-gray-500 mt-1">Last updated on Tue 03/18/2025 2:30pm</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MERCHANT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TYPE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE & TIME</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRE-TAX TOTAL</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TAX</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COMMISSION</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ERROR CHARGE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FEES</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NET PAYOUT</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {adminOrdersData?.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.merchant}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.preTax}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.tax}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.commission}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.errorCharge}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.fees}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.netPayout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">Showing 1-10 of 1000</div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <ChevronLeft size={16} />
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">2</button>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">3</button>
            <span className="px-3 py-1 text-gray-400">...</span>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">100</button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
