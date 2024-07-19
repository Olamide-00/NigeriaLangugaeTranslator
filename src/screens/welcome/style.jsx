import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




export const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        marginTop: hp(20),
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: hp(4),
        fontWeight: "bold",
         color: "dodgerblue"
    },
    container2: {
        backgroundColor: "dodgerblue",
        height: hp(90),
        marginTop: hp(20),
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    contentContainer: {
        marginTop: hp(20),
        alignItems: "center",
        justifyContent: "center"
    },
    btnContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: wp(13),
        marginVertical: hp(2),
        height: hp(6),
        justifyContent: "center",
        borderRadius: 20
    },
    btnText: {
        color: "dodgerblue",
        fontWeight: "500"
    }
})