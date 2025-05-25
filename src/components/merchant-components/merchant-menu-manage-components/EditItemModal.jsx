import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

export const EditItemModal = ({ item, categoryId, modifiers, onClose, onSave }) => {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.pickupPrice.toString());
  const [usesModifierPricing, setUsesModifierPricing] = useState(item.usesModifierPricing);
  const [options, setOptions] = useState(item.options);

  const addOption = () => {
    setOptions([...options, { id: Date.now().toString(), name: "", price: 0 }]);
  };

  const updateOption = (index, field, value) => {
    const newOptions = [...options];
    if (field === "name") {
      newOptions[index].name = value;
    } else {
      newOptions[index].price = value;
    }
    setOptions(newOptions);
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (name.trim() && (usesModifierPricing || price.trim())) {
      const priceValue = Number.parseFloat(price) || 0;
      const updatedItem = {
        ...item,
        name: name.trim(),
        pickupPrice: priceValue,
        deliveryPrice: priceValue,
        usesModifierPricing,
        options: options.filter((opt) => opt.name.trim()),
      };
      onSave(categoryId, updatedItem);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Item</h2>
            <p className="text-sm text-gray-600">{item.name}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">Required</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price <span className="text-red-500">Required</span>
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="fixed-price"
                  checked={!usesModifierPricing}
                  onChange={() => setUsesModifierPricing(false)}
                  className="mr-2"
                />
                <label htmlFor="fixed-price" className="text-sm">
                  $ price
                </label>
              </div>
              <span className="text-gray-400">or</span>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="modifier-price"
                  checked={usesModifierPricing}
                  onChange={() => setUsesModifierPricing(true)}
                  className="mr-2"
                />
                <label htmlFor="modifier-price" className="text-sm">
                  modifier pricing
                </label>
              </div>
            </div>
            {!usesModifierPricing && (
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                step="0.01"
              />
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
            <div className="space-y-3">
              {options.map((option, index) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={option.name}
                    onChange={(e) => updateOption(index, "name", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Option name"
                  />
                  <input
                    type="number"
                    value={option.price || ""}
                    onChange={(e) => updateOption(index, "price", Number.parseFloat(e.target.value) || 0)}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="$ price"
                    step="0.01"
                  />
                  <button onClick={() => removeOption(index)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <button onClick={addOption} className="mt-3 text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center space-x-1">
              <Plus size={16} />
              <span>ADD A OPTION</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end p-6 border-t border-gray-200">
          <button
            onClick={handleSave}
            disabled={!name.trim() || (!usesModifierPricing && !price.trim())}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
