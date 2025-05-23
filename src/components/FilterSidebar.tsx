
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onFilterChange: (filters: any) => void;
}

const FilterSidebar = ({ isOpen, onToggle, onFilterChange }: FilterSidebarProps) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

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

  const handleCountryChange = (country: string) => {
    const newSelected = selectedCountries.includes(country)
      ? selectedCountries.filter(c => c !== country)
      : [...selectedCountries, country];
    setSelectedCountries(newSelected);
    onFilterChange({ countries: newSelected, cities: selectedCities });
  };

  const handleCityChange = (city: string) => {
    const newSelected = selectedCities.includes(city)
      ? selectedCities.filter(c => c !== city)
      : [...selectedCities, city];
    setSelectedCities(newSelected);
    onFilterChange({ countries: selectedCountries, cities: newSelected });
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
                  <input
                    type="checkbox"
                    checked={selectedCountries.includes(country)}
                    onChange={() => handleCountryChange(country)}
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
                  <input
                    type="checkbox"
                    checked={selectedCities.includes(city)}
                    onChange={() => handleCityChange(city)}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{city}</span>
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
