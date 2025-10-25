import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Venus International</h3>
            <p className="text-sm text-muted-foreground">
              Leading oil and gas suppliers and contractors in Kuwait, serving the Middle East, North Africa, and Eastern Mediterranean.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mechanical Products</li>
              <li>Electrical Products</li>
              <li>Instrumentation</li>
              <li>Pipes & Fittings</li>
              <li>Valves & Gaskets</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  PO BOX 7167<br />
                  FAHAHEEL<br />
                  Kuwait
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <div>
                    <span className="text-foreground font-medium">Sales:</span>{" "}
                    <a href="mailto:sales@venusintlkwt.com" className="text-muted-foreground hover:text-primary transition-colors">
                      sales@venusintlkwt.com
                    </a>
                  </div>
                  <div>
                    <span className="text-foreground font-medium">Engineering:</span>{" "}
                    <a href="mailto:engg@venusintlkwt.com" className="text-muted-foreground hover:text-primary transition-colors">
                      engg@venusintlkwt.com
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Venus International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
