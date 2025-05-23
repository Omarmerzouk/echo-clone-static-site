
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import CreateEventModal from './CreateEventModal';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🌐</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">GlobalEvents</h1>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Accueil
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Événements
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                À propos
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <Button 
                    onClick={() => setShowCreateEvent(true)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    + Créer un événement
                  </Button>
                  <Button variant="ghost" className="text-gray-700">
                    👤 Mon profil
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-red-600"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    🔄 Déconnexion
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowLogin(true)}
                    className="text-gray-700"
                  >
                    🔗 Connexion
                  </Button>
                  <Button 
                    onClick={() => setShowRegister(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    📝 S'inscrire
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)}
        onLogin={() => {
          setIsLoggedIn(true);
          setShowLogin(false);
        }}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      
      <RegisterModal 
        isOpen={showRegister} 
        onClose={() => setShowRegister(false)}
        onRegister={() => {
          setIsLoggedIn(true);
          setShowRegister(false);
        }}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />

      <CreateEventModal 
        isOpen={showCreateEvent} 
        onClose={() => setShowCreateEvent(false)}
      />
    </>
  );
};

export default Header;
