import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/Golden_Crown.png")} style={styles.image}></Image>
      <Text style={styles.login}>LOGIN</Text>

      <View style={styles.table}>
        <View style={styles.Label}>
          <Text style={styles.TextLabel}>Email:</Text>
        </View>
        <View style={styles.containerInput} >
          <TextInput style={styles.textInput} defaultValue='Digitar Email' />
        </View>

        <View style={styles.Label}>
          <Text style={styles.TextLabel}>Senha:</Text>
        </View>
        <View style={styles.containerInput} >
          <TextInput style={styles.textInput} defaultValue='Digitar Senha' />
        </View>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textButao}> ENTRAR </Text>
        </TouchableOpacity>
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
  containerInput: {
    width: '80%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    borderColor: '#EAB608',
    borderWidth: 2,
    borderRadius: 8,
  },
  image: {
    width: '40%'
  },
  login: {
    color: 'white',
    width: '40%',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: '#EAB608',
    borderBottomWidth: 1
  },
  TextLabel: {
    color: '#EAB608',
    fontWeight: '300',
    fontSize: 15,
  },
  textInput: {
    paddingLeft: 10,
    color: 'gray',
    width: '100%',
  },
  Label: {
    alignItems: 'flex-start',
    width: '85%',
    marginTop: 10
  },
  table: {
    // borderColor:'#EAB608',
    width: '90%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    margin: 15,
    width: '60%',
    height: 35,
    borderColor: '#EAB608',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#EAB608',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButao: {
    fontWeight: '600',
    fontSize: 20,
    color: 'white'
  }
});
