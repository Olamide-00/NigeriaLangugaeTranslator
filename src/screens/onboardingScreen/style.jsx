import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";





export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "black"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    title: {
        fontSize: hp(4),
        fontWeight: "bold",
         color: "#fff"
    },
    by: {
        fontWeight: "500",
        marginVertical: hp(3),
         color: "#FFF"
    },
    name: {
        fontWeight: "bold",
        fontSize: hp(3.5),
        marginVertical: hp(2),
        fontStyle: "italic",
        color: "#fff"
    },
   btn: {
    backgroundColor: "#228B22",
    height: hp(7),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp(5),
    marginBottom: hp(2),
    borderRadius: 10
   },
   btnText: {
    fontSize: hp(2.5),
    fontWeight: "600",
     color: "black"
   },
   and: {
     color: "#fff"
   },
   image: {
    width: wp(40),
    height: hp(13)
   },
   imageContainer: {
    marginBottom: hp(5)
   }
})