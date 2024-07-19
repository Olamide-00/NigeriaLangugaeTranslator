import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";



export default function Welcome() {
    return(
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}> welcome </Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.contentContainer}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.btnContainer}>
                        <Text  style={styles.btnText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}