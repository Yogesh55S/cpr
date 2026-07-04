"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallWhatsAppFloatingBar from "./CallWhatsAppFloatingBar";
import { ModalProvider } from "@/lib/ModalContext";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CallWhatsAppFloatingBar />
    </ModalProvider>
  );
}
