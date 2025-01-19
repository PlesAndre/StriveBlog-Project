import fs from "fs";

// Libreria che genera dati fake
import { faker } from "@faker-js/faker";
import { Parser } from "json2csv";

// Funzione per creare "random authors" usando "faker".
// La struttura sotto si trova nella documentazione dove tutte le funzioni presenti sono già dichiarate nella libreria
function createAuthor() {
  return {
    nome: faker.person.firstName(),
    cognome: faker.person.lastName(),
    data_di_nascita: faker.date.birthdate(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}

function createBlogPost(i, authors) {
  // authors[] = crea un indice casuale scegliendo un autore con quel indice
  // Math.floor() = arrotonda il numero in difetto
  // Math.random() * authors.length = genera un numero casuale tra 0 e 1 e lo moltiplica per la lunghezza dell'array - es. 0,50 * 3 (presenti 3 autori) = 1,5 = 1 (restituisce l'autore in quella posizione)
  const takeRandomAuthor = authors[Math.floor(Math.random() * authors.length)];
  return {
    categoria: faker.commerce.department(),
    titolo: faker.lorem.sentence({ min: 2, max: 6 }),
    cover: faker.image.url(),
    readTime: {
      value: faker.number.int({ min: 2, max: 10 }),
      unit: "minuti",
    },
    // restituisce la proprietà "email" dall'autore scelto casualmente
    autore: `${takeRandomAuthor.email}`,
    contenuto: faker.lorem.paragraphs({ min: 1, max: 3 }),
  };
}

function generateAuthors(num) {
  const newAuthors = [];
  for (let i = 0; i < num; i++) {
    newAuthors.push(createAuthor());
  }
  return newAuthors;
}

function generateBlogPost(num, authors) {
  const newBlogPosts = [];
  for (let i = 0; i < num; i++) {
    // Riceve "takeRandomAuthor" come argomento della funzione
    // Passa "takeRandomAuthor" alla funzione durante ogni iterazione
    // Crea un oggetto con le informazioni passate casualmente e le pusha in "newblogPosts"
    newBlogPosts.push(createBlogPost(i, authors));
  }
  return newBlogPosts;
}

// Genera 20 autori casuali
const authors = generateAuthors(20);

// Genera 40 post dove ogni post è associato a un autore casuale
const blogPosts = generateBlogPost(40, authors);

// new Parser().parse(esempio) = classe che viene utilizzata per convertire un array di oggetti JS in formato CSV
const authorCsv = new Parser().parse(authors);
const blogPostCsv = new Parser().parse(blogPosts);

// fs = File System, salva i file authorCsv e blogPostCsv in un file chiamato "esempio.csv" nella cartella selezionata "./default_files"
fs.writeFileSync("./default_files/blogPosts.csv", blogPostCsv);
fs.writeFileSync("./default_files/authors.csv", authorCsv);

console.log("CSV files generated");
