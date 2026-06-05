# ARALU Sarees - E-Commerce Website

A beautiful, mobile-responsive e-commerce website built with Next.js 14 for ARALU sarees business.

## 🎨 Features

### Customer-Facing Website
- ✨ Beautiful homepage with brand showcase
- 🛍️ Product catalog with categories
- 📱 Fully mobile responsive design
- 🎨 Elegant color scheme perfect for saree business
- 🖼️ Product image galleries
- 🛒 Shopping cart functionality (coming soon)

### Admin Panel
- 📊 Dashboard with business analytics
- ➕ Add/Edit/Delete products
- 📦 Manage orders manually
- 👥 Customer management
- 📈 Sales tracking
- 🎯 Order status management (Pending, Confirmed, Processing, Shipped, Delivered, Cancelled)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
aralu-sarees/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── products/                # Product catalog
│   ├── admin/                   # Admin panel
│   │   ├── page.tsx            # Admin dashboard
│   │   ├── products/           # Product management
│   │   ├── orders/             # Order management
│   │   └── customers/          # Customer management
│   └── api/                    # API routes
├── lib/
│   └── utils.ts                # Utility functions
├── prisma/
│   └── schema.prisma           # Database schema
└── public/
    ├── brand/                  # Brand assets (logo, hero images)
    └── images/                 # Product images
```

## 🎯 Usage Guide

### For Store Owner (Admin)

1. **Add Products**: Go to `/admin/products/new`
2. **Manage Orders**: View all orders at `/admin/orders`
3. **Create Manual Orders**: `/admin/orders/new`
4. **Manage Customers**: `/admin/customers`

### For Customers

1. **Browse Products**: Visit homepage and click "Shop Now"
2. **View Collection**: Browse by categories

## 🎨 Color Palette

- **Primary**: #8B4513 (Rich Brown)
- **Secondary**: #DAA520 (Golden)
- **Accent**: #DC143C (Crimson)
- **Sage**: #9CA777 (Sage Green)
- **Cream**: #FFF8DC (Background)
- **Rose**: #FFE4E1 (Accents)

## 🔧 Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM (ready to configure)
- **Icons**: Lucide React
- **Image Hosting**: Cloudinary (ready to configure)

## 📱 Mobile Responsiveness

Fully responsive and optimized for:
- 📱 Mobile devices (iOS & Android)
- 📱 Tablets
- 💻 Desktop (all screen sizes)

## 🚀 Deployment

Deploy to Vercel:
```bash
npm i -g vercel
vercel
```

## 📝 Next Steps

- [ ] Set up PostgreSQL database
- [ ] Configure Cloudinary for images
- [ ] Add payment gateway
- [ ] Email notifications
- [ ] WhatsApp integration

---

**Built with ❤️ for ARALU Sarees**
