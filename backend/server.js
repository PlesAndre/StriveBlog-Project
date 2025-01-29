// Pacchetti da installare dal terminale
// npm init -y = inizializza una cartella npm
// npm install nodemon --save-dev = refresh automatico del DB (--save -dev, lo installa temporaneamente, solo per il progetto in locale)
// npm install express = installa il framewrok Express.js, facilita la creazione dei server con Node.js
// npm install mongoose = installa mongoose per il DB
// npm cors = autorizzazione tra FE e BE
// npm install dotenv = consente di importare dal file .env

// Cosa cambiare nel package.json (BE)
// "main" : "server.js" = BE iniziliazzata su server.js
// "start" : "nodemon server.js"
// "type" : "module" = si può usare "import" al posto di "const"
// senza "module" sarebbe "const express = require("express")

import express from "express"; // Importa Express.js, framework che facilita la creazione dei server con Node.js
import cors from "cors"; // Importa "cors" che permette la comunicazione tra FE e DB
import connectDB from "./config/db.js"; // Importa il file di connessione al DB
import { router as authorRouter } from "./routes/authorRoutes.js";
import { router as blogPostRouter } from "./routes/blogPostRoutes.js";
import { router as commentRouter } from "./routes/commentRoutes.js";

const server = express(); // Crea il server con express()
//express.json() e cors() sono dei middlewears
// Di default il server express() non interpreta il JSON, quindi bisogna specificarlo
server.use(express.json());
server.use(cors()); // permette le richieste tra FE e BE
connectDB(); // Chiama la funzione per connettersi al DB

const port = 3001; // Specifica la "port" per il backend

// server.get = definisce una rotta che risponde a una richiesta HTTP, tipo GET, verso la radice del server
server.get("/", (request, response) => {
  // response.send() = quando il server ricevere la richiesta risponde con il messaggio indicato
  response.send("Questa è la mia backend");
});

// server.use = se la richiesta inizia con /api/authors passa la gestione al "authorRouter" dove sono gestite tutte le routes
server.use("/api/authors", authorRouter); // Quando verrà chiamato l'endpoint (/api/authors) il server risponderà utilizzando la route dichiarata su "authorRoutes"

server.use("/api/blog_posts", blogPostRouter);

server.use("/api/comments", commentRouter);

// // Come chiamare i dati nella BE
// const consoleAuthors = async () => {
//   const consAuth = await getAllAuthors();
//   console.log(consAuth);
// };
// consoleAuthors();

// Server per avviare il server e "ascoltare" una porta specifica, in questo caso "3001", in modo che sia pronta a ricevere e gestire richieste
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Esempio server come un centralino telefonico:

// server.get("/") è come dire: "Se qualcuno chiama il numero principale e non aggiunge estensioni, rispondi dicendo 'Questa è la mia backend'".
// server.use("/api/authors", authorRouter) è come dire: "Se qualcuno chiama aggiungendo /api/authors, inoltra la chiamata a un ufficio specializzato (il router authorRouter) che sa gestire meglio quel tipo di richiesta".
