import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={{ uri: 'https://source3.48.cn/2022/0612/538697x5kohlkvfjgj2rzrxfv1e6ii.jpg'}} />
      <Text style={styles.paragraph}>
        Xiaoai Shen
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 192,
    width: 128,
  }
});
