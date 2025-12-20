"use client";

import React from "react";
import AppRoutes from "./src/ routes/ AppRoutes";
import { ThemeProvider } from "./src/components/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}
