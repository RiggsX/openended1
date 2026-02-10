"use client";

import type { MouseEvent } from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import type { Product } from "@/lib/mock-products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const tagColors: Record<string, { bg: string; text: string }> = {
    new: { bg: "#c8a97e", text: "#09090b" },
    limited: { bg: "#c4a0b0", text: "#09090b" },
    sale: { bg: "#d4a574", text: "#09090b" },
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group"
        style={{
          perspective: "800px",
        }}
      >
        <motion.div
          animate={{
            rotateX: tilt.rotateX,
            rotateY: tilt.rotateY,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Link href={`/shop/${product.slug}`} className="block">
            {/* Card Background */}
            <div
              className="relative aspect-[3/4] overflow-hidden"
              style={{
                background: product.gradient,
              }}
            >
              {/* Dark Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(180deg, rgba(9,9,11,0.1) 0%, rgba(9,9,11,0.7) 100%)",
                  opacity: isHovered ? 1 : 0.8,
                }}
              />

              {/* Decorative Letter */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[120px] font-bold opacity-[0.07] select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name.charAt(0)}
                </span>
              </div>

              {/* Tag Badge — Top Left */}
              {product.tags.length > 0 && (
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
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

              {/* Wishlist Heart — Top Right */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setWishlisted(!wishlisted);
                }}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: wishlisted ? "rgba(200,169,126,0.2)" : "rgba(15,15,17,0.7)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  color: wishlisted ? "#c8a97e" : "#71717a",
                }}
                onMouseEnter={(e) => {
                  if (!wishlisted) {
                    e.currentTarget.style.color = "#c8a97e";
                    e.currentTarget.style.backgroundColor = "rgba(200,169,126,0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!wishlisted) {
                    e.currentTarget.style.color = "#71717a";
                    e.currentTarget.style.backgroundColor = "rgba(15,15,17,0.7)";
                  }
                }}
              >
                <Heart size={15} fill={wishlisted ? "#c8a97e" : "none"} />
              </button>

              {/* Bottom Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                {/* Brand */}
                <p
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#c8a97e",
                  }}
                >
                  {product.brand}
                </p>

                {/* Product Name */}
                <h3
                  className="text-base font-bold mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#fafafa",
                  }}
                >
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  {product.originalPrice ? (
                    <span
                      className="text-xs line-through"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#71717a",
                      }}
                    >
                      ${product.originalPrice}
                    </span>
                  ) : null}
                  <span
                    className="text-sm font-bold"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: product.originalPrice ? "#c8a97e" : "#fafafa",
                    }}
                  >
                    ${product.price}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: "rgba(15,15,17,0.7)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      color: "#fafafa",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#c8a97e";
                      e.currentTarget.style.color = "#09090b";
                      e.currentTarget.style.border = "1px solid #c8a97e";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(15,15,17,0.7)";
                      e.currentTarget.style.color = "#fafafa";
                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)";
                    }}
                  >
                    <ShoppingCart size={14} />
                    Add to Cart
                  </button>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
