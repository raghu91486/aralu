"use client";

import Link from "next/link";
import { PlusCircle, Package, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

// Mock data - will be replaced with actual database data
const mockProducts = [
  {
    id: "1",
    name: "Silk Saree - Royal Blue",
    category: "Silk Sarees",
    price: 4999,
    stock: 5,
    image: "/images/sample1.jpg",
  },
  {
    id: "2",
    name: "Cotton Saree - Floral Print",
    category: "Cotton Sarees",
    price: 1999,
    stock: 10,
    image: "/images/sample2.jpg",
  },
];

export default function ProductsPage() {
  const [products] = useState(mockProducts);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Package className="text-brand-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-brand-primary">Products</h1>
                <p className="text-sm text-gray-600">Manage your saree collection</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Link
                href="/admin"
                className="text-brand-primary hover:text-brand-accent transition-colors"
              >
                ← Back to Dashboard
              </Link>
              <Link
                href="/admin/products/new"
                className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-accent 
                         transition-colors flex items-center gap-2"
              >
                <PlusCircle size={20} />
                Add Product
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {products.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm">
            <Package className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Products Yet</h2>
            <p className="text-gray-600 mb-6">
              Start building your collection by adding your first saree product.
            </p>
            <Link
              href="/admin/products/new"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 
                       rounded-lg hover:bg-brand-accent transition-colors"
            >
              <PlusCircle size={20} />
              Add Your First Product
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Product
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Stock
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                          <span className="font-medium text-gray-800">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{product.category}</td>
                      <td className="px-6 py-4 text-gray-800 font-semibold">
                        ₹{product.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          product.stock > 5 ? 'bg-green-100 text-green-800' : 
                          product.stock > 0 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {product.stock} in stock
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit size={18} />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
