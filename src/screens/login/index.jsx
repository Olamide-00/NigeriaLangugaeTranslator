import { SafeAreaView, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert, ActivityIndicator } from "react-native";
import { useState } from "react";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/config";



export default function Login() {
    
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email,Password)
            const user = userCredential.user
            navigation.navigate("Home");
        } catch(error) {
            Alert.alert(error.message)
        } finally {
            setIsLoading(false)
        }
    };

    return(
        <SafeAreaView style={styles.root}>
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={30}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Create account</Text>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.content}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Email"
                                    style={styles.input}
                                    placeholderTextColor={"#fff"}
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                />
                                <TextInput
                                    placeholder="Password"
                                    style={styles.input}
                                    placeholderTextColor={"#fff"}
                                    value={Password}
                                    onChangeText={text => setPassword(text)} 
                                />
                            </View>
                            <View>
                                <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
                                    <Text style={styles.btnText}>{isLoading? <ActivityIndicator size={200} color={"dodgerblue"}/> : "Login"}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnContainer2} onPress={() => navigation.navigate("SignUp")}>
                                    <Text style={styles.btnText2}>SignUp</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}