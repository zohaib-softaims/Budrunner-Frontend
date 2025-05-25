import { Plus, ImageIcon } from "lucide-react";

const AdminMerchantsPage = () => {
  const merchants = [
    { id: 1, name: "Smokeshop 1" },
    { id: 2, name: "Smokeshop 2" },
    { id: 3, name: "Smokeshop 3" },
  ];

  return (
    <div className="ml-72 min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Merchants</h1>
        <p className="text-gray-600 mt-1">Manage BudRunners Merchants</p>
      </div>

      {/* Onboard Button */}
      <div className="mb-8">
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={16} className="mr-2" />
          Onboard
        </button>
      </div>

      {/* Merchants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {merchants.map((merchant) => (
          <div key={merchant.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 flex items-center justify-center border-b border-gray-200">
              <div className="text-center">
                <ImageIcon size={48} className="mx-auto text-gray-400 mb-2" />
                <span className="text-sm font-medium text-gray-600">IMAGE</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{merchant.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMerchantsPage;
