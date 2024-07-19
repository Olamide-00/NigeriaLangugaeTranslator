import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./style";



export default function Login() {

    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");

    const handleLogin = async () => {};

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
                            placeholder="Password"
                            style={styles.input}
                            placeholderTextColor={"#fff"}
                            value={Password}
                            onChangeText={text => setPassword(text)} 
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}