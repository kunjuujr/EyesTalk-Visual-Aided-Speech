const firebaseConfig = {
    apiKey: "AIzaSyACZIAA096A_q9S8cdCVSOuY7Bq55Z4hxQ",
    authDomain: "eyes-talk.firebaseapp.com",
    projectId: "eyes-talk",
    storageBucket: "eyes-talk.appspot.com",
    messagingSenderId: "128029044951",
    appId: "1:128029044951:web:d39c6f8882147a8f28c092",
    measurementId: "G-BTHQJCS7SQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()


//signup
function signup() {

    var email = document.getElementById("semail")
    var password = document.getElementById("spassword")
    var confpassword = document.getElementById("confpassword");

    if (confpassword.value != password.value) {
        alert("Passwords do not match")
        confpassword.value = ""
        password.value = ""
    } else {
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
        alert("Signed up using " + email.value)
        promise.catch(e => alert(e.message))
        signupToLogin()
    }

}

//sigin
function signin() {

    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var user = firebase.auth().currentUser;

    const promise = auth.signInWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message))

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            loginToCalib()
            emailstr = email.value
            mailstr = "@gmail.com"
            emailstr = emailstr.replace(mailstr, "")
            document.getElementById("emailtxt").innerHTML = emailstr
            document.getElementById("emailend").innerHTML = mailstr
            document.getElementById('profile').style.display = 'block'

        }
        else {
            document.getElementById("emailtxt").innerHTML = ""

        }
    })
}

function logout() {
    firebase.auth().signOut()
    location.reload()
    document.getElementById('profile').style.display = 'none';

}

