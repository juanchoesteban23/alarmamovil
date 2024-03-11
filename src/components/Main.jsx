import {  StatusBar, StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";
import Login from "./Login";
import { theme } from "../theme.js";
import Home from "./Home.jsx";
import CreateRutina from "./CreateRutina.jsx";
import CreateRutinaOK from "./CreateRutinaOK.jsx";

function Main() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crearrutina" element={<CreateRutina />} />
        <Route path="/crearrutinaOK" element={<CreateRutinaOK />} />
      </Routes>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    paddingHorizontal:30
  },  
});

export default Main;
