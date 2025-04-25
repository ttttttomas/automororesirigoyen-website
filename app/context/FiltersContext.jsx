'use client'
import { createContext, useState } from "react";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {

  const [filters, setFilters] = useState({
    categoria: 'all',
    tipo: 'all',
    minAño: 2010,
    maxAño: 2025,
    combustible: 'all',
    minKm: 200000,
    minPrice: 40000000,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.categoria === 'all' || product.marca === filters.categoria) &&
        (filters.tipo === 'all' || product.tipo === filters.tipo) &&
        (!filters.minAño || product.anio >= parseInt(filters.minAño)) &&
        (!filters.maxAño || product.anio <= parseInt(filters.maxAño)) &&
        (filters.combustible === 'all' || product.combustible === filters.combustible) &&
        (!filters.minKm || product.km <= filters.minKm) &&
        (!filters.minPrice || product.precio <= filters.minPrice)
      );
    });
  };
  return (
    <FiltersContext.Provider value={{ filters, setFilters, filterProducts }}>
      {children}
    </FiltersContext.Provider>
  );
};