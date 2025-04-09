'use client'
import { createContext, useState } from "react";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {

  const [filters, setFilters] = useState({
    categoria: 'all',
    tipo: 'all',
    año: 'all',
    combustible: 'all',
    minKm: 0,
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.categoria === 'all' || product.marca === filters.categoria) &&
        (filters.tipo === 'all' || product.tipo === filters.tipo) &&
        (filters.año === 'all' || product.anio.toString() === filters.año) &&
        (filters.combustible === 'all' || product.combustible === filters.combustible) &&
        (!filters.minKm || product.km >= (filters.minKm)) &&
        (!filters.minPrice || product.precio >= (filters.minPrice)) 
      );
    });
  };
  return (
    <FiltersContext.Provider value={{ filters, setFilters, filterProducts }}>
      {children}
    </FiltersContext.Provider>
  );
};