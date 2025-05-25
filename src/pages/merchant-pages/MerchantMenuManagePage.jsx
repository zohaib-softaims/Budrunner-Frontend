import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
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
  const [editingModifier, setEditingModifier] = useState(null);

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
      name: name.toUpperCase(),
      options: options.map((opt, index) => ({
        id: `${Date.now()}-${index}`,
        name: opt,
      })),
    };
    setModifiers([...modifiers, newModifier]);
  };

  const updateModifier = (id, name, options) => {
    setModifiers(
      modifiers.map((mod) =>
        mod.id === id
          ? {
              ...mod,
              name: name.toUpperCase(),
              options: options.map((opt, index) => ({
                id: mod.options[index]?.id || `${Date.now()}-${index}`,
                name: opt,
              })),
            }
          : mod
      )
    );
  };

  const deleteModifier = (id) => {
    setModifiers(modifiers.filter((mod) => mod.id !== id));
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
    <div className="ml-72 min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-4 lg:px-8 py-4 lg:py-8 border-b-2">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Menu Manager</h1>
      </div>

      {/* Content Area (Sidebar + Main Content) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 flex flex-col overflow-y-auto">
          {/* CATEGORIES - Top Half */}
          <div className="flex flex-col h-1/2 border-r-2 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-900">CATEGORIES</h3>
              <button
                onClick={() => setShowAddCategoryModal(true)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                + Add Category
              </button>
            </div>
            <div className="overflow-y-auto pr-1">
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      selectedCategory === category.id ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MODIFIERS - Bottom Half */}
          <div className="flex flex-col h-1/2 p-4 border-r-2 border-t-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-900">MODIFIERS</h3>
              <button
                onClick={() => {
                  setEditingModifier(null);
                  setShowAddModifierModal(true);
                }}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                + Add Modifier
              </button>
            </div>
            <div className="overflow-y-auto pr-1">
              <div className="space-y-1">
                {modifiers.map((modifier) => (
                  <div
                    key={modifier.id}
                    className="group flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>{modifier.name}</span>
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => {
                          setEditingModifier(modifier);
                          setShowAddModifierModal(true);
                        }}
                        className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => deleteModifier(modifier.id)}
                        className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Items */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {selectedCategoryData && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">{selectedCategoryData.name}</h2>
                  <button
                    onClick={() => setShowAddItemModal(true)}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus size={16} className="mr-2" />
                    Add Item
                  </button>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {selectedCategoryData.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setEditingItem(item)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                            <span className="text-gray-400 text-xs">IMAGE</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                            {item.usesModifierPricing && <p className="text-sm text-gray-500 mt-1">Uses modifier pricing</p>}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">
                            <span className="mr-6">Pickup price</span>
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

                  {selectedCategoryData.items.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                      <p className="text-gray-500">No items in this category yet</p>
                      <button onClick={() => setShowAddItemModal(true)} className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                        Add your first item
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
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
          modifier={editingModifier}
          onClose={() => {
            setShowAddModifierModal(false);
            setEditingModifier(null);
          }}
          onSave={(name, options) => {
            if (editingModifier) {
              updateModifier(editingModifier.id, name, options);
            } else {
              addModifier(name, options);
            }
            setShowAddModifierModal(false);
            setEditingModifier(null);
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
