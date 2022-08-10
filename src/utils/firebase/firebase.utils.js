import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,    
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJoiy2q9A5KnCVSduCz7tyjqO6MG30wVc",
  authDomain: "crwn-v2-c43a1.firebaseapp.com",
  projectId: "crwn-v2-c43a1",
  storageBucket: "crwn-v2-c43a1.appspot.com",
  messagingSenderId: "835696837120",
  appId: "1:835696837120:web:296e25fe633a3b6758cee5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);