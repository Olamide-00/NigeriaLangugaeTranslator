import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff"
    },
    container:{
        marginHorizontal: wp(3)
    }
})