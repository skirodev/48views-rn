import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

import Button from './button'

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />


      <TouchableOpacity 
        onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
        style={styles.button}>
            <Text style={styles.buttonText}>
            {status.isPlaying ? '暂停' : '播放'}
            </Text>
          </TouchableOpacity>
      <Button 
        onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
        backgroundColor = {'blue'}
        width = {Dimensions.get('window').width - 40}
        height = { 45 }
        borderRadius = { 20 }>
        {status.isPlaying ? '暂停' : '播放'}
      </Button>


      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
      height: 42,
      borderRadius: 6,
      backgroundColor: "#1977f3",
      justifyContent: "center",
      marginVertical: 15,
    },
    buttonText: {
      color: "#b4cafb",
      textAlign: "center",
      fontSize: 16,
    },
});