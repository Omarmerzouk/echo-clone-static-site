
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

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
  type: string;
  format: string;
  image: string;
}

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmitReview = () => {
    console.log('Review submitted:', { rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{event.title}</DialogTitle>
        </DialogHeader>

        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-green-500 text-white rounded-md text-sm font-medium">
              {event.format}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <span className="flex items-center">
                  ⭐ {event.rating} ({event.reviews} avis)
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
                  {event.type}
                </span>
              </div>
            </div>
            <div className="text-right">
              <button className="text-gray-400 hover:text-red-500 mb-2">
                🤍 M'intéresse
              </button>
              <div className="text-2xl font-bold text-green-600">{event.price}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
            <div className="flex items-center">
              <span className="mr-2">📅</span>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">👥</span>
              <span>{event.participants} participants confirmés</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>{event.location}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Organisateur</h3>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">DT</span>
              </div>
              <div>
                <div className="font-medium">{event.organizer}</div>
                <div className="text-sm text-gray-500">{event.organizer}</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{event.description}</p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Commentaires et avis</h3>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Votre note</h4>
              <div className="flex space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl ${
                      star <= rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Votre commentaire</h4>
              <Textarea
                placeholder="Partagez votre expérience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
              />
            </div>

            <Button 
              onClick={handleSubmitReview}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              📤 Se connecter pour commenter
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
