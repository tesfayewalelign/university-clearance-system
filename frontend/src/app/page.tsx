"use client";
import AppRoutes from "../ routes/ AppRoutes";
import { ThemeProvider } from "../components/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
