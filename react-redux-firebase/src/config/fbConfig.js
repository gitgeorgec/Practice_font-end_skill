import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCbqICYc7l178IkcC1qwTBYqfYNlHRmWp8",
    authDomain: "talkroom-ed6ba.firebaseapp.com",
    databaseURL: "https://talkroom-ed6ba.firebaseio.com",
    projectId: "talkroom-ed6ba",
    storageBucket: "talkroom-ed6ba.appspot.com",
    messagingSenderId: "918476779959"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true })

  export default firebase
