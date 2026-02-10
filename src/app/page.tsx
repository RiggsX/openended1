"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, ChevronDown, ShoppingCart, Fingerprint, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

/* ═══════════════════════════════════════════
   HERO SECTION — Cinematic Luxury
   ═══════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background — subtle gold & sage orbs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 h-[600px] w-[600px] rounded-full bg-[var(--neon-cyan)] opacity-[0.02] blur-[120px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[var(--accent)] opacity-[0.02] blur-[100px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.5em] text-[var(--accent)]"
          style={{ fontFamily: "var(--font-mono)", fontVariant: "small-caps" }}
        >
          Est. 2025 — Luxury Streetwear
        </motion.p>

        {/* Main title with glitch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="glitch-text text-[clamp(3.5rem,12vw,10rem)] font-extrabold leading-[0.85] tracking-tighter"
            data-text="OPENENDED"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="bg-gradient-to-b from-white via-white to-[var(--muted-foreground)] bg-clip-text text-transparent">
              OPEN
            </span>
            <br />
            <span className="shimmer-gold">ENDED</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg text-[var(--muted-foreground)] md:text-xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Where Luxury Meets Street Culture
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="/shop"
            className="group relative overflow-hidden rounded-none bg-[var(--accent)] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-foreground)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,169,126,0.4)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-10" />
          </Link>
          <Link
            href="/content"
            className="group border border-[var(--accent)] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] hover:shadow-[0_0_30px_rgba(200,169,126,0.2)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Discover More
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-foreground)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-[var(--muted-foreground)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PRODUCT CARD with 3D tilt
   ═══════════════════════════════════════════ */

interface Product {
  id: number;
  name: string;
  price: string;
  color: string;
  span: string;
  tag?: string;
}

function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0) rotateY(0)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0) rotateY(0) scale(1)");
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`group relative cursor-pointer ${product.span}`}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image placeholder */}
      <div className="relative h-full w-full overflow-hidden" style={{ background: product.color }}>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Tag */}
        {product.tag ? (
          <div
            className="absolute top-4 left-4 bg-[var(--accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-foreground)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {product.tag}
          </div>
        ) : null}

        {/* Product info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3
            className="text-lg font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {product.name}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <span
              className="text-sm text-[var(--accent)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {product.price}
            </span>
            <button className="flex items-center gap-2 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]">
              <ShoppingCart className="h-3 w-3" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedProducts() {
  const products: Product[] = [
    {
      id: 1,
      name: "Phantom Hoodie",
      price: "$189",
      color: "linear-gradient(135deg, #0f0f11 0%, #1a1a2e 50%, #0f0f11 100%)",
      span: "md:col-span-2 md:row-span-2",
      tag: "New",
    },
    {
      id: 2,
      name: "Neon Cargo Pants",
      price: "$145",
      color: "linear-gradient(135deg, #0f0f11 0%, #1c1c1f 50%, #0f0f11 100%)",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      name: "Glitch Tee",
      price: "$79",
      color: "linear-gradient(135deg, #09090b 0%, #151518 50%, #09090b 100%)",
      span: "md:col-span-1 md:row-span-1",
      tag: "Limited",
    },
    {
      id: 4,
      name: "Void Runner Sneakers",
      price: "$220",
      color: "linear-gradient(135deg, #0b0b0e 0%, #13131a 50%, #0b0b0e 100%)",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 5,
      name: "Signal Cap",
      price: "$55",
      color: "linear-gradient(135deg, #0f0f11 0%, #111113 50%, #0f0f11 100%)",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      name: "Data Jacket",
      price: "$310",
      color: "linear-gradient(135deg, #100d0b 0%, #1a1512 50%, #100d0b 100%)",
      span: "md:col-span-1 md:row-span-1",
      tag: "Exclusive",
    },
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.5em] text-[var(--accent)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Curated
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-3 text-5xl font-extrabold tracking-tight md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Collection
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/shop"
              className="group hidden items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)] md:flex"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              View All
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[280px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   DIGITAL CONTENT — Horizontal scroll
   ═══════════════════════════════════════════ */

interface ContentItem {
  id: number;
  title: string;
  category: string;
  duration: string;
  gradient: string;
}

function DigitalContent() {
  const items: ContentItem[] = [
    {
      id: 1,
      title: "The Rise of Digital Fashion",
      category: "Documentary",
      duration: "12:34",
      gradient: "from-[#0f1114] to-[#0b0b0e]",
    },
    {
      id: 2,
      title: "Street Culture: Tokyo After Dark",
      category: "Short Film",
      duration: "8:21",
      gradient: "from-[#14101a] to-[#0b0b0e]",
    },
    {
      id: 3,
      title: "Behind the Seams: Phantom Collection",
      category: "BTS",
      duration: "15:07",
      gradient: "from-[#10130f] to-[#09090b]",
    },
    {
      id: 4,
      title: "Neon Nights: A Visual Journey",
      category: "Visual",
      duration: "6:45",
      gradient: "from-[#15100e] to-[#0b0909]",
    },
    {
      id: 5,
      title: "The Art of Layering",
      category: "Style Guide",
      duration: "10:12",
      gradient: "from-[#0f0f14] to-[#09090b]",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-[var(--neon-magenta)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-5xl font-extrabold tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Digital Content
          </motion.h2>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="hide-scrollbar flex gap-6 overflow-x-auto px-6 pb-4">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group flex-shrink-0 w-[320px] md:w-[400px]"
          >
            <div className="glass-card overflow-hidden rounded-lg">
              {/* Video thumbnail */}
              <div
                className={`relative aspect-video bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
              >
                {/* Play button */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)]">
                  <Play className="h-6 w-6 text-white transition-colors group-hover:text-[var(--accent-foreground)]" />
                </div>

                {/* Duration */}
                <span
                  className="absolute bottom-3 right-3 bg-black/60 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.duration}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--neon-magenta)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.category}
                </span>
                <h3
                  className="mt-2 text-base font-bold text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   DIGITAL IDENTITY — Split Layout
   ═══════════════════════════════════════════ */

function DigitalIdentity() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-[var(--neon-magenta)] opacity-[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left — Identity card mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="perspective-container">
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-[320px] md:w-[380px]"
              >
                {/* Card */}
                <div className="glass-card rounded-2xl p-8 neon-glow">
                  {/* Card header */}
                  <div className="flex items-center justify-between">
                    <Fingerprint className="h-8 w-8 text-[var(--accent)]" />
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-foreground)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Digital ID
                    </span>
                  </div>

                  {/* Avatar placeholder */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--neon-magenta)] opacity-60" />
                    <div>
                      <p
                        className="text-lg font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        @YOURNAME
                      </p>
                      <p
                        className="text-xs text-[var(--muted-foreground)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        Member since 2025
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--glass-border)] pt-6">
                    {[
                      { label: "Items", value: "24" },
                      { label: "Style", value: "S+" },
                      { label: "Rank", value: "#142" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p
                          className="text-xl font-bold text-[var(--accent)]"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {stat.value}
                        </p>
                        <p
                          className="mt-1 text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Decorative gold gradient line */}
                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.5em] text-[var(--accent)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Identity
            </p>
            <h2
              className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Digital
              <br />
              <span className="text-[var(--accent)]">Identity</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted-foreground)]">
              Build your unique digital presence. Showcase your collection, earn style ranks, and
              connect with a community that speaks your language. Your identity, your rules.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/identity"
                className="group flex items-center gap-3 border border-[var(--accent)] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] hover:shadow-[0_0_40px_rgba(200,169,126,0.3)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Fingerprint className="h-4 w-4" />
                Create Your Identity
              </Link>
            </div>

            {/* Feature list */}
            <div className="mt-10 space-y-4">
              {[
                "Unique style profile & ranking",
                "Showcase your collection",
                "Connect with like-minded creatives",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--muted-foreground)]">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   BRAND MANIFESTO — Scroll-triggered text
   ═══════════════════════════════════════════ */

function ManifestoWord({ word, index }: { word: string; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

  return (
    <span
      ref={ref}
      className="inline-block transition-all duration-500"
      style={{
        opacity: isInView ? 1 : 0.1,
        transform: isInView ? "translateY(0)" : "translateY(8px)",
        transitionDelay: `${index * 30}ms`,
      }}
    >
      {word}&nbsp;
    </span>
  );
}

function BrandManifesto() {
  const text =
    "Fashion is temporary. Style is forever. We don't follow trends — we set them. OPENENDED is not a brand. It's a movement.";
  const words = text.split(" ");

  return (
    <section className="relative py-40 px-6">
      {/* Accent line — gold */}
      <div className="absolute top-0 left-1/2 h-32 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent to-[var(--accent)] opacity-30" />

      <div className="mx-auto max-w-4xl text-center">
        <p
          className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-[1.15] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {words.map((word, i) => (
            <ManifestoWord key={`${word}-${i}`} word={word} index={i} />
          ))}
        </p>
      </div>

      {/* Bottom accent — gold */}
      <div className="mx-auto mt-16 h-[1px] w-32 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40" />
    </section>
  );
}

/* ═══════════════════════════════════════════
   PAGE EXPORT
   ═══════════════════════════════════════════ */

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProducts />
      <DigitalContent />
      <DigitalIdentity />
      <BrandManifesto />
    </div>
  );
}
