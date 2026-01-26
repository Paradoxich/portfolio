"use client";

import * as React from "react";
import { HireDrawer } from "./home/HireDrawer";

type HireDrawerContextType = {
  openHireDrawer: () => void;
  closeHireDrawer: () => void;
  isOpen: boolean;
};

const HireDrawerContext = React.createContext<HireDrawerContextType | null>(null);

export function HireDrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openHireDrawer = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeHireDrawer = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <HireDrawerContext.Provider value={{ openHireDrawer, closeHireDrawer, isOpen }}>
      {children}
      <HireDrawer isOpen={isOpen} onClose={closeHireDrawer} />
    </HireDrawerContext.Provider>
  );
}

export function useHireDrawer() {
  const context = React.useContext(HireDrawerContext);
  if (!context) {
    throw new Error("useHireDrawer must be used within a HireDrawerProvider");
  }
  return context;
}
