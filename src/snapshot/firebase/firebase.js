import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/storage'
import "firebase/compat/auth"
import config from "./config-obfuscated.js"
import configSecondary from "./secondary/config-obfuscated.js"

firebase.initializeApp(config);
const secondaryApp = firebase.initializeApp(configSecondary,"secondary");

const db = firebase.firestore();
const rdb = firebase.database();
const storage = firebase.storage();

const rdb_auth = secondaryApp.database();
//console.log("rdb_auth",rdb_auth);

function snapToArray(snap) {
    if (snap.val() == null) return []
    let vet = [], data = snap.val()
    for (let i in data) {
        vet.push(data[i])
    }
    return (vet);
}

export { db, rdb, storage, rdb_auth, snapToArray }
