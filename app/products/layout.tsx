import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our comprehensive range of mechanical, electrical, and instrumentation products for the oil and gas industry.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
