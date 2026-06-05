"use client";

import Link from "next/link";
import { ShoppingBag, PlusCircle, Eye } from "lucide-react";
import { useState } from "react";

// Mock data
const mockOrders = [
  {
    id: "1",
    orderNumber: "ORD-001",
    customerName: "Priya Sharma",
    totalAmount: 4999,
    status: "DELIVERED",
    createdAt: "2024-05-20",
  },
  {
    id: "2",
    orderNumber: "ORD-002",
    customerName: "Anita Patel",
    totalAmount: 8998,
    status: "SHIPPED",
    createdAt: "2024-05-22",
  },
];

export default function OrdersPage() {
  const [orders] = useState(mockOrders);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING": return "bg-yellow-100 text-yellow-800";
      case "CONFIRMED": return "bg-blue-100 text-blue-800";
      case "PROCESSING": return "bg-purple-100 text-purple-800";
      case "SHIPPED": return "bg-indigo-100 text-indigo-800";
      case "DELIVERED": return "bg-green-100 text-green-800";
      case "CANCELLED": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
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
                <h1 className="text-2xl font-bold text-brand-primary">Orders</h1>
                <p className="text-sm text-gray-600">Manage all customer orders</p>
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
                href="/admin/orders/new"
                className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-accent 
                         transition-colors flex items-center gap-2"
              >
                <PlusCircle size={20} />
                Create Order
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {orders.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm">
            <ShoppingBag className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Orders Yet</h2>
            <p className="text-gray-600 mb-6">
              Create your first order manually or wait for customers to place orders.
            </p>
            <Link
              href="/admin/orders/new"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 
                       rounded-lg hover:bg-brand-accent transition-colors"
            >
              <PlusCircle size={20} />
              Create First Order
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Order Number
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Total
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-semibold text-brand-primary">{order.orderNumber}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-800">{order.customerName}</td>
                      <td className="px-6 py-4 text-gray-800 font-semibold">
                        ₹{order.totalAmount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(order.createdAt).toLocaleDateString("en-IN")}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-brand-primary hover:bg-brand-cream rounded-lg transition-colors">
                            <Eye size={18} />
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
