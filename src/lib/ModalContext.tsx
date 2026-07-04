"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import EnquiryModal from "@/components/EnquiryModal";

interface ModalContextType {
  openEnquiry: (routeInfo?: string) => void;
  closeEnquiry: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openEnquiry: () => {},
  closeEnquiry: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [routeInfo, setRouteInfo] = useState<string | undefined>(undefined);

  const openEnquiry = useCallback((info?: string) => {
    setRouteInfo(info);
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
    setRouteInfo(undefined);
  }, []);

  return (
    <ModalContext.Provider value={{ openEnquiry, closeEnquiry }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeEnquiry} routeInfo={routeInfo} />
    </ModalContext.Provider>
  );
}
