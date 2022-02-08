// Simple way to call firebase 
// Also this is a to demonstrate
// a bit of OOP and promisses
import React, { Component } from "react";

import "@react-native-firebase/auth";
import "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/app";

export const auth = firebase.auth();
export const db = firebase.firestore();

class Fire {
    constructor() {
        console.log("Connecting to Firebase")
    }

    // Create a user account
    handleSignUp = (email, password) => {
        return new Promise((resolve, reject) => {
            auth
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    resolve(true);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    // Validate if user is logged
    isLogged = () => {
        return new Promise((resolve, reject) => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    resolve(user)
                } else {
                    reject()
                }
            });
        });
    }

    // Login
    handleLogIn = (email, password) => {
        return new Promise((resolve, reject) => {
            auth
                .signInWithEmailAndPassword(email, password)
                .then(async (user) => {
                    resolve(user.user)
                })
                .catch((error) => {
                    console.log(error)
                    reject(error)
                })
        });
    };

    // SignOut
    handleSignOut = () => {
        return new Promise((resolve, reject) => {
            auth
                .signOut()
                .then(() => {
                    resolve();
                })
                .catch(() => {
                    reject();
                });
        });
    };

    // Add data to firestore
    addData = (coleccion, data) => {
        return new Promise((resolve, reject) => {
            db.collection(coleccion)
                .add({ ...data })
                .then((doc) => {
                    resolve(doc);
                })
                .catch((error) => reject(error));
        });
    };

    // Delete document
    deleteDocument = (coleccion, documento) => {
        return new Promise((resolve, reject) => {
            db.collection(coleccion)
                .doc(documento)
                .delete()
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

}

Fire = new Fire();
export default Fire;