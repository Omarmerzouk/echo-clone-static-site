
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  country: string;
  participants: number;
  rating: number;
  reviews: number;
  price: string;
  priceCategory: string;
  organizer: string;
  type: string;
  category?: string;
  format: string;
  image: string;
}

interface EventModalProps {
  event: EventProps;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  const handleReservation = () => {
    console.log('Réservation pour:', event.title);
    // Logique de réservation serait ajoutée ici
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-4">{event.description}</p>
            
            <div className="space-y-3 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">👥</span>
                <span>{event.participants} participants</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🏢</span>
                <span>Organisé par {event.organizer}</span>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 mr-1 text-lg">⭐</span>
              <span className="font-semibold text-lg">{event.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({event.reviews} avis)</span>
            </div>
            
            <div className="flex space-x-2 mb-4">
              <span className={`px-3 py-1 rounded-md text-sm font-medium ${event.format === 'Présentiel' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                {event.format}
              </span>
              <span className={`px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800`}>
                {event.type}
              </span>
              {event.category === 'Voiture électrique' && (
                <span className="px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                  ⚡ Voiture électrique
                </span>
              )}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <div className="text-2xl font-bold text-green-600">{event.price}</div>
              <Button 
                onClick={handleReservation} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
              >
                Réserver ma place
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
