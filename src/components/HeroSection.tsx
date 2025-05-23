
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast.success(`Recherche pour: ${searchQuery}`);
      navigate(`/events?search=${encodeURIComponent(searchQuery)}`);
    } else {
      toast.error("Veuillez entrer un terme de recherche");
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="mb-8">
            <span className="text-yellow-400 text-4xl">⭐</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Découvrez des événements
            <br />
            <span className="text-yellow-400">extraordinaires</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Explorez les conférences, séminaires et événements les plus captivants à
            <br />
            travers le monde entier
          </p>
          
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex rounded-full bg-white shadow-lg overflow-hidden">
              <Input
                placeholder="Rechercher un événement, une ville, un pays..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-0 text-gray-900 placeholder-gray-500 text-lg py-4 px-6 focus:outline-none focus:ring-0"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                onClick={handleSearch}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-none rounded-r-full"
              >
                Rechercher
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Événements</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Pays</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-blue-200">Participants</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
