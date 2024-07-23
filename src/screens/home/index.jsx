import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Speech from 'expo-speech';
import axios from 'axios';
import { Audio } from 'expo-av';
import { styles } from "./style";



export default function Home() {

  
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("");
  const [targetLang, setTargetLang] = useState("");

  const translateText = async () => {
    const options = {
      method: 'POST',
      url: 'https://translate-plus.p.rapidapi.com/translate',
      headers: {
        'x-rapidapi-key': 'ff6e31a8d5msh01a0db7cdb6f417p1f678fjsn54029490244d',
        'x-rapidapi-host': 'translate-plus.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        text: inputText,
        source: sourceLang,
        target: targetLang
      }
    };

    try {
      const response = await axios.request(options);
      if (response.data && response.data.translations && response.data.translations.translation) {
        setTranslatedText(response.data.translations.translation);
      } else {
        setTranslatedText("Translation not available");
      }
    } catch (error) {
      console.error(error);
      setTranslatedText("Error in translation");
    }
  };

  const speak = async () => {
    const ttsOptions = {
      method: 'POST',
      url: 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',
      headers: {
        'x-rapidapi-key': 'ff6e31a8d5msh01a0db7cdb6f417p1f678fjsn54029490244d',
        'x-rapidapi-host': 'cloudlabs-text-to-speech.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        voice: "en-US-Wavenet-D", // Example voice name, adjust as necessary
        text: translatedText,
        speed: 1.0,
        sampleRate: 24000
      }
    };

    try {
      const ttsResponse = await axios.request(ttsOptions);
      if (ttsResponse.data && ttsResponse.data.result && ttsResponse.data.result.audio_url) {
        const audioUrl = ttsResponse.data.result.audio_url;
        const { sound } = await Audio.Sound.createAsync(
          { uri: audioUrl },
          { shouldPlay: true }
        );
        await sound.playAsync();
      } else {
        throw new Error("Audio URL not found in response");
      }
    } catch (error) {
      console.error("Error in Text-to-Speech API, using Expo Speech as fallback", error);
      Speech.speak(translatedText);
    }
  };

  const handleSourceLanguageSelect = (lang) => {
    setSourceLang(lang);
    setTargetLang(lang === "yo" ? "ig" : "yo");
  };

  const handleTargetLanguageSelect = (lang) => {
    setTargetLang(lang);
  };

  return (
    <SafeAreaView style={styles.root}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.title}>Translate</Text>
          <View style={styles.languageSelection}>
            <Text style={styles.selectText}>Select source language:</Text>
            <TouchableOpacity style={styles.languageBtn} onPress={() => handleSourceLanguageSelect("yo")}>
              <Text style={sourceLang === "yo" ? styles.languageBtnTextSelected : styles.languageBtnText}>Yoruba</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.languageBtn2} onPress={() => handleSourceLanguageSelect("ig")}>
              <Text style={sourceLang === "ig" ? styles.languageBtnTextSelected : styles.languageBtnText2}>Igbo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="Enter your text"
              multiline
              autoCorrect={false}
              autoComplete={false}
              style={styles.input}
              value={inputText}
              onChangeText={text => setInputText(text)}
            />
            <View style={styles.language}>
              <TouchableOpacity style={styles.languageBtn} onPress={() => handleTargetLanguageSelect("yo")}>
                <Text style={targetLang === "yo" ? styles.languageBtnTextSelected : styles.languageBtnText}>Yoruba</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.languageBtn2} onPress={() => handleTargetLanguageSelect("ig")}>
                <Text style={targetLang === "ig" ? styles.languageBtnTextSelected : styles.languageBtnText2}>Igbo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.languageBtn2} onPress={() => handleTargetLanguageSelect("en")}>
                <Text style={targetLang === "en" ? styles.languageBtnTextSelected : styles.languageBtnText2}>English</Text>
              </TouchableOpacity>
              <Text style={styles.selectText}>Translated to</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity style={styles.translateBtn} onPress={translateText}>
              <Text style={styles.translateText}>Translate</Text>
            </TouchableOpacity>
            <View style={styles.view} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.translatedText}>
                <Text style={styles.text2}>{translatedText || "No text"}</Text>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.readBtn} onPress={speak}>
            <Text style={styles.readText}>Speak</Text>
            <MaterialIcons name="speaker" size={15} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
