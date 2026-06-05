"use client";

import Link from "next/link";
import { Users, PlusCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

const mockCustomers = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 98765 43210",
    city: "Mumbai",
    totalOrders: 3,
  },
  {
    id: "2",
    name: "Anita Patel",
    email: "anita@example.com",
    phone: "+91 98765 43211",
    city: "Ahmedabad",
    totalOrders: 5,
  },
];

export default function CustomersPage() {
  const [customers] = useState(mockCustomers);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="text-brand-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-brand-primary">Customers</h1>
                <p className="text-sm text-gray-600">Manage your customer database</p>
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
                href="/admin/customers/new"
                className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-accent 
                         transition-colors flex items-center gap-2"
              >
                <PlusCircle size={20} />
                Add Customer
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {customers.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm">
            <Users className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Customers Yet</h2>
            <p className="text-gray-600 mb-6">
              Add your first customer to start building your customer database.
            </p>
            <Link
              href="/admin/customers/new"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 
                       rounded-lg hover:bg-brand-accent transition-colors"
            >
              <PlusCircle size={20} />
              Add First Customer
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customers.map((customer) => (
              <div key={customer.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {customer.name.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-500">{customer.totalOrders} orders</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{customer.name}</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="text-gray-600">
                    📍 {customer.city}
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-brand-cream text-brand-primary px-4 py-2 rounded-lg 
                                 hover:bg-brand-primary hover:text-white transition-colors font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
