import { StyleSheet } from 'react-native'
import { theme } from "./theme.js";

export default globalstyle = StyleSheet.create({
    pantalla: {
        marginTop: 10,
    },
    texttitle: {
        fontSize: 50,
        color: theme.colors.title,
    },
    btnrutina: {
        borderRadius: 16,
        backgroundColor: theme.colors.secondary,
        marginTop: 30,
        height: 90,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    linkbtn: {
        flex: 1,
    },
    contbtn: {
        alignItems: "center",
        justifyContent: "center",
    },
    btnpencil: {
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        width: 50,
        height: '100%',
        backgroundColor: theme.colors.primary,
        padding: 1

    },
    txtbtnrutina: {
        fontSize: 25,
    },
    txthorabtnrutina: {
        fontSize: 25,
        fontWeight: '600',
        color: theme.colors.bg

    }


});