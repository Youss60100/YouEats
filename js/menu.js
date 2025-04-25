
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4dkyfg7kx08xyu71agKYxjakdfIQaonU",
  authDomain: "youeats-v1.firebaseapp.com",
  projectId: "youeats-v1",
  storageBucket: "youeats-v1.appspot.com",
  messagingSenderId: "787609366224",
  appId: "1:787609366224:web:1fb51ef5c9e1b40fb0f8d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const urlParams = new URLSearchParams(window.location.search);
const restaurantId = urlParams.get('id');

async function loadRestaurant() {
  const docRef = doc(db, "restaurants", restaurantId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    document.getElementById("restaurantInfo").innerHTML = `<h1>${docSnap.data().name}</h1>`;
  }
}
loadRestaurant();
