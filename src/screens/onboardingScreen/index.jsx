import { SafeAreaView, View, Text, TouchableOpacity, Image} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";





export default function Onboarding() {

    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate("Login")
    };
    return(
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../../assets/flag.png")}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <Text style={styles.title}>Nigeria Language Translator </Text>
                <Text style={styles.by}>by</Text>
                <Text style={styles.name}>Oladele Olamide</Text>
                <Text style={styles.and}>&</Text>
                <Text style={styles.name}>Adedugba Opeyemi</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={handlePress}>
                    <Text style={styles.btnText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}