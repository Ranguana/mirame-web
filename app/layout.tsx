import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiraMe — Every Shade Is the Shade",
  description:
    "A beauty community that celebrates every shade, every texture, every you. Coming soon.",
  openGraph: {
    title: "MiraMe — Every Shade Is the Shade",
    description:
      "A beauty community that celebrates every shade, every texture, every you.",
    url: "https://mirame.care",
    siteName: "MIRAME",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
