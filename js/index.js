
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

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

async function fetchRestaurants() {
  const querySnapshot = await getDocs(collection(db, "restaurants"));
  const listContainer = document.getElementById("restaurantList");
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const div = document.createElement("div");
    div.innerHTML = `<h3>${data.name}</h3><p>${data.categorie} - ${data.rating}⭐</p>`;
    div.onclick = () => window.location.href = 'menu.html?id=' + doc.id;
    listContainer.appendChild(div);
  });
}
fetchRestaurants();
