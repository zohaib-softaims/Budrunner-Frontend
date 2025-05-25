import { useState, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";

export const AddModifierModal = ({ modifier, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [options, setOptions] = useState([""]);

  // Update form when modifier prop changes (for editing)
  useEffect(() => {
    if (modifier) {
      setName(modifier.name);
      setOptions(modifier.options.map(opt => opt.name));
    } else {
      setName("");
      setOptions([""]);
    }
  }, [modifier]);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (name.trim() && options.some((opt) => opt.trim())) {
      onSave(
        name.trim(),
        options.filter((opt) => opt.trim())
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[480px] max-h-[85vh] overflow-y-auto shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{modifier ? "Edit Modifier" : "Add Modifier"}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {modifier ? "Update your existing modifier" : "Create a new modifier for your menu items"}
            </p>
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
              Modifier Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="e.g., Size, Weight, etc."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Options <span className="text-red-500">*</span>
              </label>
              <button 
                onClick={addOption}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors"
              >
                <Plus size={16} />
                <span>Add Option</span>
              </button>
            </div>
            <div className="space-y-3">
              {options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={`Option ${index + 1}`}
                  />
                  {options.length > 1 && (
                    <button 
                      onClick={() => removeOption(index)} 
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
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
            disabled={!name.trim() || !options.some((opt) => opt.trim())}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {modifier ? "Update Modifier" : "Save Modifier"}
          </button>
        </div>
      </div>
    </div>
  );
};
