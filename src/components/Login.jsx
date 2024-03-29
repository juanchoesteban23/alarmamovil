import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../theme.js";
import { Link } from "react-router-native";
import globalstyle from "../styles.js";
import { SvgHuella } from "./SvgHuella.jsx";

function Login() {
  return (
    <ScrollView>
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

      <Link to="/home" style={styles.button} underlayColor="#FFE8D3">
        <Text style={styles.textbutton}>Iniciar Sesion</Text>
      </Link>

      <Link to="/" underlayColor="rgb(255 255 255 / 13%)">
        <View style={styles.cuadrohuella}>
          <SvgHuella />
          <Text style={styles.texthuella}>Ingresar con huella</Text>
        </View>
      </Link>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contsesion: {
    backgroundColor: theme.colors.secondary,
    // width: "100vw",
    // height: 314,
    borderRadius: 16,
    marginTop: 60,
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
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  texthuella: {
    marginVertical: 10,
    fontSize: 20,
    color: theme.colors.title,
  },
});

export default Login;
