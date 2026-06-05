"use client";

import Link from "next/link";
import { Package, ArrowLeft, Upload, Save } from "lucide-react";
import { useState } from "react";

export default function NewProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    compareAt: "",
    stock: "",
    category: "",
    fabric: "",
    color: "",
    length: "",
    blousePiece: false,
    occasion: "",
    featured: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement product creation
    console.log("Product data:", formData);
    alert("Product creation will be implemented with database!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Package className="text-brand-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-brand-primary">Add New Product</h1>
                <p className="text-sm text-gray-600">Create a new saree listing</p>
              </div>
            </div>
            
            <Link
              href="/admin/products"
              className="text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Products
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            {/* Basic Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="e.g., Silk Saree - Royal Blue"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="Describe the saree..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="4999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Compare At Price (₹)
                  </label>
                  <input
                    type="number"
                    name="compareAt"
                    value={formData.compareAt}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="5999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock Quantity *
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    <option value="silk">Silk Sarees</option>
                    <option value="cotton">Cotton Sarees</option>
                    <option value="designer">Designer Sarees</option>
                    <option value="traditional">Traditional Sarees</option>
                    <option value="party-wear">Party Wear</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Saree Details */}
            <div className="mb-8 border-t pt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Saree Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fabric</label>
                  <input type="text" name="fabric" value={formData.fabric} onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="e.g., Pure Silk" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <input type="text" name="color" value={formData.color} onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="e.g., Royal Blue" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Length</label>
                  <input type="text" name="length" value={formData.length} onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="e.g., 6.3 meters" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Occasion</label>
                  <input type="text" name="occasion" value={formData.occasion} onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                             focus:ring-brand-primary focus:border-transparent"
                    placeholder="e.g., Wedding, Party, Casual" />
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="blousePiece"
                      checked={formData.blousePiece}
                      onChange={handleChange}
                      className="w-5 h-5 text-brand-primary rounded focus:ring-2 focus:ring-brand-primary"
                    />
                    <span className="text-sm font-medium text-gray-700">Includes Blouse Piece</span>
                  </label>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="w-5 h-5 text-brand-primary rounded focus:ring-2 focus:ring-brand-primary"
                    />
                    <span className="text-sm font-medium text-gray-700">Featured Product</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-8 border-t pt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Product Images</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-brand-primary transition-colors">
                <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                <input type="file" multiple accept="image/*" className="hidden" />
                <button
                  type="button"
                  className="mt-4 bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-accent transition-colors"
                >
                  Select Images
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Note: Image upload will be fully functional once Cloudinary is configured.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 justify-end border-t pt-6">
              <Link
                href="/admin/products"
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-accent
                         transition-colors flex items-center gap-2 font-semibold"
              >
                <Save size={20} />
                Save Product
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
