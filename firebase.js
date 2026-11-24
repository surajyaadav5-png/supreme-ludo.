
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8serac1jqRU79yzMrDQE9Vrhaw3e8kbM",
  authDomain: "supreme-ludo-56eec.firebaseapp.com",
  databaseURL: "https://supreme-ludo-56eec-default-rtdb.firebaseio.com",
  projectId: "supreme-ludo-56eec",
  storageBucket: "supreme-ludo-56eec.firebasestorage.app",
  messagingSenderId: "350851378664",
  appId: "1:350851378664:web:d9adead0a15f7fa8ff885d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

console.log("Supreme Ludo Firebase Connected!");
