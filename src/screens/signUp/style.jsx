import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




export const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        marginTop: hp(20),
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: hp(3),
        fontWeight: "700"
    },
    container2: {
        backgroundColor: "dodgerblue",
        height: hp(100),
        marginTop: hp(10),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    content: {
        marginTop: hp(10),
        marginLeft: wp(10),
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "#fff",
        width: wp(80),
        fontSize: hp(2.5),
        fontWeight: "500",
        paddingBottom: hp(1),
    },
    inputContainer: {
        gap: 70
    },
    btnContainer: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        height: hp(7),
        width: wp(70),
        marginTop: hp(10),
        borderRadius: 10
    },
    btnText: {
        fontSize: hp(2.6),
        fontWeight: "500",
        color: "dodgerblue"
    }
})