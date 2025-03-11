# Strive Blog

## Descrizione
Strive Blog è un'applicazione web che consente agli utenti di visualizzare e creare blog personali su temi specifici. Questo progetto rappresenta il mio primo approccio al backend e alla gestione di un'applicazione completa, utilizzando MongoDB, Express, Mongoose, e Node.js. Il sito include funzionalità complete di CRUD (Create, Read, Update, Delete) sia per la gestione dei blog generali che per la sezione degli autori.

Nonostante fosse un progetto complesso, in particolare per la parte backend, con il supporto del docente sono riuscito a gestire la creazione di un'applicazione full-stack. Tuttavia, il backend gira attualmente in localhost e non è stato ancora effettuato il deploy, quindi il sito non è ancora accessibile online.

## Tecnologie utilizzate
- MongoDB (per il database NoSQL)
- Express (framework web per Node.js)
- Mongoose (libreria per interagire con MongoDB in modo semplice)
- Node.js (per la gestione del backend)
- CSS3, Bootstrap (per la parte frontend)
- JavaScript (per la logica dell'applicazione)

## Installazione e utilizzo
Requisiti
Prima di iniziare, assicurati di avere i seguenti strumenti installati:

Node.js: Puoi scaricarlo da qui: https://nodejs.org/en
MongoDB: Puoi scaricare e avviare MongoDB in locale o utilizzare una versione cloud (ad esempio, MongoDB Atlas). 
https://www.mongodb.com/products/platform/atlas-database

Passaggi per l'installazione
Clona il repository:

git clone https://github.com/tuo-username/strive-blog.git
Vai nella cartella del progetto e installa le dipendenze:
npm install

Configura il database MongoDB:
- Se usi MongoDB in locale, assicurati che il tuo server MongoDB sia in esecuzione.
- Se usi MongoDB Atlas, sostituisci la stringa di connessione al database nel file di configurazione con quella del tuo cluster su MongoDB Atlas.
  
Avvia il server backend:
npm start
Una volta avviato il server, l'applicazione sarà disponibile su http://localhost:3000.

Puoi quindi interagire con il sito per creare e visualizzare blog, aggiungere autori e navigare tra i contenuti.

### Limitazioni
Il progetto non è ancora stato distribuito online, quindi puoi usarlo solo in locale.
Attualmente, il backend gira in localhost, quindi le richieste devono essere fatte da localhost.

## Funzionalità implementate
- CRUD per i blog: Creazione, lettura, aggiornamento e cancellazione di blog. Gli utenti possono creare blog su temi specifici e visualizzare i post esistenti.
- CRUD per gli autori: Ogni blog è associato a un autore, e gli utenti possono gestire i propri dati personali, modificare le informazioni e aggiungere nuove esperienze.
- Autenticazione e gestione degli utenti: Inizialmente previsto per futuri sviluppi, ma non ancora implementato in questa versione.
- Interazione con il database MongoDB: Utilizzo di MongoDB tramite Mongoose per la gestione dei dati, inclusi i blog e gli autori.
- Backend e API RESTful: Gestione delle rotte per interagire con il database tramite un'architettura API RESTful usando Express.
- Frontend responsivo: Visualizzazione dei contenuti su una pagina web interattiva, con un'interfaccia semplice per la creazione e visualizzazione dei blog.
