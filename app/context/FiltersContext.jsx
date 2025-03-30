'use client'
import { createContext, useState } from "react";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    tipo: "",
    año: "",
    minKm: "",
    maxKm: "",
    minPrice: "",
    maxPrice: "",

  });
  
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};