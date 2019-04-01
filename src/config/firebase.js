import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCDCzdHZEk0MQ0lYVT-OaFwHl1qsdcJyE0",
  authDomain: "blog-ca520.firebaseapp.com",
  databaseURL: "https://blog-ca520.firebaseio.com",
  projectId: "blog-ca520",
  storageBucket: "",
  messagingSenderId: "976503654835"
}

firebase.initializeApp(config)

export default firebase