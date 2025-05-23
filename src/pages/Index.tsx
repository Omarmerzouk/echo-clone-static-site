
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FilterSidebar from '@/components/FilterSidebar';
import EventCard from '@/components/EventCard';

const Index = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({ countries: [], cities: [] });

  const events = [
    {
      id: '1',
      title: 'Conférence Intelligence Artificielle 2024',
      description: 'Découvrez les dernières avancées en IA avec des experts internationaux...',
      date: '15 juin 2024',
      location: 'San Francisco, États-Unis',
      country: 'États-Unis',
      participants: 850,
      rating: 4.8,
      reviews: 127,
      price: '$ 299€',
      organizer: 'TechEvents Inc.',
      type: 'Conférence' as const,
      format: 'Présentiel' as const,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Workshop Digital Marketing',
      description: 'Maîtrisez les stratégies de marketing digital moderne avec des exercices...',
      date: '20 juin 2024',
      location: 'Londres, Royaume-Uni',
      country: 'Royaume-Uni',
      participants: 245,
      rating: 4.6,
      reviews: 89,
      price: '149€',
      organizer: 'Digital Academy',
      type: 'Workshop' as const,
      format: 'En ligne' as const,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'Séminaire Innovation Durable',
      description: 'Comment les entreprises peuvent innover tout en respectant...',
      date: '10 juillet 2024',
      location: 'Stockholm, Suède',
      country: 'Suède',
      participants: 320,
      rating: 4.9,
      reviews: 156,
      price: 'Gratuit',
      organizer: 'GreenTech Solutions',
      type: 'Séminaire' as const,
      format: 'Présentiel' as const,
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      title: 'Formation Cybersécurité',
      description: 'Apprenez à protéger votre entreprise contre les cybermenaces avec les...',
      date: '25 juillet 2024',
      location: 'Berlin, Allemagne',
      country: 'Allemagne',
      participants: 150,
      rating: 4.7,
      reviews: 67,
      price: '399€',
      organizer: 'CyberSafe Institute',
      type: 'Formation' as const,
      format: 'Présentiel' as const,
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      title: 'Networking Startups Paris',
      description: 'Rencontrez les entrepreneurs les plus prometteurs de Paris. Événement de...',
      date: '30 juin 2024',
      location: 'Paris, France',
      country: 'France',
      participants: 180,
      rating: 4.4,
      reviews: 92,
      price: '25€',
      organizer: 'Startup Network',
      type: 'Networking' as const,
      format: 'Présentiel' as const,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '6',
      title: 'Conférence Blockchain & Web3',
      description: 'Explorez l\'avenir décentralisé du web avec les pionniers de la blockchain et...',
      date: '5 août 2024',
      location: 'Zurich, Suisse',
      country: 'Suisse',
      participants: 450,
      rating: 4.5,
      reviews: 203,
      price: '199€',
      organizer: 'Crypto Events',
      type: 'Conférence' as const,
      format: 'En ligne' as const,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (filters.countries.length > 0 && !filters.countries.includes(event.country)) {
      return false;
    }
    if (filters.cities.length > 0 && !filters.cities.some(city => event.location.includes(city))) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Découvrez {filteredEvents.length} événements dans le monde
          </h2>
          <div className="hidden md:flex">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center">
              🔧 Filtres
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-full md:w-1/4">
            <FilterSidebar
              isOpen={filtersOpen}
              onToggle={() => setFiltersOpen(!filtersOpen)}
              onFilterChange={setFilters}
            />
          </div>

          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
