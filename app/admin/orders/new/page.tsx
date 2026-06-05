"use client";

import Link from "next/link";
import { ShoppingBag, ArrowLeft, Plus, Trash2, Save } from "lucide-react";
import { useState } from "react";

interface OrderItem {
  id: string;
  productName: string;
  price: number;
  quantity: number;
}

export default function NewOrderPage() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    shippingAddress: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "COD",
    notes: "",
  });

  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [newItem, setNewItem] = useState({
    productName: "",
    price: "",
    quantity: "1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addItem = () => {
    if (newItem.productName && newItem.price) {
      setOrderItems(prev => [...prev, {
        id: Date.now().toString(),
        productName: newItem.productName,
        price: parseFloat(newItem.price),
        quantity: parseInt(newItem.quantity) || 1,
      }]);
      setNewItem({ productName: "", price: "", quantity: "1" });
    }
  };

  const removeItem = (id: string) => {
    setOrderItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order data:", { formData, orderItems, total: calculateTotal() });
    alert("Order creation will be implemented with database!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="text-brand-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-brand-primary">Create New Order</h1>
                <p className="text-sm text-gray-600">Manually create an order</p>
              </div>
            </div>
            
            <Link
              href="/admin/orders"
              className="text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Orders
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Customer & Shipping */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                               focus:ring-brand-primary focus:border-transparent"
                      placeholder="Enter customer name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                               focus:ring-brand-primary focus:border-transparent"
                      placeholder="customer@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                               focus:ring-brand-primary focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      name="shippingAddress"
                      value={formData.shippingAddress}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                               focus:ring-brand-primary focus:border-transparent"
                      placeholder="Full shipping address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="City" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                               focus:ring-brand-primary focus:border-transparent"
                      placeholder="State" />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                               focus:ring-brand-primary focus:border-transparent"
                      placeholder="6-digit pincode" />
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Order Items</h2>

                {/* Add Item Form */}
                <div className="grid grid-cols-12 gap-3 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="col-span-5">
                    <input
                      type="text"
                      value={newItem.productName}
                      onChange={(e) => setNewItem(prev => ({ ...prev, productName: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2
                               focus:ring-brand-primary focus:border-transparent"
                      placeholder="Product name"
                    />
                  </div>
                  <div className="col-span-3">
                    <input
                      type="number"
                      value={newItem.price}
                      onChange={(e) => setNewItem(prev => ({ ...prev, price: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2
                               focus:ring-brand-primary focus:border-transparent"
                      placeholder="Price"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="number"
                      value={newItem.quantity}
                      onChange={(e) => setNewItem(prev => ({ ...prev, quantity: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2
                               focus:ring-brand-primary focus:border-transparent"
                      placeholder="Qty"
                      min="1"
                    />
                  </div>
                  <div className="col-span-2">
                    <button
                      type="button"
                      onClick={addItem}
                      className="w-full bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-accent
                               transition-colors flex items-center justify-center gap-1"
                    >
                      <Plus size={16} />
                      Add
                    </button>
                  </div>
                </div>

                {/* Items List */}
                {orderItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No items added yet. Add items above.</p>
                ) : (
                  <div className="space-y-2">
                    {orderItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{item.productName}</p>
                          <p className="text-sm text-gray-600">
                            ₹{item.price.toLocaleString()} × {item.quantity} = ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Items:</span>
                    <span>{orderItems.length}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span>₹{calculateTotal().toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg text-gray-800">
                    <span>Total:</span>
                    <span className="text-brand-primary">₹{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                             focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="COD">Cash on Delivery</option>
                    <option value="ONLINE">Online Payment</option>
                    <option value="BANK_TRANSFER">Bank Transfer</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="Any special instructions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={orderItems.length === 0}
                  className="w-full bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-accent
                           transition-colors flex items-center justify-center gap-2 font-semibold
                           disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <Save size={20} />
                  Create Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
