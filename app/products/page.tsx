"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Wrench, Zap, Gauge, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productCategories = [
  {
    id: "mechanical",
    title: "Mechanical Products",
    icon: Wrench,
    description:
      "We provide the highest quality mechanical products like Pipes (Seamless and Welded pipes), Flanges, Fittings (Elbows & Tees), Fasteners, Valves, Gaskets & Packing and many more to any part of the globe.",
    products: [
      {
        category: "Pipes & Fittings",
        items: [
          "Seamless Pipes",
          "Welded Pipes",
          "Carbon Steel Pipes",
          "Stainless Steel Pipes",
          "Alloy Steel Pipes",
          "Pipe Fittings (Elbows & Tees)",
          "Flanges",
        ],
      },
      {
        category: "Fasteners",
        items: [
          "Stud Bolts",
          "Stud Bolt Assemblies",
          "Hex Bolts",
          "Heavy Hexagon Bolts",
          "Spherical Faced Nuts",
          "12 Point (Bi-Hex) Bolts & Nuts",
          "Setscrews",
          "Socket Screws",
          "Socket Cap Screws",
          "Engineer Studs",
          "Cap Nuts",
          "Waisted Studs",
        ],
      },
      {
        category: "Sealing & Gaskets",
        items: [
          "Spiral Wound Gaskets",
          "Cam Profile Gaskets",
          "Flange Insulation Kit",
          "Soft Gaskets",
          "Heat Exchanger Gasket",
          "Ring Joint Gasket",
          "Insulating Kits",
          "Packings",
        ],
      },
      {
        category: "Valves",
        items: [
          "Gate Valves",
          "Globe Valves",
          "Check Valves",
          "Ball Valves",
          "Butterfly Valves",
          "Control Valves",
        ],
      },
    ],
  },
  {
    id: "electrical",
    title: "Electrical Products",
    icon: Zap,
    description:
      "We are the suppliers for a wide range of electrical products like Cables & wires, Explosion proof light fittings, Conduit pipes & fittings, Cable glands, Earthing & Lightning protection, cable pulling accessories, Cadweld etc.",
    products: [
      {
        category: "Cables & Wiring",
        items: [
          "Power Cables",
          "Control Cables",
          "Instrumentation Cables",
          "Armoured Cables",
          "Flexible Cables",
          "Single Core Cables",
          "Multi Core Cables",
        ],
      },
      {
        category: "Lighting & Fixtures",
        items: [
          "Explosion Proof Light Fittings",
          "LED Fixtures",
          "Emergency Lighting",
          "Industrial Lighting",
          "Weatherproof Fixtures",
        ],
      },
      {
        category: "Conduit Systems",
        items: [
          "Conduit Pipes",
          "Conduit Fittings",
          "Cable Glands",
          "Cable Trays",
          "Cable Ladders",
          "Cable Pulling Accessories",
        ],
      },
      {
        category: "Protection Systems",
        items: [
          "Earthing Materials",
          "Lightning Protection Systems",
          "Grounding Accessories",
          "Cadweld Products",
          "Earth Rods",
          "Bonding Equipment",
        ],
      },
    ],
  },
  {
    id: "instrumentation",
    title: "Instrumentation",
    icon: Gauge,
    description:
      "Our instrumentation product range includes the supply of Seamless tubes, copper tubes, Monel tubing, tube fittings, Tee fittings, valves & manifolds for industrial systems. We deliver products all around the world.",
    products: [
      {
        category: "Instrumentation Tubes",
        items: [
          "Seamless Tubes",
          "Copper Tubes",
          "Monel Tubing",
          "Stainless Steel Tubes",
          "Alloy Tubes",
        ],
      },
      {
        category: "Instrumentation Tube Fittings",
        items: [
          "Double Ferrule Compression Tube Fittings",
          "Single Ferrule Compression Tube Fittings",
          "Tee Fittings",
          "Union Fittings",
          "Elbow Fittings",
          "Cross Fittings",
          "Reducer Fittings",
        ],
      },
      {
        category: "Instrumentation Accessories",
        items: [
          "Condensate Pots",
          "Flushing Rings",
          "Instrument Sunshade/Canopy",
          "Instrument Mounting Plates",
          "Tube Supports",
          "Tube Clamps",
        ],
      },
      {
        category: "Valves & Manifolds",
        items: [
          "Needle Valves",
          "Ball Valves",
          "Manifold Valves",
          "Instrument Valves",
          "2-Way Valves",
          "3-Way Valves",
          "5-Way Valves",
        ],
      },
    ],
  },
];

function ProductSection({ category, index }: { category: typeof productCategories[0]; index: number }) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (itemName: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="flex items-start gap-4">
            <category.icon className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
              <CardDescription className="text-base">
                {category.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.products.map((product) => (
              <div key={product.category} className="space-y-3">
                <button
                  onClick={() => toggleItem(product.category)}
                  className="w-full flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <h4 className="font-semibold text-foreground">{product.category}</h4>
                  {expandedItems[product.category] ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {expandedItems[product.category] && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 pl-4"
                  >
                    {product.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-20 text-primary-foreground">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Our Products</h1>
            <p className="mt-6 text-lg leading-8 opacity-90">
              Comprehensive range of high-quality products for the oil and gas industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Tabs defaultValue="mechanical" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 py-3"
                >
                  <category.icon className="h-5 w-5" />
                  <span>{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category, index) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <ProductSection category={category} index={index} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* All Products List */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Complete Product Range
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse all our products organized by category
            </p>
          </motion.div>

          <div className="space-y-8">
            {productCategories.map((category, index) => (
              <ProductSection key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need a Specific Product?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Contact us with your requirements and we'll provide competitive quotes
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-background px-8 py-3 text-base font-semibold text-primary hover:bg-background/90 transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
