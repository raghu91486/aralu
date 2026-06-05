"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users, 
  PlusCircle,
  TrendingUp,
  DollarSign
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="text-brand-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-brand-primary">ARALU Admin</h1>
                <p className="text-sm text-gray-600">Manage your saree business</p>
              </div>
            </div>
            
            <Link
              href="/"
              className="text-brand-primary hover:text-brand-accent transition-colors"
            >
              View Website →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<DollarSign className="text-green-600" size={28} />}
            title="Total Revenue"
            value="₹0"
            bgColor="bg-green-50"
          />
          <StatCard
            icon={<ShoppingBag className="text-blue-600" size={28} />}
            title="Total Orders"
            value="0"
            bgColor="bg-blue-50"
          />
          <StatCard
            icon={<Package className="text-purple-600" size={28} />}
            title="Products"
            value="0"
            bgColor="bg-purple-50"
          />
          <StatCard
            icon={<Users className="text-orange-600" size={28} />}
            title="Customers"
            value="0"
            bgColor="bg-orange-50"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ActionCard
              icon={<PlusCircle className="text-brand-primary" size={32} />}
              title="Add New Product"
              description="Add a new saree to your collection"
              href="/admin/products/new"
              buttonText="Add Product"
            />
            <ActionCard
              icon={<ShoppingBag className="text-brand-accent" size={32} />}
              title="Create Order"
              description="Manually create a new order"
              href="/admin/orders/new"
              buttonText="Create Order"
            />
            <ActionCard
              icon={<Users className="text-brand-sage" size={32} />}
              title="Add Customer"
              description="Add a new customer to the system"
              href="/admin/customers/new"
              buttonText="Add Customer"
            />
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ManagementCard
            title="Product Management"
            description="View, edit, and manage all products"
            href="/admin/products"
            icon={<Package className="text-brand-primary" size={48} />}
          />
          <ManagementCard
            title="Order Management"
            description="View and manage all customer orders"
            href="/admin/orders"
            icon={<ShoppingBag className="text-brand-accent" size={48} />}
          />
          <ManagementCard
            title="Customer Management"
            description="View and manage customer information"
            href="/admin/customers"
            icon={<Users className="text-brand-sage" size={48} />}
          />
          <ManagementCard
            title="Analytics"
            description="View sales reports and analytics"
            href="/admin/analytics"
            icon={<TrendingUp className="text-brand-secondary" size={48} />}
          />
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, title, value, bgColor }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  bgColor: string;
}) {
  return (
    <div className={`${bgColor} p-6 rounded-xl shadow-sm`}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        {icon}
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

function ActionCard({ icon, title, description, href, buttonText }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-block bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-accent transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}

function ManagementCard({ icon, title, description, href }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all hover:scale-105 group"
    >
      <div className="mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
