import { StatCard } from "../../components/shared/StatCard";

const AdminDashboardPage = () => {
  return (
    <div className="ml-72 min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Home</h1>

      {/* Revenue Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard title="Platform Revenue" value="$100.00" change="23.5%" subtitle="Compared to prev 7 days" />
          <StatCard title="Merchant Revenue" value="$324,100.00" change="23.5%" />
        </div>
      </div>

      {/* Orders Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Orders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Platform Orders" value="1244145" change="23.5%" subtitle="Compared to prev 7 days" />
          <StatCard title="Active Orders" value="$324,100.00" change="23.5%" subtitle="01/01/25" />
          <StatCard title="Completed Orders" value="544" change="23.5%" subtitle="Compared to prev 7 days" />
        </div>
      </div>

      {/* Customers Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard title="Active Users" value="42343" change="23.5%" subtitle="Compared to prev 7 days" />
          <StatCard title="Pending ID verifications" value="9" subtitle="Verify verifications" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
