# 🍕 Pizza Hut - React Pizza Ordering Application

A modern, full-featured pizza ordering web application built with React, Redux Toolkit, and React Router. This application provides a complete pizza ordering experience with user authentication, menu browsing, cart management, and order tracking.

## ✨ Features

### 🏠 **Home Page**
- Welcome screen with user authentication
- User name input and storage
- Seamless navigation to menu

### 🍕 **Menu System**
- Browse available pizzas with images and descriptions
- View ingredients and pricing
- Add pizzas to cart with quantity controls
- Real-time cart updates
- Sold-out item handling

### 🛒 **Shopping Cart**
- Add/remove items with quantity controls
- Real-time price calculations
- Cart overview with total items and price
- Clear cart functionality
- Persistent cart state

### 📝 **Order Management**
- Complete order form with customer details
- Phone number validation
- Address input with geolocation support
- Priority order option (20% additional cost)
- Order confirmation and tracking

### 📍 **Geolocation Features**
- Automatic address detection using GPS
- Reverse geocoding integration
- Manual address override capability

### 🔍 **Order Tracking**
- Search orders by order ID
- Real-time order status updates
- Estimated delivery time tracking
- Priority order indicators

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Redux Toolkit** - State management with RTK Query
- **React Router v7** - Client-side routing with loaders and actions
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### APIs & Services
- **Pizza API** - External REST API for menu and orders
- **Geocoding API** - Address reverse geocoding service
- **Geolocation API** - Browser-based location services

### Development Tools
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pizza-hut
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `https://pizza-hut-sigma.vercel.app/` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality
