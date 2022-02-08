import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import catchAuthErrors from '../cases/catchAuthErrors';
import { api_key, api_url } from '../utils/config';
import Fire, { db } from '../utils/Fire';

export const AuthContext = React.createContext({
    user: null,
    login: () => { },
    signUp: () => { },
    isLogged: () => { },
    logout: () => { },
    _getCategories: () => { },
    _getShoppingList: () => { }
})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [categories, setCategories] = useState([])
    const [shoppingBooks, setShoppingBooks] = useState([])

    return (
        <AuthContext.Provider
            value={{
                user,
                categories,
                shoppingBooks,

                login: async (email, password, setErrorMsj, setLoading) => {
                    if (!email || !password) {
                        Alert.alert("Error", "Fill all the fields")
                        return
                    }
                    setLoading(true)
                    await Fire.handleLogIn(email, password)
                        .then(async user => {
                            setLoading(false)
                            setUser(user)
                        })
                        .catch(async error => {
                            await catchAuthErrors(error, setErrorMsj)
                            setLoading(false)
                            setUser(null)
                        })
                },
                signUp: async (email, password, setErrorMsj, setLoading) => {
                    setErrorMsj(null)
                    if (!email || !password) {
                        setErrorMsj("Fill all the fields")
                        return
                    }

                    setLoading(true)
                    let created = false
                    await Fire.handleSignUp(email, password)
                        .then(() => {
                            created = true
                        })
                        .catch(error => {
                            catchAuthErrors(error, setErrorMsj)
                            setLoading(false)
                        })

                    return created
                },
                isLogged: async (setLoading) => {
                    await Fire.isLogged()
                        .then((user) => {
                            setLoading(false)
                            setUser(user)
                        })
                        .catch(error => {
                            setLoading(false)
                            setUser(null)
                        })
                },
                logout: async () => {
                    Fire.handleSignOut()
                        .then(async () => {
                            await setUser(null)
                        }).catch(error => {
                            console.log(error)
                        })
                },

                _getCategories: async () => {
                    let categories_snapshot = await fetch(`${api_url}lists/names.json?api-key=${api_key}`)
                    let result = await categories_snapshot.json();
                    setCategories(result.results)
                    // console.log(result.results)
                },
                _getShoppingList: async () => {
                    let snapshot = await db
                        .collection("shopping_cart")
                        .where("useremail", '==', user.email)
                        .get()
                        .catch(error => {
                            console.log(error)
                        })

                    if (snapshot.empty) {
                        await setShoppingBooks([])
                    }

                    if (!snapshot.empty) {
                        let books_snapshot = []

                        await snapshot.docs.forEach(doc => {
                            books_snapshot.push({ doc_id: doc.id, doc_data: doc.data() })
                        })

                        setShoppingBooks(books_snapshot)
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};
