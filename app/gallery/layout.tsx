import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our gallery of products, oil field operations, shipping, and industrial equipment.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
