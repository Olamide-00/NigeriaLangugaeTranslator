import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff"
    },
    container:{
        marginHorizontal: wp(3)
    },
    title: {
        fontSize: hp(4),
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: hp(3),
        color: "dodgerblue",
        marginBottom: hp(3)
    },
    input: {
        borderWidth: 1,
        height: hp(20),
        borderColor: "dodgerblue",
        borderRadius: 10,
        paddingLeft: wp(5),
        paddingTop: hp(3),
        fontSize: hp(3)
    },
    language: {
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        gap: 20,
        marginTop: hp(3)
    },
    languageBtn: {
        borderColor: "dodgerblue",
        borderWidth: 1,
        width: wp(20),
        height: hp(5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    languageBtnText: {
        color: "dodgerblue",
        fontWeight: "500"
    },
    languageBtn2: {
        borderColor: "dodgerblue",
        borderWidth: 1,
        width: wp(20),
        height: hp(5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    languageBtnText2: {
        color: "dodgerblue",
        fontWeight: "500"
    },
    container2: {
        marginTop: hp(4),
    },
    title2: {
        fontSize: hp(2.5),
        alignSelf: "center",
    },
    view: {
        borderBottomWidth: 1,
        borderColor: "dodgerblue",
        paddingBottom: hp(2)
    },
    translatedText: {
        // flex: 1,
        height: hp(37)
    },
    text2: {
        marginTop: hp(3)
    },
    readBtn: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "dodgerblue",
        width: wp(80),
        height: hp(5),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        flexDirection: "row"
    },
    readText: {
        color: "#fff",
        fontWeight: "500",
        marginRight: wp(3)
    },
    languageSelection: {
        flexDirection: "row",
        gap: 30,
        marginBottom: hp(3),
        alignItems: "center"
    },
    selectText: {
        fontSize: hp(2.2),
        color: "dodgerblue",
        fontWeight: "bold"
    },
    translateText: {
        color: "#fff",
        fontWeight: "bold"
    },
    translateBtn: {
        backgroundColor: "dodgerblue",
        marginHorizontal: wp(5),
        alignItems: "center",
        justifyContent: "center",
        height: hp(5),
        borderRadius: 30
    },
    languageBtnTextSelected: {
        fontSize: hp(3),
        color: "dodgerblue",
        fontWeight: "900"
    }
})