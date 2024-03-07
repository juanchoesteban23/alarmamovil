import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { theme } from './src/theme.js'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pantalla}>
        <Text style={styles.texttitle}>Iniciar Sesión</Text>
        <View style={styles.contsesion}>
          <Text style={styles.textsub}>Correo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu correo"
            textContentType="emailAddress"
            placeholderTextColor={'grey'}
          />
          <Text style={styles.textsub}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu contraseña"
            textContentType="password"
            placeholderTextColor={'grey'}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    alignItems: 'center',
    padding: 20

  },
  pantalla: {
    marginTop: 30,
  },
  texttitle: {
    fontSize: 50,
    color: theme.colors.title
  },
  contsesion: {
    backgroundColor: theme.colors.secondary,
    width: '100vw',
    // height: 314,
    borderRadius: 16,
    marginTop: 100,
    padding: 20
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
  },
  textsub: {
    fontSize: 28,
  },
  button: {
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    marginTop:40,
    height: 70,   
    alignItems: 'center',
    justifyContent: 'center'
  },
  textbutton: {
    fontSize: 32,
    

  }
});
