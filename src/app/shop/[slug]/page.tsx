"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { PRODUCTS } from "@/lib/mock-products";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Minus,
  Plus,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = PRODUCTS.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "#09090b", color: "#fafafa" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            404
          </h1>
          <p
            className="text-lg mb-8"
            style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
          >
            This piece doesn&apos;t exist in our collection
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              backgroundColor: "#c8a97e",
              color: "#09090b",
            }}
          >
            <ArrowLeft size={16} />
            Back to Shop
          </Link>
        </motion.div>
      </div>
    );
  }

  const colorMap: Record<string, string> = {
    Silver: "#c0c0c0",
    Gunmetal: "#53565a",
    "Rose Gold": "#b76e79",
    Black: "#1a1a1a",
    Charcoal: "#36454f",
    "Matte Black": "#28282B",
    "Polished Silver": "#e8e8e8",
    Slate: "#708090",
    Olive: "#556b2f",
    Carbon: "#333333",
    "Washed Black": "#3d3d3d",
    Bone: "#e3dac9",
    Rust: "#b7410e",
    "Matte Black / Smoke": "#2d2d2d",
    "Clear / Blue Mirror": "#6495ed",
    "Heather Grey": "#9e9e9e",
    Navy: "#000080",
    "Black / Neon": "#1a1a1a",
    Graphite: "#474747",
    "Sterling Silver": "#d0d0d0",
    "14K Gold Vermeil": "#d4a017",
    Holographic: "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
    "Oxidized Silver": "#6e6e6e",
    "Black Rhodium": "#3a3a3a",
  };

  const tagColors: Record<string, { bg: string; text: string }> = {
    new: { bg: "#c8a97e", text: "#09090b" },
    limited: { bg: "#c4a0b0", text: "#09090b" },
    sale: { bg: "#d4a574", text: "#09090b" },
  };

  const mainGradient =
    selectedImage === 0
      ? product.gradient
      : product.thumbnailGradients[selectedImage] || product.gradient;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#09090b", color: "#fafafa" }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200 mb-10 group"
            style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span className="group-hover:text-[#c8a97e] transition-colors duration-200">
              Back to Shop
            </span>
          </Link>
        </motion.div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column — Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Main Image */}
            <div
              className="relative aspect-square rounded-2xl overflow-hidden mb-4"
              style={{
                background: mainGradient,
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(9,9,11,0.3) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-6xl md:text-8xl font-bold opacity-10 select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name.charAt(0)}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-3">
              {product.thumbnailGradients.map((grad, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className="aspect-square rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    background: grad,
                    border: selectedImage === i ? "2px solid #c8a97e" : "2px solid transparent",
                    opacity: selectedImage === i ? 1 : 0.6,
                    transform: selectedImage === i ? "scale(1.02)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column — Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-xs mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Link
                href="/shop"
                className="transition-colors duration-200 hover:text-[#c8a97e]"
                style={{ color: "#c8a97e" }}
              >
                Shop
              </Link>
              <span style={{ color: "#71717a" }}>/</span>
              <Link
                href="/shop"
                className="capitalize transition-colors duration-200 hover:text-[#c8a97e]"
                style={{ color: "#c8a97e" }}
              >
                {product.category}
              </Link>
              <span style={{ color: "#71717a" }}>/</span>
              <span style={{ color: "#71717a" }}>{product.name}</span>
            </nav>

            {/* Brand */}
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: "'Inter', sans-serif", color: "#c8a97e" }}
            >
              {product.brand}
            </p>

            {/* Product Name */}
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "#fafafa" }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              {product.originalPrice ? (
                <span
                  className="text-lg line-through"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#71717a",
                  }}
                >
                  ${product.originalPrice}
                </span>
              ) : null}
              <span
                className="text-2xl font-bold"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: product.originalPrice ? "#c8a97e" : "#fafafa",
                }}
              >
                ${product.price}
              </span>
            </div>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: tagColors[tag].bg,
                      color: tagColors[tag].text,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  fill={star <= 4 ? "#c8a97e" : star === 5 ? "url(#halfStar)" : "none"}
                  stroke={star <= 4 ? "#c8a97e" : "#c8a97e"}
                  style={{ color: "#c8a97e", opacity: star === 5 ? 0.4 : 1 }}
                />
              ))}
              <span
                className="text-xs ml-2"
                style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
              >
                4.5 / 5
              </span>
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#a1a1aa",
                lineHeight: "1.8",
              }}
            >
              {product.description}
            </p>

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <p
                  className="text-xs font-medium uppercase tracking-wider mb-3"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
                >
                  Color — <span style={{ color: "#fafafa" }}>{product.colors[selectedColor]}</span>
                </p>
                <div className="flex items-center gap-3">
                  {product.colors.map((color, i) => {
                    const bg = colorMap[color] || "#888";
                    const isGradient = bg.startsWith("linear-gradient");
                    return (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(i)}
                        className="w-8 h-8 rounded-full transition-all duration-200"
                        title={color}
                        style={{
                          background: isGradient ? bg : bg,
                          border: selectedColor === i ? "2px solid #c8a97e" : "2px solid #1c1c1f",
                          boxShadow:
                            selectedColor === i ? "0 0 0 2px #09090b, 0 0 0 4px #c8a97e" : "none",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 ? (
              <div className="mb-6">
                <p
                  className="text-xs font-medium uppercase tracking-wider mb-3"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
                >
                  Size
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        backgroundColor: selectedSize === size ? "transparent" : "transparent",
                        color: selectedSize === size ? "#c8a97e" : "#71717a",
                        border: selectedSize === size ? "1px solid #c8a97e" : "1px solid #1c1c1f",
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Quantity Selector */}
            <div className="mb-8">
              <p
                className="text-xs font-medium uppercase tracking-wider mb-3"
                style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
              >
                Quantity
              </p>
              <div
                className="inline-flex items-center rounded-lg overflow-hidden"
                style={{ border: "1px solid #1c1c1f" }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 transition-colors duration-200 hover:bg-white/5"
                  style={{ color: "#71717a" }}
                >
                  <Minus size={14} />
                </button>
                <span
                  className="px-5 py-2.5 text-sm font-medium min-w-[48px] text-center"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#fafafa",
                    borderLeft: "1px solid #1c1c1f",
                    borderRight: "1px solid #1c1c1f",
                  }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 transition-colors duration-200 hover:bg-white/5"
                  style={{ color: "#71717a" }}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mb-8">
              {/* Add to Cart */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-lg text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "#c8a97e",
                  color: "#09090b",
                  boxShadow: "0 0 0 0 rgba(200,169,126,0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(200,169,126,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 0 rgba(200,169,126,0)";
                }}
              >
                <ShoppingCart size={18} />
                Add to Cart
              </motion.button>

              {/* Wishlist & Share Row */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setWishlisted(!wishlisted)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: "transparent",
                    color: wishlisted ? "#c8a97e" : "#71717a",
                    border: wishlisted ? "1px solid #c8a97e" : "1px solid #1c1c1f",
                  }}
                >
                  <Heart size={16} fill={wishlisted ? "#c8a97e" : "none"} />
                  {wishlisted ? "Wishlisted" : "Add to Wishlist"}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 rounded-lg transition-all duration-200"
                  style={{
                    border: "1px solid #1c1c1f",
                    color: "#71717a",
                  }}
                >
                  <Share2 size={16} />
                </motion.button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8" style={{ borderTop: "1px solid #1c1c1f" }}>
              <div className="flex flex-col items-center text-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#111113" }}
                >
                  <Truck size={18} style={{ color: "#c8a97e" }} />
                </div>
                <span
                  className="text-xs"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
                >
                  Free Shipping
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#111113" }}
                >
                  <Shield size={18} style={{ color: "#c8a97e" }} />
                </div>
                <span
                  className="text-xs"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
                >
                  Secure Payment
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#111113" }}
                >
                  <RotateCcw size={18} style={{ color: "#c8a97e" }} />
                </div>
                <span
                  className="text-xs"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
                >
                  Easy Returns
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
