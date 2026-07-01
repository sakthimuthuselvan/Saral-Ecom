import type { Metadata } from "next";
import { Playfair_Display, Lato, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// export const metadata: Metadata = {
//   title: "Premium Organic Products Website",
//   description: "Explore premium organic products like cold pressed coconut oil and A2 cow ghee, with easy ordering via WhatsApp for a seamless shopping experience.",
//   robots: {
//     index: false,
//     follow: false,
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saralorganic.com"),

  title: {
    default: "Saral Organic | Premium Organic Coconut Oil & Natural Products",
    template: "%s | Saral Organic",
  },

  description:
    "Buy premium organic coconut oil, A2 cow ghee, and natural products from Saral Organic. Pure, healthy, and chemical-free products delivered to your doorstep.",

  keywords: [
    "Organic Coconut Oil",
    "Cold Pressed Coconut Oil",
    "A2 Cow Ghee",
    "Organic Products",
    "Saral Organic",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Saral Organic",
    description:
      "Premium Organic Coconut Oil & Natural Products",
    url: "https://www.saralorganic.com",
    siteName: "Saral Organic",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saral Organic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saral Organic",
    description:
      "Premium Organic Coconut Oil & Natural Products",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
