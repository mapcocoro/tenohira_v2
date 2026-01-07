import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "てのひら整骨院 | 東大阪市若江岩田の整骨院",
  description: "大阪府東大阪市若江岩田のてのひら整骨院。独自のてのひら式整体で全身調整。各種保険取扱、交通事故治療対応。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
