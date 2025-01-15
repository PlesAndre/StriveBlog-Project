// Importa "mongoose" una libreria che semplifica l'interazione con MongoDB. Definisce schemi e modelli per dati, e gestisce la connessione e le operazione con il DB
import mongoose from "mongoose";

import "dotenv/config"; // Permette di imporare elementi dichiarati nel file .env

// Viene dichiarata funzione asincrona perchè la connessione al DB richiede del tempo, facendo si che il sito non si blocchi.
const connectDB = async () => {
  try {
    // mongoose.connect = stabilisce una connessione con MongoDB tramite il LOCAL_URI dichiarato nel file .env
    const connect = await mongoose.connect(process.env.LOCAL_URI);

    // Se la connessione al DB è riuscita mi restituisce le informazioni dell'host
    // connect = variabile della connessione al DB
    // connection = proprietà che rappresenta lo stato della connessione al database contenendo informazioni specifiche
    // host = indica il valore del server che ha raggiunto, può essere un indirizzo IP (127.0.1.ecc), dominio ("cluster.mongo.db.net") o localhost in esecuzione sulla macchina
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
