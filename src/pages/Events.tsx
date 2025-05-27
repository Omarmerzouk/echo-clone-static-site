import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import FilterSidebar from '@/components/FilterSidebar';
import EventCard from '@/components/EventCard';

const Events = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({ 
    countries: [], 
    cities: [],
    categories: [],
    prices: [],
    formats: []
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

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
      price: '299€',
      priceCategory: 'Payant',
      organizer: 'TechEvents Inc.',
      type: 'Conférence',
      category: 'Conférence',
      format: 'Présentiel',
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
      priceCategory: 'Payant',
      organizer: 'Digital Academy',
      type: 'Workshop',
      category: 'Workshop',
      format: 'En ligne',
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
      priceCategory: 'Gratuit',
      organizer: 'GreenTech Solutions',
      type: 'Séminaire',
      category: 'Séminaire',
      format: 'Présentiel',
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
      priceCategory: 'Payant',
      organizer: 'CyberSafe Institute',
      type: 'Formation',
      category: 'Formation',
      format: 'Présentiel',
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
      priceCategory: 'Payant',
      organizer: 'Startup Network',
      type: 'Networking',
      category: 'Networking',
      format: 'Présentiel',
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
      priceCategory: 'Payant',
      organizer: 'Crypto Events',
      type: 'Conférence',
      category: 'Conférence',
      format: 'En ligne',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '7',
      title: 'Salon des Voitures Électriques 2024',
      description: 'Découvrez les derniers modèles et technologies dans le domaine des véhicules électriques',
      date: '12 juin 2024',
      location: 'Paris, France',
      country: 'France',
      participants: 1200,
      rating: 4.7,
      reviews: 178,
      price: '15€',
      priceCategory: 'Payant',
      organizer: 'EcoMobilité France',
      type: 'Conférence',
      category: 'Voiture électrique',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba53aab43?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '8',
      title: 'Webinaire: Mobilité électrique et infrastructures',
      description: 'Analyse des enjeux du déploiement des bornes de recharge pour véhicules électriques',
      date: '18 juin 2024',
      location: 'Bruxelles, Belgique',
      country: 'Belgique',
      participants: 320,
      rating: 4.5,
      reviews: 65,
      price: 'Gratuit',
      priceCategory: 'Gratuit',
      organizer: 'European EV Association',
      type: 'Séminaire',
      category: 'Voiture électrique',
      format: 'En ligne',
      image: 'https://images.unsplash.com/photo-1620471603048-85bfb2ad4e8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '9',
      title: 'Workshop: Conception de batteries pour VE',
      description: 'Formation technique sur les dernières innovations en matière de batteries pour véhicules électriques',
      date: '22 juin 2024',
      location: 'Munich, Allemagne',
      country: 'Allemagne',
      participants: 75,
      rating: 4.9,
      reviews: 42,
      price: '450€',
      priceCategory: 'Payant',
      organizer: 'TechBatteries GmbH',
      type: 'Workshop',
      category: 'Voiture électrique',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1647323927523-3ba471cdc3c9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '10',
      title: 'Séminaire sur l\'IA et le Marketing Digital',
      description: 'Explorer les applications de l\'intelligence artificielle dans les stratégies marketing modernes',
      date: '5 juillet 2024',
      location: 'Barcelone, Espagne',
      country: 'Espagne',
      participants: 220,
      rating: 4.6,
      reviews: 85,
      price: '199€',
      priceCategory: 'Payant',
      organizer: 'Digital Marketing Institute',
      type: 'Séminaire',
      category: 'Séminaire',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1553873095-cef5584ec3b6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '11',
      title: 'Conférence sur la Cybersécurité en 2024',
      description: 'Les dernières tendances et menaces dans le domaine de la sécurité informatique',
      date: '15 juillet 2024',
      location: 'Amsterdam, Pays-Bas',
      country: 'Pays-Bas',
      participants: 380,
      rating: 4.8,
      reviews: 112,
      price: '299€',
      priceCategory: 'Payant',
      organizer: 'SecureTech Foundation',
      type: 'Conférence',
      category: 'Conférence',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '12',
      title: 'Forum International de l\'Innovation Durable',
      description: 'Rencontre entre entrepreneurs, chercheurs et investisseurs sur les technologies vertes',
      date: '20 juillet 2024',
      location: 'Copenhague, Danemark',
      country: 'Danemark',
      participants: 450,
      rating: 4.7,
      reviews: 136,
      price: '250€',
      priceCategory: 'Payant',
      organizer: 'Green Innovation Network',
      type: 'Conférence',
      category: 'Conférence',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '13',
      title: 'Workshop sur l\'autonomie des véhicules électriques',
      description: 'Techniques et technologies pour optimiser l\'autonomie des batteries',
      date: '25 juillet 2024',
      location: 'Milan, Italie',
      country: 'Italie',
      participants: 90,
      rating: 4.6,
      reviews: 38,
      price: '175€',
      priceCategory: 'Payant',
      organizer: 'EV Tech Italia',
      type: 'Workshop',
      category: 'Voiture électrique',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1617886212057-72b8598f60a3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '14',
      title: 'Formation en développement React avancé',
      description: 'Maîtrisez les concepts avancés de React et les meilleures pratiques de développement',
      date: '1 août 2024',
      location: 'Dublin, Irlande',
      country: 'Irlande',
      participants: 60,
      rating: 4.9,
      reviews: 45,
      price: '599€',
      priceCategory: 'Payant',
      organizer: 'React Masters',
      type: 'Formation',
      category: 'Formation',
      format: 'En ligne',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '15',
      title: 'Congrès annuel sur les voitures électriques',
      description: 'Tendances, défis et opportunités dans l\'industrie des véhicules électriques',
      date: '5 août 2024',
      location: 'Oslo, Norvège',
      country: 'Norvège',
      participants: 750,
      rating: 4.8,
      reviews: 195,
      price: '350€',
      priceCategory: 'Payant',
      organizer: 'Nordic EV Association',
      type: 'Conférence',
      category: 'Voiture électrique',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '16',
      title: 'Atelier Design Thinking',
      description: 'Méthodologies innovantes pour résoudre des problèmes complexes',
      date: '10 août 2024',
      location: 'Lisbonne, Portugal',
      country: 'Portugal',
      participants: 35,
      rating: 4.7,
      reviews: 28,
      price: '120€',
      priceCategory: 'Payant',
      organizer: 'Creative Solutions',
      type: 'Workshop',
      category: 'Workshop',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1529119513315-c7c361862fc7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '17',
      title: 'Conférence Européenne sur les Transports Électriques',
      description: 'Politiques publiques et initiatives privées pour une mobilité durable en Europe',
      date: '15 août 2024',
      location: 'Vienne, Autriche',
      country: 'Autriche',
      participants: 420,
      rating: 4.5,
      reviews: 110,
      price: '200€',
      priceCategory: 'Payant',
      organizer: 'European Sustainable Transport',
      type: 'Conférence',
      category: 'Voiture électrique',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1592940895528-bc56e8ce27a9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '18',
      title: 'Networking: Entrepreneurs du Digital',
      description: 'Rencontrez des entrepreneurs innovants et développez votre réseau professionnel',
      date: '20 août 2024',
      location: 'Prague, République Tchèque',
      country: 'République Tchèque',
      participants: 150,
      rating: 4.4,
      reviews: 65,
      price: '15€',
      priceCategory: 'Payant',
      organizer: 'Digital Connect',
      type: 'Networking',
      category: 'Networking',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '19',
      title: 'Formation accélérée: Data Science',
      description: 'Acquérir les compétences essentielles en data science et machine learning',
      date: '25 août 2024',
      location: 'Helsinki, Finlande',
      country: 'Finlande',
      participants: 45,
      rating: 4.8,
      reviews: 32,
      price: '499€',
      priceCategory: 'Payant',
      organizer: 'DataMasters Academy',
      type: 'Formation',
      category: 'Formation',
      format: 'Hybride',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '20',
      title: 'Séminaire: Infrastructure de recharge pour flottes électriques',
      description: 'Solutions pratiques pour les entreprises qui souhaitent électrifier leur flotte',
      date: '1 septembre 2024',
      location: 'Genève, Suisse',
      country: 'Suisse',
      participants: 85,
      rating: 4.6,
      reviews: 29,
      price: 'Gratuit',
      priceCategory: 'Gratuit',
      organizer: 'Swiss E-Mobility',
      type: 'Séminaire',
      category: 'Voiture électrique',
      format: 'En ligne',
      image: 'https://images.unsplash.com/photo-1586763209832-ec5ea9ae2f33?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '21',
      title: 'Forum Tech: The Future of Work',
      description: 'Comment la technologie transforme le monde du travail et les compétences de demain',
      date: '5 septembre 2024',
      location: 'Stockholm, Suède',
      country: 'Suède',
      participants: 380,
      rating: 4.7,
      reviews: 105,
      price: '290€',
      priceCategory: 'Payant',
      organizer: 'FutureTech Foundation',
      type: 'Conférence',
      category: 'Conférence',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1573164713619-24c711fe7878?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '22',
      title: 'Workshop: UI/UX Design pour applications mobiles',
      description: 'Principes et pratiques pour créer des expériences utilisateur exceptionnelles',
      date: '10 septembre 2024',
      location: 'Berlin, Allemagne',
      country: 'Allemagne',
      participants: 40,
      rating: 4.9,
      reviews: 36,
      price: '230€',
      priceCategory: 'Payant',
      organizer: 'UX Berlin',
      type: 'Workshop',
      category: 'Workshop',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '23',
      title: 'Conférence sur les batteries nouvelle génération',
      description: 'Les avancées technologiques qui révolutionnent l\'autonomie des véhicules électriques',
      date: '15 septembre 2024',
      location: 'Francfort, Allemagne',
      country: 'Allemagne',
      participants: 310,
      rating: 4.8,
      reviews: 87,
      price: '275€',
      priceCategory: 'Payant',
      organizer: 'EV Battery Innovation',
      type: 'Conférence',
      category: 'Voiture électrique',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1601701119533-fde20cecbf4e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '24',
      title: 'Hackathon: Climate Tech',
      description: 'Développez des solutions innovantes pour lutter contre le changement climatique',
      date: '20 septembre 2024',
      location: 'Paris, France',
      country: 'France',
      participants: 200,
      rating: 4.7,
      reviews: 58,
      price: 'Gratuit',
      priceCategory: 'Gratuit',
      organizer: 'Climate Action Tech',
      type: 'Workshop',
      category: 'Workshop',
      format: 'Présentiel',
      image: 'https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '25',
      title: 'Symposium International sur la Mobilité Électrique',
      description: 'État des lieux et perspectives d\'avenir pour le marché mondial des véhicules électriques',
      date: '25 septembre 2024',
      location: 'Londres, Royaume-Uni',
      country: 'Royaume-Uni',
      participants: 580,
      rating: 4.9,
      reviews: 145,
      price: '400€',
      priceCategory: 'Payant',
      organizer: 'Global EV Council',
      type: 'Conférence',
      category: 'Voiture électrique',
      format: 'Hybride',
      image: 'https://images.unsplash.com/photo-1607197109166-3ab4ee4b00fc?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (searchQuery) {
      const searchFields = [
        event.title,
        event.description,
        event.location,
        event.country,
        event.type,
        event.category,
        event.format
      ].map(field => field?.toLowerCase() || '');

      if (!searchFields.some(field => field.includes(searchQuery))) {
        return false;
      }
    }

    if (filters.countries.length > 0 && !filters.countries.includes(event.country)) {
      return false;
    }
    if (filters.cities.length > 0 && !filters.cities.some(city => event.location.includes(city))) {
      return false;
    }
    if (filters.categories.length > 0 && !filters.categories.includes(event.category)) {
      return false;
    }
    if (filters.prices.length > 0 && !filters.prices.includes(event.priceCategory)) {
      return false;
    }
    if (filters.formats.length > 0 && !filters.formats.includes(event.format)) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Découvrez {filteredEvents.length} événements dans le monde
            {searchQuery && <span className="text-gray-600 text-lg ml-2">pour "{decodeURIComponent(searchQuery)}"</span>}
          </h2>
          <div className="hidden md:flex">
            <button 
              onClick={() => setFiltersOpen(!filtersOpen)} 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center"
            >
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

export default Events;