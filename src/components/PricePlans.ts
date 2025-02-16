interface Plan {
  title: string;
  desc: string;
  prices: { Month: number; Year: number };
  options: {
    label: string;
    value: boolean;
  }[];
}

export const pricePlans: Plan[] = [
  {
    title: "Freebie",
    desc: "Ideal for individual who need quick access to basic features.",
    prices: { Month: 0, Year: 0 },
    options: [
      { label: "20,000+ of PNG & SVG graphics", value: true },
      { label: "Access to 100 million stock images", value: true },
      { label: "Upload custom icons and fonts", value: false },
      { label: "Unlimited Sharing", value: false },
      { label: "Upload graphics & video in up to 4k", value: false },
      { label: "Unlimited Projects", value: false },
      { label: "Instant Access to our design system", value: false },
      { label: "Create teams to collaborate on designs", value: false },
    ],
  },
  {
    title: "Professional",
    desc: "Ideal for individual who need advance features and tools for client work.",
    prices: { Month: 25, Year: 250 },
    options: [
      { label: "20,000+ of PNG & SVG graphics", value: true },
      { label: "Access to 100 million stock images", value: true },
      { label: "Upload custom icons and fonts", value: true },
      { label: "Unlimited Sharing", value: true },
      { label: "Upload graphics & video in up to 4k", value: true },
      { label: "Unlimited Projects", value: false },
      { label: "Instant Access to our design system", value: false },
      { label: "Create teams to collaborate on designs", value: false },
    ],
  },
  {
    title: "Enterprise",
    desc: "Ideal for individual who need personalized services and security for large teams.",
    prices: { Month: 100, Year: 1000 },
    options: [
      { label: "20,000+ of PNG & SVG graphics", value: true },
      { label: "Access to 100 million stock images", value: true },
      { label: "Upload custom icons and fonts", value: true },
      { label: "Unlimited Sharing", value: true },
      { label: "Upload graphics & video in up to 4k", value: true },
      { label: "Unlimited Projects", value: true },
      { label: "Instant Access to our design system", value: true },
      { label: "Create teams to collaborate on designs", value: true },
    ],
  },
];
