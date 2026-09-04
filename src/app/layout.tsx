import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VR - facilita a vida",
  description: "Acesso VR - SuperPortal VR",
  icons: {
    icon: "https://sso-acesso.vr.com.br/sites/default/files/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased selection:bg-[#00b11d] selection:text-white">
        {children}
      </body>
    </html>
  );
}
