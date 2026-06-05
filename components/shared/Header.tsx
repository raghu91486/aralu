"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, User, Heart } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16">
              <Image
                src="/brand/logo.jpeg"
                alt="ARALU"
                fill
                sizes="64px"
                className="object-contain rounded-lg group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="text-2xl font-bold text-brand-primary hidden sm:block">
              ARALU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-brand-primary transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="#categories"
              className="text-gray-700 hover:text-brand-primary transition-colors font-medium"
            >
              Categories
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-brand-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-brand-cream rounded-lg transition-colors hidden sm:block">
              <Heart size={24} className="text-gray-700" />
            </button>
            <Link
              href="/cart"
              className="p-2 hover:bg-brand-cream rounded-lg transition-colors relative"
            >
              <ShoppingBag size={24} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs w-5 h-5
                             rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-brand-cream rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-down">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-brand-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#categories"
                className="text-gray-700 hover:text-brand-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-brand-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
