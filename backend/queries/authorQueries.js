// Importa lo schema su cui usare le queries
import Author from "../models/authorSchema.js";

// TUTTI GLI AUTORI
//La querie al DB è una funzione asincrona perchè deve aspettare che ottenga tutti i dati
const getAllAuthors = async (req, res, next) => {
  try {
    // .find({}) = {oggetto di query vuoto} => ritorna tutti i dati
    // ritorna un array di oggetti memorizzato in "returnAll"
    const returnAll = await Author.find({});
    res.json(returnAll); // Invia al client i dati del DB in JSON
    return returnAll; // Chiunque chiami la funzione permette di utilizzare i dati
  } catch (error) {
    console.log(error);
  }
};

// AUTORE SPECIFICO
const getAuthorById = async (req, res, next) => {
  try {
    // req.params = rappresenta i dati che arrivano dalla richiesta HTTP (URL)
    // req.params.id = accede all'id specifico della richiesta
    const id = req.params.id;

    // findById({}) = cerca un documento che è compatibile all'id richiesto
    const author = await Author.findById({ _id: id });
    if (!author) {
      res.sendStatus(404).json("Author not found");
    } else {
      res.json(author); // Invia al client i dati dell'autore in JSON
    }
    return author;
  } catch (error) {
    console.log(error);
  }
};

// AGGIUNTA AUTORE
const createAuthor = async (req, res, next) => {
  try {
    // "create()" = confronta i dati del modello "Author" con quelli presi dal "req.body"
    // "req.body" = è l'oggetto che contine i dati inviati dalla FE al server
    const newAuthor = await Author.create(req.body);
    res.status(201).json("Autore aggiunto correttamente");
  } catch (error) {
    console.log(error);
  }
};

const updateAuthor = async (req, res, next) => {
  try {
    // req.params = rappresenta i dati che arrivano dalla richiesta HTTP (URL)
    // req.params.id = accede all'id specifico della richiesta
    const id = req.params.id;

    // findByIdAndUpdate() = cerca un autore nel DB in base all'id e gli aggiorna con i dati forniti nella "req.body" presi dalla FE
    const editAuthor = await Author.findByIdAndUpdate(id, req.body);
    res.status(200).json("Autore aggiornato correttamente");
  } catch (error) {
    console.log(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    // req.params = rappresenta i dati che arrivano dalla richiesta HTTP (URL)
    // req.params.id = accede all'id specifico della richiest
    const id = req.params.id;

    //findByIdAndDelete() = cerca un autore nel DB con l'id fornito, se esite lo elimina dal DB
    // restituisce "null" se quell'id non esiste
    const deleteAuth = await Author.findByIdAndDelete(id);
    res.status(200).json("Autore cancellato correttamente");
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
