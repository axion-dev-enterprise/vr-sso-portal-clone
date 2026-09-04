import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VR Benefícios SSO - Gestão de Pessoas & UI Template AXION",
  description: "Portal SSO unificado para Trabalhadores, Empresas (RH) e Estabelecimentos Credenciados. Reconstrução de alta fidelidade para portfólio e ecossistema AXION.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
