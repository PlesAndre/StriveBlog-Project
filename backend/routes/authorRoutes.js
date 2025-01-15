import express from "express";
// Lista di tutti gli autori dal database
import {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "../queries/authorQueries.js";

// Offre la possibilità di organizzare le routes insieme e applica i middlewear a essi
const router = express.Router();

// .get = associa un endpoint HTTP ("/") a una funzione che si occuperà della risposta, in questo caso ("getAllAuthors")
router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);

// .put = quando il server riceve questa richiesta con l'id specifico, eseguirà questa funzione "updateAuthor" modificando l'autore
router.put("/:id", updateAuthor);

// .delete = elimina l'autore dal server
router.delete("/:id", deleteAuthor);

// .post = crea un nuovo autore nel server
router.post("/new", createAuthor);

// In questo modo può essere importato e usato nell'applicazione
// Differenze tra "export default" e "export {}"
// export default = si può esportare un solo valore dallo stesso modulo
// export {} = si possono esportare più valori dallo stesso modulo
export { router };
