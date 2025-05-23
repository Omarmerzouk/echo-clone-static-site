
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import EventModal from './EventModal';

interface Event {
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
  organizer: string;
  type: 'Conférence' | 'Workshop' | 'Séminaire' | 'Formation' | 'Networking';
  format: 'Présentiel' | 'En ligne';
  image: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conférence': return 'bg-gray-100 text-gray-800';
      case 'Workshop': return 'bg-purple-100 text-purple-800';
      case 'Séminaire': return 'bg-green-100 text-green-800';
      case 'Formation': return 'bg-cyan-100 text-cyan-800';
      case 'Networking': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFormatColor = (format: string) => {
    return format === 'Présentiel' 
      ? 'bg-green-500 text-white' 
      : 'bg-blue-500 text-white';
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${getTypeColor(event.type)}`}>
              {event.type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${getFormatColor(event.format)}`}>
              {event.format}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {event.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {event.description}
          </p>

          <div className="space-y-2 text-sm text-gray-500 mb-4">
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">⭐</span>
                <span className="font-medium">{event.rating}</span>
                <span className="text-gray-500 text-sm ml-1">({event.reviews} avis)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-600">{event.price}</div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Organisé par {event.organizer}
          </div>
        </div>
      </div>

      <EventModal
        event={event}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default EventCard;
