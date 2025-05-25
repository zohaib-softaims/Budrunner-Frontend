import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

export const AddItemModal = ({ categoryId, modifiers, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [pickupPrice, setPickupPrice] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState("");
  const [usesModifierPricing, setUsesModifierPricing] = useState(false);
  const [selectedModifier, setSelectedModifier] = useState("");
  const [options, setOptions] = useState([]);

  const addOption = () => {
    setOptions([...options, { id: Date.now().toString(), name: "", price: 0 }]);
  };

  const updateOption = (index, field, value) => {
    const newOptions = [...options];
    if (field === "name") {
      newOptions[index].name = value;
    } else {
      newOptions[index].price = parseFloat(value) || 0;
    }
    setOptions(newOptions);
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleModifierChange = (modifierId) => {
    setSelectedModifier(modifierId);
    const modifier = modifiers.find((m) => m.id === modifierId);
    if (modifier) {
      setOptions(
        modifier.options.map((opt) => ({
          id: opt.id,
          name: opt.name,
          price: 0,
        }))
      );
    }
  };

  const handleSave = () => {
    if (name.trim() && (usesModifierPricing ? selectedModifier : (pickupPrice.trim() && deliveryPrice.trim()))) {
      const item = {
        name: name.trim(),
        pickupPrice: usesModifierPricing ? 0 : parseFloat(pickupPrice) || 0,
        deliveryPrice: usesModifierPricing ? 0 : parseFloat(deliveryPrice) || 0,
        usesModifierPricing,
        selectedModifier: usesModifierPricing ? selectedModifier : null,
        options: usesModifierPricing ? options.filter((opt) => opt.name.trim()) : [],
      };
      onSave(categoryId, item);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[480px] max-h-[85vh] overflow-y-auto shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Add Item</h2>
            <p className="text-sm text-gray-500 mt-1">Create a new item for your menu</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter item name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Pricing Type <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={!usesModifierPricing}
                  onChange={() => setUsesModifierPricing(false)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Fixed Price</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={usesModifierPricing}
                  onChange={() => setUsesModifierPricing(true)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Modifier Pricing</span>
              </label>
            </div>
          </div>

          {!usesModifierPricing ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={pickupPrice}
                    onChange={(e) => setPickupPrice(e.target.value)}
                    className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={deliveryPrice}
                    onChange={(e) => setDeliveryPrice(e.target.value)}
                    className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Modifier <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedModifier}
                  onChange={(e) => handleModifierChange(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a modifier</option>
                  {modifiers.map((modifier) => (
                    <option key={modifier.id} value={modifier.id}>
                      {modifier.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedModifier && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Set Prices for Options
                  </label>
                  <div className="space-y-3">
                    {options.map((option, index) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <span className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                          {option.name}
                        </span>
                        <div className="relative w-32">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <input
                            type="number"
                            value={option.price || ""}
                            onChange={(e) => updateOption(index, "price", e.target.value)}
                            className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="0.00"
                            step="0.01"
                            min="0"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={
              !name.trim() ||
              (!usesModifierPricing && (!pickupPrice.trim() || !deliveryPrice.trim())) ||
              (usesModifierPricing && !selectedModifier)
            }
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Save Item
          </button>
        </div>
      </div>
    </div>
  );
};
