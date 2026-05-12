import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Voltava Energy Systems — Intelligence That Powers Electrification",
  description:
    "Voltava designs and manufactures smart energy electronics — BMS, EV charging, ESS — for mobility, energy storage and charging in India and beyond.",
  keywords:
    "Smart BMS India, Battery Management System, Active Balance BMS, ESS BMS, EV Charging Electronics, Fleet Battery Analytics, Energy Electronics India",
  openGraph: {
    title: "Voltava Energy Systems",
    description:
      "Smart energy electronics for EV, charging and ESS. Battery Intelligence. Charging Innovation. Energy Electronics.",
    url: "https://voltava.in",
    siteName: "Voltava Energy Systems",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
