import { StyleSheet } from "react-native"

export const titleSizes = 25
export const primaryColor = '#2C2C2C'
export const secondaryColor = "white"
export const buttonColor = "#0DBCD3"
export const errorColor = "red"
export const authStyles = StyleSheet.create({
    centerScrollView: {
        justifyContent: "center",
        flexGrow: 1
    },
    card: {
        backgroundColor: "white",
        marginHorizontal: "5%",
        borderRadius: 30,
        paddingVertical: 15,
    },
    title: {
        textAlign: "center",
        fontWeight: "900",
        fontSize: titleSizes
    },
    button: {
        alignSelf: "center",
        borderRadius: 30,
        width: "60%"
    },
    moveWindowLabel: {
        textAlign: "center",
        marginTop: 15,
        color: primaryColor,
    }
})