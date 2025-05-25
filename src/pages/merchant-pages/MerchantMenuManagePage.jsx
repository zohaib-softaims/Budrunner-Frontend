import { useState } from "react";
import { Plus } from "lucide-react";
import { AddCategoryModal } from "../../components/merchant-components/merchant-menu-manage-components/AddCategoryModal";
import { AddModifierModal } from "../../components/merchant-components/merchant-menu-manage-components/AddModifierModal";
import { AddItemModal } from "../../components/merchant-components/merchant-menu-manage-components/AddItemModal";
import { EditItemModal } from "../../components/merchant-components/merchant-menu-manage-components/EditItemModal";

export const MerchantMenuManagePage = () => {
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "FLOWER",
      items: [
        {
          id: "1",
          name: "Master Kush Platinum",
          pickupPrice: 15.99,
          deliveryPrice: 15.99,
          usesModifierPricing: false,
          options: [
            { id: "1", name: "3.5 Grams", price: 15.99 },
            { id: "2", name: "7 Grams", price: 28.99 },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "VAPES",
      items: [],
    },
    {
      id: "3",
      name: "WRAPS",
      items: [],
    },
  ]);

  const [modifiers, setModifiers] = useState([
    {
      id: "1",
      name: "GRAMS SELECTIONS",
      options: [
        { id: "1", name: "3.5 Grams" },
        { id: "2", name: "7 Grams" },
      ],
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("1");
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddModifierModal, setShowAddModifierModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);

  const addCategory = (name) => {
    const newCategory = {
      id: Date.now().toString(),
      name: name.toUpperCase(),
      items: [],
    };
    setCategories([...categories, newCategory]);
  };

  const addModifier = (name, options) => {
    const newModifier = {
      id: Date.now().toString(),
      name,
      options: options.map((opt, index) => ({
        id: `${Date.now()}-${index}`,
        name: opt,
      })),
    };
    setModifiers([...modifiers, newModifier]);
  };

  const addItem = (categoryId, item) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
    };

    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: [...cat.items, newItem],
            }
          : cat
      )
    );
  };

  const updateItem = (categoryId, updatedItem) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
            }
          : cat
      )
    );
  };

  return (
    <div className="ml-72 min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-6">
        {/* Categories Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-900 mb-4">CATEGORIES</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                  selectedCategory === category.id ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <button onClick={() => setShowAddCategoryModal(true)} className="mt-3 text-blue-600 text-sm font-medium hover:text-blue-700">
            + ADD A CATEGORY
          </button>
        </div>

        {/* Modifiers Section */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">MODIFIERS</h3>
          <div className="space-y-2">
            {modifiers.map((modifier) => (
              <div key={modifier.id} className="px-3 py-2 text-sm text-gray-700">
                {modifier.name}
              </div>
            ))}
          </div>
          <button onClick={() => setShowAddModifierModal(true)} className="mt-3 text-blue-600 text-sm font-medium hover:text-blue-700">
            + ADD A MODIFIER
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Menu Manager</h1>

        {selectedCategoryData && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">{selectedCategoryData.name}</h2>
            </div>

            {/* Items */}
            <div className="space-y-4">
              {selectedCategoryData.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setEditingItem(item)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-xs">IMG</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">
                        <span className="mr-4">Pickup price</span>
                        <span>Delivery price</span>
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        <span className="mr-8">${item.pickupPrice.toFixed(2)}</span>
                        <span>${item.deliveryPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Item Button */}
              <button
                onClick={() => setShowAddItemModal(true)}
                className="w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors flex items-center justify-center space-x-2"
              >
                <Plus size={20} />
                <span>Add a Item</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showAddCategoryModal && (
        <AddCategoryModal
          onClose={() => setShowAddCategoryModal(false)}
          onSave={(name) => {
            addCategory(name);
            setShowAddCategoryModal(false);
          }}
        />
      )}

      {showAddModifierModal && (
        <AddModifierModal
          onClose={() => setShowAddModifierModal(false)}
          onSave={(name, options) => {
            addModifier(name, options);
            setShowAddModifierModal(false);
          }}
        />
      )}

      {showAddItemModal && selectedCategoryData && (
        <AddItemModal
          categoryId={selectedCategoryData.id}
          modifiers={modifiers}
          onClose={() => setShowAddItemModal(false)}
          onSave={(categoryId, item) => {
            addItem(categoryId, item);
            setShowAddItemModal(false);
          }}
        />
      )}

      {editingItem && selectedCategoryData && (
        <EditItemModal
          item={editingItem}
          categoryId={selectedCategoryData.id}
          modifiers={modifiers}
          onClose={() => setEditingItem(null)}
          onSave={(categoryId, item) => {
            updateItem(categoryId, item);
            setEditingItem(null);
          }}
        />
      )}
    </div>
  );
};
