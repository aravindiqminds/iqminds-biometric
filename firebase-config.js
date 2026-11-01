// Import Firebase modules via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
 apiKey: "AIzaSyBvGRhoOwzcJRlnn3YXtWtRb4GDGg6phag",
  authDomain: "iqminds-biometric.firebaseapp.com",
  projectId: "iqminds-biometric",
  storageBucket: "iqminds-biometric.firebasestorage.app",
  messagingSenderId: "338123016950",
  appId: "1:338123016950:web:805963991b09b5ffe83ad7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);