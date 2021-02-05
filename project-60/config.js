import firebase from 'firebase';


<script>
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBXFIFTgJkprmeG4dFiby2AQ68Rj2hSlhI",
    authDomain: "you-better-not-skip-cla.firebaseapp.com",
    projectId: "you-better-not-skip-cla",
    storageBucket: "you-better-not-skip-cla.appspot.com",
    messagingSenderId: "544200870345",
    appId: "1:544200870345:web:b1de5eb9d78fb3facb4018"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
