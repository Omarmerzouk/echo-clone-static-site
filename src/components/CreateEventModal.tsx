
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateEventModal = ({ isOpen, onClose }: CreateEventModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [format, setFormat] = useState('presentiel');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [sessions, setSessions] = useState([{
    title: '',
    speaker: '',
    time: '',
    description: ''
  }]);

  const addSession = () => {
    setSessions([...sessions, {
      title: '',
      speaker: '',
      time: '',
      description: ''
    }]);
  };

  const updateSession = (index: number, field: string, value: string) => {
    const newSessions = [...sessions];
    newSessions[index] = { ...newSessions[index], [field]: value };
    setSessions(newSessions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event created:', {
      title,
      description,
      dateTime,
      imageUrl,
      format,
      category,
      address,
      city,
      country,
      sessions
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Créer un événement</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations générales</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titre de l'événement *
                </label>
                <Input
                  placeholder="Nom de votre événement"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <Textarea
                  placeholder="Décrivez votre événement..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date et heure *
                </label>
                <Input
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL de l'image (optionnel)
                </label>
                <Input
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Type d'événement</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Format *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="format"
                      value="presentiel"
                      checked={format === 'presentiel'}
                      onChange={(e) => setFormat(e.target.value)}
                      className="text-cyan-600"
                    />
                    <div>
                      <div className="font-medium">Présentiel</div>
                      <div className="text-sm text-gray-500">Événement physique avec lieu</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="format"
                      value="en-ligne"
                      checked={format === 'en-ligne'}
                      onChange={(e) => setFormat(e.target.value)}
                      className="text-cyan-600"
                    />
                    <div>
                      <div className="font-medium">En ligne</div>
                      <div className="text-sm text-gray-500">Événement virtuel</div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie *
                </label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conference">Conférence</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="seminaire">Séminaire</SelectItem>
                    <SelectItem value="formation">Formation</SelectItem>
                    <SelectItem value="networking">Networking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Localisation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse *
                </label>
                <Input
                  placeholder="123 Rue Example"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required={format === 'presentiel'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ville *
                </label>
                <Input
                  placeholder="Paris"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pays *
                </label>
                <Input
                  placeholder="France"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sessions (optionnel)</h3>
            {sessions.map((session, index) => (
              <div key={index} className="border rounded-lg p-4 mb-4">
                <h4 className="font-medium mb-3">Ajouter une session :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Titre de la session
                    </label>
                    <Input
                      placeholder="Ex: Conférence d'ouverture"
                      value={session.title}
                      onChange={(e) => updateSession(index, 'title', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Intervenant
                    </label>
                    <Input
                      placeholder="Nom de l'intervenant"
                      value={session.speaker}
                      onChange={(e) => updateSession(index, 'speaker', e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Horaire
                  </label>
                  <Input
                    placeholder="Ex: 09:00 - 10:30"
                    value={session.time}
                    onChange={(e) => updateSession(index, 'time', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description (optionnel)
                  </label>
                  <Textarea
                    placeholder="Description de la session..."
                    value={session.description}
                    onChange={(e) => updateSession(index, 'description', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            ))}
            
            <Button
              type="button"
              onClick={addSession}
              className="mb-4 bg-gray-600 hover:bg-gray-700 text-white"
            >
              + Ajouter la session
            </Button>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Créer l'événement
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventModal;
