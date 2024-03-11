import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme.js";
import { Link } from "react-router-native";
import { SvgCheck } from "./SvgCheck.jsx";
import CreateRutina from "./CreateRutina.jsx";

function CreateRutinaOK() {
  return (
    <>
      <View style={styles.contok}>
        <Text style={styles.textbutton}>Rutina creada con exito</Text>
        <Link to='/home' activeOpacity={0.7} underlayColor='#9b4b0011'>
          <SvgCheck />
        </Link>
      </View>
      <View style={styles.overlay}>
        <CreateRutina />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textbutton: {
    fontSize: 25,
    fontWeight: "600",
  },
  overlay: {
    position: "absolute",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "black",
    opacity: 0.3,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contok: {
    padding: 30,
    borderRadius: 16,
    zIndex: 2,
    position: "absolute",
    top: "40%",
    width: "90%",
    backgroundColor: theme.colors.secondary,
    alignItems: 'center'
  },
});

export default CreateRutinaOK;
