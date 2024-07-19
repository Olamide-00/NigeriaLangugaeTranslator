import { SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import { styles } from "./style";





export default function Onboarding() {
    return(
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>Nigeria Language Translator </Text>
                <Text style={styles.by}>by</Text>
                <Text style={styles.name}>Oladele Olamide</Text>
                <Text style={styles.and}>&</Text>
                <Text style={styles.name}>Adedugba Opeyemi</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}