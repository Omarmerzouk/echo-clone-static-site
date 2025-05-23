
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onFilterChange: (filters: any) => void;
}

const FilterSidebar = ({ isOpen, onToggle, onFilterChange }: FilterSidebarProps) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);

  const countries = [
    'Allemagne', 'Autriche', 'Belgique', 'Danemark', 'Espagne', 'Finlande',
    'France', 'Irlande', 'Italie', 'Norvège', 'Pays-Bas', 'Portugal',
    'Royaume-Uni', 'République Tchèque', 'Suisse', 'Suède', 'États-Unis'
  ];

  const cities = [
    'Amsterdam', 'Barcelone', 'Berlin', 'Bruxelles', 'Copenhague', 'Dublin',
    'Francfort', 'Genève', 'Helsinki', 'Lisbonne', 'Londres', 'Milan',
    'Munich', 'Oslo', 'Paris', 'Prague', 'San Francisco', 'Stockholm', 'Vienne'
  ];
  
  const categories = [
    'Conférence', 'Séminaire', 'Workshop', 'Formation', 'Networking', 'Voiture électrique'
  ];
  
  const prices = ['Gratuit', 'Payant'];
  
  const formats = ['Présentiel', 'En ligne'];

  const handleCountryChange = (country: string) => {
    const newSelected = selectedCountries.includes(country)
      ? selectedCountries.filter(c => c !== country)
      : [...selectedCountries, country];
    setSelectedCountries(newSelected);
    updateFilters(newSelected, selectedCities, selectedCategories, selectedPrices, selectedFormats);
  };

  const handleCityChange = (city: string) => {
    const newSelected = selectedCities.includes(city)
      ? selectedCities.filter(c => c !== city)
      : [...selectedCities, city];
    setSelectedCities(newSelected);
    updateFilters(selectedCountries, newSelected, selectedCategories, selectedPrices, selectedFormats);
  };
  
  const handleCategoryChange = (category: string) => {
    const newSelected = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelected);
    updateFilters(selectedCountries, selectedCities, newSelected, selectedPrices, selectedFormats);
  };
  
  const handlePriceChange = (price: string) => {
    const newSelected = selectedPrices.includes(price)
      ? selectedPrices.filter(p => p !== price)
      : [...selectedPrices, price];
    setSelectedPrices(newSelected);
    updateFilters(selectedCountries, selectedCities, selectedCategories, newSelected, selectedFormats);
  };
  
  const handleFormatChange = (format: string) => {
    const newSelected = selectedFormats.includes(format)
      ? selectedFormats.filter(f => f !== format)
      : [...selectedFormats, format];
    setSelectedFormats(newSelected);
    updateFilters(selectedCountries, selectedCities, selectedCategories, selectedPrices, newSelected);
  };
  
  const updateFilters = (
    countries: string[], 
    cities: string[], 
    categories: string[], 
    prices: string[], 
    formats: string[]
  ) => {
    onFilterChange({ 
      countries, 
      cities,
      categories,
      prices,
      formats 
    });
  };

  return (
    <>
      <Button
        onClick={onToggle}
        className="md:hidden mb-4 bg-cyan-500 hover:bg-cyan-600 text-white"
      >
        <Filter className="w-4 h-4 mr-2" />
        Filtres
      </Button>

      <div className={`${isOpen ? 'block' : 'hidden'} md:block bg-white rounded-lg shadow-sm border p-6 sticky top-4`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filtres
          </h3>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Pays</h4>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {countries.map((country) => (
                <label key={country} className="flex items-center">
                  <Checkbox
                    checked={selectedCountries.includes(country)}
                    onCheckedChange={() => handleCountryChange(country)}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{country}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Ville</h4>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {cities.map((city) => (
                <label key={city} className="flex items-center">
                  <Checkbox
                    checked={selectedCities.includes(city)}
                    onCheckedChange={() => handleCityChange(city)}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{city}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Catégorie</h4>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Prix</h4>
            <div className="space-y-2">
              {prices.map((price) => (
                <label key={price} className="flex items-center">
                  <Checkbox
                    checked={selectedPrices.includes(price)}
                    onCheckedChange={() => handlePriceChange(price)}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{price}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Format</h4>
            <div className="space-y-2">
              {formats.map((format) => (
                <label key={format} className="flex items-center">
                  <Checkbox
                    checked={selectedFormats.includes(format)}
                    onCheckedChange={() => handleFormatChange(format)}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{format}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
