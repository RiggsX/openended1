export type Product = {
  slug: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: "jewelry" | "apparel" | "accessories" | "digital";
  tags: ("new" | "limited" | "sale")[];
  colors: string[];
  sizes?: string[];
  description: string;
  gradient: string;
  thumbnailGradients: string[];
  style: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "phantom-chain-necklace",
    name: "Phantom Chain Necklace",
    brand: "VOID STUDIO",
    price: 289,
    category: "jewelry",
    tags: ["new"],
    colors: ["Silver", "Gunmetal", "Rose Gold"],
    description:
      "Hand-forged sterling silver chain with an asymmetric phantom link design. Each piece is individually numbered and comes with a certificate of authenticity. The oxidized finish gives it a raw, industrial edge that pairs perfectly with both streetwear and tailored looks.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #89a0f5 0%, #9b6fc4 100%)",
      "linear-gradient(135deg, #4a5fd4 0%, #5e3a8a 100%)",
      "linear-gradient(135deg, #7b8ef0 0%, #8a5db8 100%)",
    ],
    style: "Industrial",
  },
  {
    slug: "neon-drift-hoodie",
    name: "Neon Drift Hoodie",
    brand: "AFTERHOURS",
    price: 185,
    originalPrice: 220,
    category: "apparel",
    tags: ["sale"],
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Heavyweight 400gsm French terry hoodie with reflective neon piping along the seams. Features a hidden interior pocket, thumbhole cuffs, and an oversized kangaroo pocket. The dropped shoulder silhouette creates a relaxed, effortless drape.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #c471ed 0%, #d94466 100%)",
      "linear-gradient(135deg, #f5a3fc 0%, #f77a8d 100%)",
      "linear-gradient(135deg, #e07cf5 0%, #f06578 100%)",
    ],
    style: "Streetwear",
  },
  {
    slug: "signal-loss-ring",
    name: "Signal Loss Ring",
    brand: "VOID STUDIO",
    price: 145,
    category: "jewelry",
    tags: ["limited"],
    colors: ["Matte Black", "Polished Silver"],
    description:
      "A bold statement ring featuring a glitch-inspired texture carved into solid titanium. The irregular surface catches light in unexpected ways, creating a digital artifact effect. Hypoallergenic and virtually indestructible.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #3a8fd9 0%, #00d4e0 100%)",
      "linear-gradient(135deg, #6bbfff 0%, #33f5ff 100%)",
      "linear-gradient(135deg, #5aadee 0%, #1af0f0 100%)",
    ],
    style: "Avant-garde",
  },
  {
    slug: "static-cargo-pants",
    name: "Static Cargo Pants",
    brand: "GRIDSYNC",
    price: 210,
    category: "apparel",
    tags: ["new"],
    colors: ["Slate", "Olive", "Black"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Technical cargo pants with magnetic flap pockets and articulated knees. Made from a proprietary ripstop-nylon blend with 4-way stretch. Water-resistant DWR coating keeps you dry in light rain. Tapered fit with adjustable ankle cuffs.",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "linear-gradient(135deg, #8dd8d4 0%, #f0b8c8 100%)",
      "linear-gradient(135deg, #c0f5f2 0%, #ffe4ed 100%)",
      "linear-gradient(135deg, #9ae3df 0%, #f5c7d6 100%)",
    ],
    style: "Techwear",
  },
  {
    slug: "hex-wallet",
    name: "HEX Bifold Wallet",
    brand: "DEADPIXEL",
    price: 95,
    category: "accessories",
    tags: [],
    colors: ["Black", "Carbon"],
    description:
      "Slim bifold wallet crafted from laser-etched hexagonal pattern leather. Features 6 card slots, a bill compartment, and RFID-blocking technology. The edges are hand-painted with a subtle neon accent line.",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      "linear-gradient(135deg, #f0d4b0 0%, #e89e85 100%)",
      "linear-gradient(135deg, #fff5e6 0%, #fdc8b2 100%)",
      "linear-gradient(135deg, #f5e0c0 0%, #f0a892 100%)",
    ],
    style: "Minimalist",
  },
  {
    slug: "genesis-avatar-pack",
    name: "Genesis Avatar Pack",
    brand: "OPENENDED",
    price: 49,
    category: "digital",
    tags: ["new", "limited"],
    colors: [],
    description:
      "A collection of 12 unique generative avatars created by artist collective MESH. Each avatar is algorithmically unique with hand-curated color palettes. Includes commercial usage rights and high-resolution source files.",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      "linear-gradient(135deg, #8a74b8 0%, #e8a4d0 100%)",
      "linear-gradient(135deg, #b8a3e0 0%, #fcd5f0 100%)",
      "linear-gradient(135deg, #9680c8 0%, #f0b3dd 100%)",
    ],
    style: "Digital Art",
  },
  {
    slug: "overlock-tee",
    name: "Overlock Distressed Tee",
    brand: "AFTERHOURS",
    price: 78,
    category: "apparel",
    tags: [],
    colors: ["Washed Black", "Bone", "Rust"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Vintage-washed cotton tee with raw overlock seam detailing on the outside. The intentionally distressed hem and collar give it a lived-in feel from day one. Boxy fit with a slightly cropped length.",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
      "linear-gradient(135deg, #e88085 0%, #e8b5a8 100%)",
      "linear-gradient(135deg, #ffb0b3 0%, #fce0d8 100%)",
      "linear-gradient(135deg, #f08d91 0%, #f0c2b6 100%)",
    ],
    style: "Vintage",
  },
  {
    slug: "cortex-sunglasses",
    name: "Cortex Shield Sunglasses",
    brand: "DEADPIXEL",
    price: 165,
    category: "accessories",
    tags: ["new"],
    colors: ["Matte Black / Smoke", "Clear / Blue Mirror"],
    description:
      "Futuristic shield-style sunglasses with a single continuous lens. Ultra-lightweight titanium frame with adjustable nose pads. UV400 protection with anti-scratch and oleophobic coatings. Comes in a hard-shell magnetic case.",
    gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      "linear-gradient(135deg, #6dd8e0 0%, #4d8de6 100%)",
      "linear-gradient(135deg, #a0ffff 0%, #80b8ff 100%)",
      "linear-gradient(135deg, #78e8f0 0%, #5a9af0 100%)",
    ],
    style: "Futuristic",
  },
  {
    slug: "warp-knit-beanie",
    name: "Warp Knit Beanie",
    brand: "GRIDSYNC",
    price: 55,
    category: "accessories",
    tags: [],
    colors: ["Black", "Heather Grey", "Navy"],
    description:
      "Merino wool blend beanie with a unique warp-knit texture that creates a subtle 3D pattern. Fleece-lined interior for extra warmth. Embroidered logo tag on the fold-over cuff.",
    gradient: "linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)",
      "linear-gradient(135deg, #a8b5c8 0%, #dde0e5 100%)",
      "linear-gradient(135deg, #d5deee 0%, #ffffff 100%)",
      "linear-gradient(135deg, #b5c2d5 0%, #eaecf0 100%)",
    ],
    style: "Essentials",
  },
  {
    slug: "datastream-jacket",
    name: "Datastream Shell Jacket",
    brand: "GRIDSYNC",
    price: 340,
    originalPrice: 420,
    category: "apparel",
    tags: ["sale", "limited"],
    colors: ["Black / Neon", "Graphite"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "3-layer waterproof shell jacket with sealed seams and laser-cut ventilation. Features integrated cable routing, a detachable hood with volume adjuster, and reflective data-pattern print on the back panel. 20K/20K waterproof/breathability rating.",
    gradient: "linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 50%, #e4ff1a 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 50%, #e4ff1a 100%)",
      "linear-gradient(135deg, #15152e 0%, #252550 50%, #d4ef10 100%)",
      "linear-gradient(135deg, #0a0a18 0%, #121230 50%, #c8e000 100%)",
      "linear-gradient(135deg, #101028 0%, #1e1e45 50%, #e8ff30 100%)",
    ],
    style: "Techwear",
  },
  {
    slug: "echo-pendant",
    name: "Echo Layered Pendant",
    brand: "VOID STUDIO",
    price: 195,
    category: "jewelry",
    tags: [],
    colors: ["Sterling Silver", "14K Gold Vermeil"],
    description:
      "Three concentric circular pendants on a fine box chain, each slightly offset to create a kinetic echo effect when you move. The largest disc features a micro-engraved soundwave pattern. Adjustable chain length 18-22 inches.",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      "linear-gradient(135deg, #e0bc4e 0%, #e88a6e 100%)",
      "linear-gradient(135deg, #f8e080 0%, #feb09a 100%)",
      "linear-gradient(135deg, #ecc858 0%, #f09578 100%)",
    ],
    style: "Statement",
  },
  {
    slug: "glitch-skin-phone-case",
    name: "Glitch Skin Phone Case",
    brand: "DEADPIXEL",
    price: 42,
    category: "accessories",
    tags: ["new"],
    colors: ["Holographic", "Matte Black"],
    description:
      "MagSafe-compatible phone case with a holographic glitch pattern that shifts color as you tilt it. Military-grade drop protection with raised camera and screen bezels. Available for iPhone 15/16 series.",
    gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
      "linear-gradient(135deg, #c8a5e0 0%, #72aae0 100%)",
      "linear-gradient(135deg, #edd5ff 0%, #a8d5ff 100%)",
      "linear-gradient(135deg, #d4b4ee 0%, #80b8ee 100%)",
    ],
    style: "Tech",
  },
  {
    slug: "null-pointer-bracelet",
    name: "Null Pointer Bracelet",
    brand: "VOID STUDIO",
    price: 120,
    category: "jewelry",
    tags: ["limited"],
    colors: ["Oxidized Silver", "Black Rhodium"],
    description:
      "A chunky chain bracelet with a magnetic clasp shaped like a broken cursor arrow. Each link has a slightly different width, creating an intentionally 'corrupted' rhythm. Solid 925 sterling silver with a matte finish.",
    gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
      "linear-gradient(135deg, #48cfc7 0%, #9a78b0 100%)",
      "linear-gradient(135deg, #78f0e8 0%, #c8a8da 100%)",
      "linear-gradient(135deg, #52d8d0 0%, #a884bc 100%)",
    ],
    style: "Industrial",
  },
  {
    slug: "render-pass-digital-zine",
    name: "Render Pass Digital Zine",
    brand: "OPENENDED",
    price: 15,
    category: "digital",
    tags: [],
    colors: [],
    description:
      "Issue #04 of our quarterly digital zine exploring the intersection of fashion, technology, and subculture. Features interviews with emerging designers, photo essays, and exclusive discount codes. PDF + interactive web version.",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    thumbnailGradients: [
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #e05a82 0%, #e8c830 100%)",
      "linear-gradient(135deg, #ff88ae 0%, #fff060 100%)",
      "linear-gradient(135deg, #f0658e 0%, #f0d438 100%)",
    ],
    style: "Publication",
  },
];

export const BRANDS = [...new Set(PRODUCTS.map((p) => p.brand))];
export const STYLES = [...new Set(PRODUCTS.map((p) => p.style))];
export const CATEGORIES = ["all", "jewelry", "apparel", "accessories", "digital"] as const;
export type Category = (typeof CATEGORIES)[number];
