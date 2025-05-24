
// Données des événements
const events = [
    {
        id: 1,
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
        format: 'Présentiel',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
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
        format: 'En ligne',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
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
        format: 'Présentiel',
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        title: 'Formation Cybersécurité',
        description: 'Apprenez à protéger votre entreprise contre les cybermenaces...',
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
        format: 'Présentiel',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 5,
        title: 'Networking Startups Paris',
        description: 'Rencontrez les entrepreneurs les plus prometteurs de Paris...',
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
        format: 'Présentiel',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80'
    }
];

let filteredEvents = [...events];
let currentEvent = null;

// Navigation
function showSection(sectionId) {
    // Cacher toutes les sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Mettre à jour les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Gestion des clics sur les liens de navigation
document.addEventListener('DOMContentLoaded', function() {
    // Afficher la section d'accueil par défaut
    showSection('accueil');
    
    // Générer les événements
    generateEvents();
    
    // Gérer les clics sur les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
});

// Recherche d'événements
function searchEvents() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query.trim()) {
        filteredEvents = events.filter(event => 
            event.title.toLowerCase().includes(query) ||
            event.location.toLowerCase().includes(query) ||
            event.country.toLowerCase().includes(query) ||
            event.type.toLowerCase().includes(query)
        );
        generateEvents();
        showSection('evenements');
        showToast(`${filteredEvents.length} événement(s) trouvé(s) pour "${query}"`);
    } else {
        showToast('Veuillez entrer un terme de recherche', 'error');
    }
}

// Génération des cartes d'événements
function generateEvents() {
    const grid = document.getElementById('eventsGrid');
    const eventCount = document.getElementById('eventCount');
    
    eventCount.textContent = filteredEvents.length;
    
    grid.innerHTML = filteredEvents.map(event => `
        <div class="event-card" onclick="openEventModal(${event.id})">
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-content">
                <div class="event-header">
                    <span class="event-type">${event.type}</span>
                    <span class="event-format ${event.format === 'Présentiel' ? 'format-presentiel' : 'format-enligne'}">
                        ${event.format}
                    </span>
                </div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-details">
                    <div class="event-detail">
                        <i class="fas fa-calendar"></i>
                        <span>${event.date}</span>
                    </div>
                    <div class="event-detail">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.location}</span>
                    </div>
                    <div class="event-detail">
                        <i class="fas fa-users"></i>
                        <span>${event.participants} participants</span>
                    </div>
                </div>
                <div class="event-footer">
                    <div class="event-rating">
                        <span>⭐</span>
                        <span>${event.rating}</span>
                        <span style="color: #6b7280; font-size: 14px;">(${event.reviews} avis)</span>
                    </div>
                    <div class="event-price">${event.price}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Gestion des filtres
function toggleFilters() {
    const sidebar = document.getElementById('filtersSidebar');
    sidebar.classList.toggle('open');
}

function applyFilters() {
    const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]:checked');
    const selectedFilters = Array.from(checkboxes).map(cb => cb.value);
    
    if (selectedFilters.length === 0) {
        filteredEvents = [...events];
    } else {
        filteredEvents = events.filter(event => 
            selectedFilters.includes(event.country) ||
            selectedFilters.includes(event.type) ||
            selectedFilters.includes(event.priceCategory)
        );
    }
    
    generateEvents();
    showToast(`Filtres appliqués: ${filteredEvents.length} événement(s) trouvé(s)`);
}

// Modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function openLoginModal() {
    openModal('loginModal');
}

function openRegisterModal() {
    openModal('registerModal');
}

function openEventModal(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    currentEvent = event;
    
    const modalContent = document.getElementById('eventModalContent');
    modalContent.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
            <div>
                <img src="${event.image}" alt="${event.title}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px;">
            </div>
            <div>
                <h3 style="font-size: 24px; margin-bottom: 15px; color: #1f2937;">${event.title}</h3>
                <p style="color: #6b7280; margin-bottom: 20px; line-height: 1.6;">${event.description}</p>
                
                <div style="margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <i class="fas fa-calendar" style="width: 20px; margin-right: 10px; color: #6b7280;"></i>
                        <span>${event.date}</span>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <i class="fas fa-map-marker-alt" style="width: 20px; margin-right: 10px; color: #6b7280;"></i>
                        <span>${event.location}</span>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <i class="fas fa-users" style="width: 20px; margin-right: 10px; color: #6b7280;"></i>
                        <span>${event.participants} participants</span>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <i class="fas fa-building" style="width: 20px; margin-right: 10px; color: #6b7280;"></i>
                        <span>Organisé par ${event.organizer}</span>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <span style="color: #fbbf24; margin-right: 5px;">⭐</span>
                    <span style="font-weight: 600; font-size: 18px;">${event.rating}</span>
                    <span style="color: #6b7280; margin-left: 5px;">(${event.reviews} avis)</span>
                </div>
                
                <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                    <span style="background: ${event.format === 'Présentiel' ? '#10b981' : '#3b82f6'}; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">
                        ${event.format}
                    </span>
                    <span style="background: #f3f4f6; color: #374151; padding: 6px 12px; border-radius: 6px; font-size: 14px;">
                        ${event.type}
                    </span>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px;">
                    <div style="font-size: 28px; font-weight: bold; color: #059669;">${event.price}</div>
                    <button onclick="reserveEvent()" class="btn-primary" style="padding: 12px 24px; font-size: 16px;">
                        Réserver ma place
                    </button>
                </div>
            </div>
        </div>
    `;
    
    openModal('eventModal');
}

// Réservation d'événement
function reserveEvent() {
    if (!currentEvent) return;
    
    closeModal('eventModal');
    
    if (currentEvent.price === 'Gratuit') {
        showToast(`Réservation confirmée pour: ${currentEvent.title}`);
    } else {
        openPaymentModal();
    }
}

function openPaymentModal() {
    if (!currentEvent) return;
    
    document.getElementById('paymentEventTitle').textContent = currentEvent.title;
    document.getElementById('paymentPrice').textContent = currentEvent.price;
    
    openModal('paymentModal');
}

// Traitement du paiement
function processPayment(event) {
    event.preventDefault();
    
    // Simulation du traitement du paiement
    const formData = new FormData(event.target);
    const cardNumber = formData.get('cardNumber') || event.target.querySelector('input[placeholder*="1234"]').value;
    
    if (cardNumber.length < 16) {
        showToast('Numéro de carte invalide', 'error');
        return;
    }
    
    // Simulation d'un délai de traitement
    const submitBtn = event.target.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Traitement en cours...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        closeModal('paymentModal');
        showToast(`Paiement réussi! Réservation confirmée pour: ${currentEvent.title}`);
        
        // Réinitialiser le bouton
        submitBtn.textContent = 'Confirmer le paiement';
        submitBtn.disabled = false;
        
        // Réinitialiser le formulaire
        event.target.reset();
    }, 2000);
}

// Connexion et inscription
function login(event) {
    event.preventDefault();
    closeModal('loginModal');
    showToast('Connexion réussie!');
}

function register(event) {
    event.preventDefault();
    closeModal('registerModal');
    showToast('Inscription réussie!');
}

// Toast notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Fermeture des modals en cliquant à l'extérieur
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Formatage automatique du numéro de carte
document.addEventListener('input', function(e) {
    if (e.target.placeholder && e.target.placeholder.includes('1234')) {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
        if (formattedValue.length <= 19) {
            e.target.value = formattedValue;
        }
    }
    
    if (e.target.placeholder && e.target.placeholder.includes('MM/AA')) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    }
});
