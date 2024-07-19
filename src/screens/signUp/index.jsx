import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./style";



export default function Login() {

    const [userName, setUserName] =useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleSignUp = async () => {};


    return(
        <SafeAreaView style={styles.root}>
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
                            value={Password}
                            onChangeText={text => setPassword(text)} 
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnText}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}