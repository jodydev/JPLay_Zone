#JPlayZone

- [Descrizione](#descrizione)
- [API](#api)
- [Styling Solution or Component Library](#styling-solution-or-component-library)
- [Pages](#pages)
- [API + User Interaction](#api--user-interaction)
- [Context API](#context-api)
- [Deployment](#deployment)

## Descrizione

Benvenuto in JPlayZone, l'ecommerce dedicato agli amanti dei videogiochi dove l'esperienza diventa interattiva. Esplora la nostra vasta libreria di giochi, avrai il potere di cercare, filtrare e aggiungere i tuoi preferiti con facilità. Ma non finisce qui: la nostra piattaforma ti offre l'opportunità di lasciare recensioni dettagliate, condividere le tue opinioni e chiedere consigli utilizzando la nostra live chat interattiva. Con JPlay, l'interazione con la community e la ricerca del tuo prossimo gioco preferito diventano un'esperienza coinvolgente e personalizzata.

## API

- Jody-API: https://data-omega-five.vercel.app/data.json

  - [x] Supporta CORS
  - [ ] Richiede una chiave API
  - [ ] Richiede OAuth

## Styling Solution o Component Library

- CSS3
- Bootstrap: https://getbootstrap.com
- MUI Components: https://mui.com
- Swiper: https://swiperjs.com
- Animista.js: https://animista.net
- Font Awesome: https://fontawesome.com
- React Icon: https://react-icons.github.io/react-icons/
- Google Font: https://swiperjs.com

## Pages

1. HomePage
2. AllGames
3. GameSearch
4. DetailsPage
5. LoginPage
6. RegisterPage
7. Account
8. AccountSettings 
9. RouteNotFound

## API + User Interaction

1. HomePage - Visualizzazione del catalogo videogames filtrati per categoria
2. AllGames - Lista di tutti i videogiochi disponibili
3. GameSearch - Possibilità di ricercare un gioco inserendo il suo titolo
4. DetailsPage - Dettagli del videogioco scelto con possibilità di aggiungere o rimuovere dai preferiti, lasciare una recensione o interagire con la live chat
5. LoginPage - Form per il login, autenticazione con email o con Google/Apple
6. RegisterPage - Form per la registrazione dell'account
7. Account - Dettagli dell'utente loggato, giochi preferiti e recenzioni pubblicate
8. AccountSettings - Form di modifica dati utente
9. RouteNotFound - Feedback per errori 404

## Context API

- Grazie all'AppContext, garantiamo una gestione sicura e intuitiva della sessione dell'utente loggato, assicurando un'esperienza personalizzata e senza interruzioni. Inoltre, il GameContext ci consente di gestire in modo efficiente i dati relativi ai videogiochi, offrendo agli utenti un accesso fluido e rapido alle informazioni.

## Deployment

- Puoi visitare il sito seguendo questo link: https://jplay-zone.vercel.app
