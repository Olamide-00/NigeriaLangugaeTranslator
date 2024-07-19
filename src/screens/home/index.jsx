import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import TranslateText, { TranslateLanguage } from '@react-native-ml-kit/translate-text';

export default function TranslateScreen() {
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const translate = async () => {
      try {
        const result = await TranslateText.translate({
          text: "hello",  
          sourceLanguage: TranslateLanguage.ENGLISH,
          targetLanguage: TranslateLanguage.FRENCH,
          downloadModelIfNeeded: true,
        });
        setTranslatedText(result);
      } catch (error) {
        console.error('Translation error:', error);
      } finally {
        setLoading(false);
      }
    };

    translate();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Translation Screen</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Text style={styles.translatedText}>{translatedText}</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  translatedText: {
    fontSize: 20,
    marginTop: 20,
    color: '#333',
  },
});
