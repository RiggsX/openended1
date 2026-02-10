"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ArrowUpDown } from "lucide-react";
import { PRODUCTS, BRANDS, STYLES, CATEGORIES, type Category } from "@/lib/mock-products";
import { ProductCard } from "@/components/ui/product-card";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [brandOpen, setBrandOpen] = useState(false);
  const [styleOpen, setStyleOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (selectedBrand !== "all") {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    if (selectedStyle !== "all") {
      result = result.filter((p) => p.style === selectedStyle);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }

    result = [...result].sort((a, b) => (sortAsc ? a.price - b.price : b.price - a.price));

    return result;
  }, [activeCategory, selectedBrand, selectedStyle, searchQuery, sortAsc]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#09090b", color: "#fafafa" }}>
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(200,169,126,0.3) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#fafafa" }}
          >
            The Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl max-w-md mx-auto"
            style={{ color: "#71717a", fontFamily: "'Inter', sans-serif" }}
          >
            Curated pieces for the discerning eye
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-8 mx-auto h-px w-24"
            style={{ backgroundColor: "#c8a97e" }}
          />
        </div>
      </section>

      {/* Filter Bar */}
      <section
        className="sticky top-0 z-30 backdrop-blur-xl border-b"
        style={{ backgroundColor: "rgba(9,9,11,0.85)", borderColor: "#1c1c1f" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: activeCategory === cat ? "#c8a97e" : "transparent",
                  color: activeCategory === cat ? "#09090b" : "#71717a",
                  border: activeCategory === cat ? "1px solid #c8a97e" : "1px solid #1c1c1f",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Brand Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setBrandOpen(!brandOpen);
                  setStyleOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "#111113",
                  border: "1px solid #1c1c1f",
                  color: selectedBrand !== "all" ? "#c8a97e" : "#71717a",
                }}
              >
                <span>{selectedBrand === "all" ? "Brand" : selectedBrand}</span>
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: brandOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <AnimatePresence>
                {brandOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 min-w-[180px] rounded-lg overflow-hidden z-50 shadow-2xl"
                    style={{
                      backgroundColor: "#111113",
                      border: "1px solid #1c1c1f",
                    }}
                  >
                    <button
                      onClick={() => {
                        setSelectedBrand("all");
                        setBrandOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-white/5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: selectedBrand === "all" ? "#c8a97e" : "#71717a",
                      }}
                    >
                      All Brands
                    </button>
                    {BRANDS.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => {
                          setSelectedBrand(brand);
                          setBrandOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-white/5"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: selectedBrand === brand ? "#c8a97e" : "#71717a",
                        }}
                      >
                        {brand}
                      </button>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {/* Style Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setStyleOpen(!styleOpen);
                  setBrandOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "#111113",
                  border: "1px solid #1c1c1f",
                  color: selectedStyle !== "all" ? "#c8a97e" : "#71717a",
                }}
              >
                <span>{selectedStyle === "all" ? "Style" : selectedStyle}</span>
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: styleOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <AnimatePresence>
                {styleOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 min-w-[180px] rounded-lg overflow-hidden z-50 shadow-2xl"
                    style={{
                      backgroundColor: "#111113",
                      border: "1px solid #1c1c1f",
                    }}
                  >
                    <button
                      onClick={() => {
                        setSelectedStyle("all");
                        setStyleOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-white/5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: selectedStyle === "all" ? "#c8a97e" : "#71717a",
                      }}
                    >
                      All Styles
                    </button>
                    {STYLES.map((style) => (
                      <button
                        key={style}
                        onClick={() => {
                          setSelectedStyle(style);
                          setStyleOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-white/5"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: selectedStyle === style ? "#c8a97e" : "#71717a",
                        }}
                      >
                        {style}
                      </button>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {/* Price Sort Toggle */}
            <button
              onClick={() => setSortAsc(!sortAsc)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: "#111113",
                border: "1px solid #1c1c1f",
                color: "#71717a",
              }}
            >
              <ArrowUpDown size={14} />
              <span>Price: {sortAsc ? "Low → High" : "High → Low"}</span>
            </button>

            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px] ml-auto">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "#71717a" }}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg text-sm outline-none transition-all duration-200 placeholder:text-[#71717a]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "#111113",
                  border: "1px solid #1c1c1f",
                  color: "#fafafa",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#c8a97e";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#1c1c1f";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.slug}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <ProductCard product={product} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center py-32"
            >
              <p
                className="text-2xl font-light mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#71717a",
                }}
              >
                No pieces found
              </p>
              <p
                className="text-sm"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#71717a",
                }}
              >
                Try adjusting your filters or search query
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
