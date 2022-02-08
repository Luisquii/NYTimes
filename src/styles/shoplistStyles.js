import { StyleSheet } from "react-native"
import { primaryColor, secondaryColor, titleSizes } from "./authStyles"
export const shoplistStyles = StyleSheet.create({

    flatList: {
        height: "100%",
        backgroundColor: primaryColor
    },
    removeButton: {
        paddingVertical: 1,
        marginTop: 15,
        backgroundColor: secondaryColor,
    },
    author: {
        color: "gray"
    }
})
