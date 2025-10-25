"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Package, Globe2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Mechanical Products",
    description: "High-quality pipes, flanges, fittings, valves, gaskets, and fasteners for global delivery.",
    icon: Package,
  },
  {
    title: "Electrical Products",
    description: "Cables, explosion-proof fittings, conduit pipes, cable glands, and earthing protection systems.",
    icon: Globe2,
  },
  {
    title: "Instrumentation",
    description: "Seamless tubes, copper tubes, Monel tubing, tube fittings, and valve manifolds.",
    icon: Shield,
  },
];

const businessSteps = [
  {
    step: "01",
    title: "Submit Requirements",
    description: "Share your detailed specifications with us.",
  },
  {
    step: "02",
    title: "Quick Review",
    description: "We acknowledge and review your needs within hours.",
  },
  {
    step: "03",
    title: "Competitive Quotes",
    description: "Our experts identify qualified manufacturers and provide quotes with delivery timelines.",
  },
  {
    step: "04",
    title: "Quality Procurement",
    description: "Upon approval, we handle procurement, quality assurance, and documentation.",
  },
  {
    step: "05",
    title: "Timely Delivery",
    description: "We manage shipping, customs, import duties, and ensure on-time delivery.",
  },
];

const features = [
  "Years of expertise in upstream and downstream operations",
  "Serving Kuwait, Middle East, North Africa, and Eastern Mediterranean",
  "Agreements with reputed vendors and manufacturers",
  "Expedited delivery and comprehensive quality assurance",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero2.jpg"
            alt="Oil field operations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Leading Oil & Gas Suppliers in{" "}
              <span className="text-primary drop-shadow-lg">Kuwait</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 drop-shadow-md">
              Venus International provides advanced energy services throughout Kuwait, the Middle East, North Africa, and the Eastern Mediterranean. From sourcing to delivery, we handle everything so you can focus on your operations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions for all your oil and gas supply needs
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose Venus International?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are one of the leading oil and gas suppliers and contractors in Kuwait, providing excellence in every aspect of our service.
              </p>
              <div className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base text-foreground">{feature}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Package className="h-32 w-32 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground">
                    Comprehensive Supply Chain Solutions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Process */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our streamlined process ensures efficiency and reliability at every step
            </p>
          </motion.div>

          <div className="mt-16 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border"></div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
              {businessSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Contact us today for competitive quotes and expedited delivery
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-primary hover:text-primary">
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
