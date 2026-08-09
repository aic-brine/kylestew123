// firebase.js — FULL FILE

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export let db = null;

export async function initFirebase() {
  try {
    const config = await fetch("/config/firebase-config.json").then(r => r.json());
    const app = initializeApp(config);
    db = getFirestore(app);
    console.log("Firebase initialized.");
  } catch (err) {
    console.error("Firebase init error:", err);
  }
}
