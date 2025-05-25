import { useState } from "react";
import MerchantSidebar from "../../components/merchant-components/merchant-shared-components/MerchantSidebar";

export const MerchantSettingsPage = () => {
  const [deliveryTransfer, setDeliveryTransfer] = useState(true);
  const [partnershipPlan] = useState("15%");
  const [taxRate] = useState("5%");
  const [bankAccount, setBankAccount] = useState({
    companyName: "LegalBusiness Name",
    accountNumber: "****1234",
    routingNumber: "****5678",
    bankName: "Chase Bank",
  });

  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <MerchantSidebar />

      {/* Main Content */}
      <div className="ml-72 flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="w-full space-y-8">
          {/* Delivery Transfer Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Delivery transfer</h2>
              <div className="flex items-center">
                <button
                  onClick={() => setDeliveryTransfer(!deliveryTransfer)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    deliveryTransfer ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      deliveryTransfer ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="ml-3 text-sm font-medium text-gray-900">{deliveryTransfer ? "ON" : "OFF"}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Enable this to provide transfer options for your customers. This will enable more delivery options for your customers. This
              will increase more delivery orders.
            </p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Recommended</span>
          </div>

          {/* Partnership Plan Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Partnership plan</h2>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Policy:</span> {partnershipPlan}
            </div>
          </div>

          {/* Tax Rate Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tax Rate</h2>
            <div className="text-sm text-gray-600">{taxRate}</div>
          </div>

          {/* Bank Account Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Bank Account</h2>

            {/* Company Subsection */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-900 flex items-center">
                  <span className="mr-2">🏢</span>
                  Company
                </h3>
                <button
                  onClick={() => setShowCompanyModal(true)}
                  className="px-3 py-1 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                >
                  EDIT
                </button>
              </div>
              <div className="text-sm text-gray-600">
                <div className="mb-1">
                  <span className="font-medium">Legal Business Name:</span>
                </div>
                <div>{bankAccount.companyName}</div>
              </div>
            </div>

            {/* Bank Account Subsection */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-900 flex items-center">
                  <span className="mr-2">🏦</span>
                  Bank Account
                </h3>
                <button
                  onClick={() => setShowBankModal(true)}
                  className="px-3 py-1 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                >
                  EDIT
                </button>
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <div>
                  <span className="font-medium">Account Number:</span>
                  <div>{bankAccount.accountNumber}</div>
                </div>
                <div>
                  <span className="font-medium">Routing Number:</span>
                  <div>{bankAccount.routingNumber}</div>
                </div>
                <div>
                  <span className="font-medium">Bank Name:</span>
                  <div>{bankAccount.bankName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Edit Modal */}
      {showCompanyModal && (
        <CompanyEditModal
          companyName={bankAccount.companyName}
          onClose={() => setShowCompanyModal(false)}
          onSave={(companyName) => {
            setBankAccount({ ...bankAccount, companyName });
            setShowCompanyModal(false);
          }}
        />
      )}

      {/* Bank Account Edit Modal */}
      {showBankModal && (
        <BankAccountEditModal
          bankAccount={bankAccount}
          onClose={() => setShowBankModal(false)}
          onSave={(updatedBankAccount) => {
            setBankAccount({ ...bankAccount, ...updatedBankAccount });
            setShowBankModal(false);
          }}
        />
      )}
    </div>
  );
};

const CompanyEditModal = ({ companyName, onClose, onSave }) => {
  const [name, setName] = useState(companyName);

  const handleSave = () => {
    if (name.trim()) {
      onSave(name.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Edit Company Information</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Legal Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter legal business name"
            />
          </div>
        </div>

        <div className="flex justify-end p-6 border-t border-gray-200 space-x-3">
          <button onClick={onClose} className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!name.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const BankAccountEditModal = ({ bankAccount, onClose, onSave }) => {
  const [accountNumber, setAccountNumber] = useState(bankAccount.accountNumber);
  const [routingNumber, setRoutingNumber] = useState(bankAccount.routingNumber);
  const [bankName, setBankName] = useState(bankAccount.bankName);

  const handleSave = () => {
    if (accountNumber.trim() && routingNumber.trim() && bankName.trim()) {
      onSave({
        accountNumber: accountNumber.trim(),
        routingNumber: routingNumber.trim(),
        bankName: bankName.trim(),
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Edit Bank Account</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter account number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Routing Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={routingNumber}
              onChange={(e) => setRoutingNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter routing number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bank Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter bank name"
            />
          </div>
        </div>

        <div className="flex justify-end p-6 border-t border-gray-200 space-x-3">
          <button onClick={onClose} className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!accountNumber.trim() || !routingNumber.trim() || !bankName.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
