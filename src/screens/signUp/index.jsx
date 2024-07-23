import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../config/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { styles } from "./style";

export default function Login() {
    const navigation = useNavigation();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async () => {
        setIsLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user); // Handle the user as needed
            navigation.navigate("Home");
        } catch (error) {
            console.error("Error signing up: ", error);
            Alert.alert(error.message); // Set error message to display to the user
        } finally{
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.root}>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Create account</Text>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.content}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Username"
                                    style={styles.input}
                                    placeholderTextColor={"#fff"}
                                    value={userName}
                                    onChangeText={text => setUserName(text)}
                                />
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
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    secureTextEntry
                                />
                            </View>
                            <View>
                                <TouchableOpacity style={styles.btnContainer} onPress={handleSignUp}>
                                    <Text style={styles.btnText}>{isLoading? <ActivityIndicator color={"dodgerblue"} size={200}/> : "Sign Up"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
