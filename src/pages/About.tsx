
import React from 'react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">À propos de GlobalEvents</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              GlobalEvents est une plateforme dédiée à la découverte et à l'organisation d'événements professionnels à travers le monde entier.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Notre Mission</h2>
            <p className="text-gray-700 mb-4">
              Nous croyons que les événements professionnels sont essentiels pour le développement des carrières, l'innovation et le réseautage. 
              Notre mission est de rendre ces opportunités accessibles à tous, en facilitant la découverte et la participation à des conférences, 
              séminaires, formations et rencontres networking de qualité.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Notre Histoire</h2>
            <p className="text-gray-700 mb-4">
              Fondée en 2022, GlobalEvents est née de la vision d'un groupe d'entrepreneurs passionnés par l'événementiel et la technologie. 
              Face aux défis de l'après-pandémie, nous avons créé une solution permettant de dynamiser le secteur de l'événementiel professionnel 
              en combinant événements présentiels, en ligne et hybrides sur une seule plateforme.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Ce Que Nous Offrons</h2>
            <ul className="list-disc pl-6 mt-2 mb-6 text-gray-700">
              <li className="mb-2">Une plateforme centralisée pour découvrir des événements dans plus de 50 pays</li>
              <li className="mb-2">Des outils pour organisateurs permettant de maximiser la visibilité de leurs événements</li>
              <li className="mb-2">Une interface intuitive pour rechercher des événements selon vos intérêts et préférences</li>
              <li className="mb-2">Un système de recommandation personnalisé basé sur votre profil et votre historique</li>
              <li>Une communauté mondiale de professionnels partageant les mêmes centres d'intérêt</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Notre Équipe</h2>
            <p className="text-gray-700 mb-4">
              Notre équipe internationale est composée d'experts en technologie, en événementiel et en expérience utilisateur. 
              Nous travaillons ensemble pour vous offrir la meilleure plateforme possible, en innovant constamment pour répondre 
              aux besoins changeants du marché de l'événementiel professionnel.
            </p>
            
            <div className="mt-10 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contactez-nous</h2>
              <p className="text-gray-700">
                Vous avez des questions ou des suggestions? N'hésitez pas à nous contacter à 
                <a href="mailto:contact@globalevents.com" className="text-blue-600 ml-1">contact@globalevents.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
