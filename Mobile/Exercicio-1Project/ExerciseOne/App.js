import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/NaoSiaDAgua.png")} style={styles.image}></Image>
      <Text style={styles.login}>LOGIN</Text>
      <View style={styles.containerEmail} >
        <Text style={styles.email}>Email</Text>
        <TextInput />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerEmail: {
    backgroundColor: '#6D7FF9',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderColor: 'black',
    borderWidth: 1,
  },
  image: {
    width: '100%'
  },
  login: {
    color: 'white',
    width: '70%',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    margin: 10
  },
  email: {
    color: 'white',
  }
});
