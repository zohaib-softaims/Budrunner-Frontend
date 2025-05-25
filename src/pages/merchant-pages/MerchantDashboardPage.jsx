import { StatCard } from "../../components/shared/StatCard";

const MerchantDashboardPage = () => {
  return (
    <div className="ml-72 min-h-screen bg-gray-50 p-4 lg:p-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Home</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <StatCard title="Net Sales" value="$100.00" change="23.5%" subtitle="Compared to prev 7 days" />
        <StatCard title="Orders" value="100" change="23.5%" subtitle="Compared to prev 7 days" />
        <StatCard title="Average Order Ticket" value="$19.00" change="23.5%" subtitle="Compared to prev 7 days" />
      </div>
    </div>
  );
};

export default MerchantDashboardPage;
