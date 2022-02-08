import { StyleSheet } from "react-native"
import { secondaryColor, titleSizes } from "./authStyles"
export const homeStyles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: 'center'
    },
    row: {
        flexDirection: "row"
    },
    showingTitle: {
        color: secondaryColor,
        fontWeight: "bold",
        fontSize: titleSizes,
        width: "90%",
    },

    bookDescriptionContainer: {
        marginHorizontal: 15,
        marginTop: "5%"
    },
    bookImage: {
        borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        // borderRadius: 30,
        width: 300,
        height: 380,
    },
    titleText: {
        marginTop: 5,
        color: secondaryColor,
        fontWeight: "bold",
        fontSize: titleSizes,
        width: 300,
        flexWrap: "wrap"
    },
    addCartContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5
    },
    addButton: {
        backgroundColor: secondaryColor,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        paddingVertical: 1
    },
    authorText: {
        fontSize: 18,
        fontWeight: "500",
        flexWrap: "wrap",
        color: secondaryColor,
        width: 200
    },
    descriptionText: {
        width: 300,
        color: "gray",
        fontStyle: "italic"
    }


})