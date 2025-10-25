"use client";

import { motion } from "framer-motion";
import { Globe2, Target, Eye, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every product and service we deliver.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We build lasting partnerships through trust and reliability.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "We stay ahead of industry trends to provide cutting-edge solutions.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Serving clients across the Middle East, North Africa, and Eastern Mediterranean.",
  },
];

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Countries Served", value: "15+" },
  { label: "Product Categories", value: "100+" },
  { label: "Satisfied Clients", value: "500+" },
];

export default function AboutPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About Venus International
            </h1>
            <p className="mt-6 text-lg leading-8 opacity-90">
              Leading the way in oil and gas supply solutions across the Middle East and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Who We Are
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Venus International is one of the leading oil and gas suppliers and contractors in Kuwait. With years of expertise in upstream and downstream operations, we have established ourselves as a trusted partner in the energy sector.
                </p>
                <p>
                  We provide advanced energy services throughout Kuwait, the Middle East, North Africa, and the Eastern Mediterranean. Our comprehensive product range includes Carbon Steel, Stainless Steel, Alloy Steel Pipes & Fittings, Tube & Tube Fittings, Valves, Nuts & Bolts, Gaskets, and much more.
                </p>
                <p>
                  We handle everything from sourcing to delivery, allowing you to focus on your core operations. With agreements with several reputed vendors and manufacturers, we ensure expedited delivery and consistent quality in every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-4xl font-bold text-primary">
                          {stat.value}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground">
                    To deliver exceptional quality products and services that empower our clients in the oil and gas industry. We are committed to building long-term partnerships through reliability, innovation, and unwavering dedication to excellence.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Eye className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground">
                    To be the most trusted and preferred supplier of oil and gas products across the Middle East and beyond. We aspire to set industry standards through continuous improvement, sustainable practices, and customer-centric solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Geographic Reach
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From our base in Kuwait, we serve clients across multiple regions with dedication and efficiency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Globe2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Kuwait</h3>
                    <p className="text-sm text-muted-foreground">Our headquarters and primary market</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Globe2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Middle East</h3>
                    <p className="text-sm text-muted-foreground">Extensive coverage across the region</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Globe2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">North Africa</h3>
                    <p className="text-sm text-muted-foreground">Growing presence and partnerships</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Globe2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Eastern Mediterranean</h3>
                    <p className="text-sm text-muted-foreground">Strategic service area</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
