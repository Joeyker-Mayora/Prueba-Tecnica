import admin from "firebase-admin";
import data from "./data.js"; // Importa los datos desde data.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("../src/key_service_account.json");

const collectionKey = "posts"; // Nombre de la colección en Firestore

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

const uploadData = async () => {
  if (!Array.isArray(data)) {
    console.error("Error: el archivo data.js no es un array.");
    return;
  }

  for (const item of data) {
    try {
      const docRef = firestore.collection(collectionKey).doc(String(item.id)); 
      await docRef.set(item);
      console.log(`📌 Documento ${item.id} agregado a la colección "${collectionKey}".`);
    } catch (error) {
      console.error(`❌ Error subiendo documento ${item.id}:`, error);
    }
  }
};

uploadData().then(() => console.log("✅ Datos subidos a Firestore."));
