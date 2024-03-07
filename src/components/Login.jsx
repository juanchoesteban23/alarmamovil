import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../theme.js";
import { Link } from "react-router-native";
import { SvgHuella } from "./SvgHuella.jsx";
import globalstyle from '../styles.js'

function Login() {
  return (
    <View style={globalstyle.pantalla}>
      <Text style={globalstyle.texttitle}>Iniciar Sesión</Text>
      <View style={styles.contsesion}>
        <Text style={styles.textsub}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          textContentType="emailAddress"
          placeholderTextColor={"grey"}
        />
        <Text style={styles.textsub}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          textContentType="password"
          placeholderTextColor={"grey"}
          secureTextEntry
        />
      </View>

      <Link to="/home" style={styles.button}>
        <Text style={styles.textbutton}>Iniciar Sesion</Text>
      </Link>

      <Link to="/">
        <View style={styles.cuadrohuella}>
          <SvgHuella />
          <Text style={styles.texthuella}>Ingresar con huella</Text>
        </View>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({  
  contsesion: {
    backgroundColor: theme.colors.secondary,
    width: "100vw",
    // height: 314,
    borderRadius: 16,
    marginTop: 100,
    padding: 20,
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
    marginTop: 40,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  textbutton: {
    fontSize: 25,
  },
  cuadrohuella: {
    marginTop: 50,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  texthuella: {
    marginTop: 20,
    fontSize: 20,
    color: theme.colors.title,
  },
});

export default Login;
