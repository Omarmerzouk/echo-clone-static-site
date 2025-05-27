import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

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

interface Comment {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

interface EventModalProps {
  event: EventProps;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Jean Dupont',
      rating: 5,
      content: 'Excellent événement, très enrichissant !',
      date: '2024-02-15'
    },
    {
      id: '2',
      author: 'Marie Martin',
      rating: 4,
      content: 'Très intéressant, mais la salle était un peu petite.',
      date: '2024-02-14'
    }
  ]);

  const handleReservation = () => {
    toast.success(`Réservation confirmée pour: ${event.title}`);
    onClose();
  };

  const handleAddComment = () => {
    if (!newComment.trim()) {
      toast.error('Veuillez entrer un commentaire');
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      author: 'Utilisateur',
      rating: newRating,
      content: newComment,
      date: new Date().toISOString().split('T')[0]
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setNewRating(5);
    toast.success('Commentaire ajouté avec succès');
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Détails de l'événement {event.title}
          </DialogDescription>
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

        {/* Section Commentaires */}
        <div className="mt-8 border-t pt-6">
          <h4 className="text-lg font-semibold mb-4">Commentaires et Avis</h4>
          
          {/* Formulaire d'ajout de commentaire */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Votre note</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    className={`text-2xl ${star <= newRating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Partagez votre expérience..."
              className="mb-3"
            />
            <Button onClick={handleAddComment} className="w-full">
              Ajouter un commentaire
            </Button>
          </div>

          {/* Liste des commentaires */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white p-4 rounded-lg border">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{comment.author}</p>
                    <div className="flex items-center">
                      {renderStars(comment.rating)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;