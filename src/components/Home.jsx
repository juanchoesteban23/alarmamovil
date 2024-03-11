import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme.js";
import globalstyle from "../styles.js";
import { Link } from "react-router-native";
import { SvgPlus } from "./SvgPlus.jsx";
import { SvgPencil } from "./SvgPencil.jsx";
import { SvgHome } from "./SvgHome.jsx";

function Home() {
  return (
    <View style={globalstyle.pantalla}>
      <Text style={globalstyle.texttitle}>Buenos dias Juan</Text>
      {/* Rutinas */}
      <View style={globalstyle.btnrutina}>
        <Link to="" style={globalstyle.linkbtn} activeOpacity={0.7} underlayColor='#ffe8d30'>
          <View style={globalstyle.contbtn}>
            <Text style={globalstyle.txtbtnrutina}>Casa en la noche</Text>
            <Text style={globalstyle.txthorabtnrutina}>18:30</Text>
          </View>
        </Link>
        <Link to="" style={globalstyle.btnpencil} activeOpacity={0.7} underlayColor='#ffe8d30'>
          <View>
            <SvgPencil />
          </View>
        </Link>
      </View>
      <View style={globalstyle.btnrutina}>
        <Link to="" style={globalstyle.linkbtn} activeOpacity={0.7} underlayColor='#ffe8d30'>
          <View style={globalstyle.contbtn}>
            <Text style={globalstyle.txtbtnrutina}>Ejercicio mañanas</Text>
            <Text style={globalstyle.txthorabtnrutina}>06:30</Text>
          </View>
        </Link>
        <Link to="" style={globalstyle.btnpencil} activeOpacity={0.7} underlayColor='#ffe8d30'>
          <View>
            <SvgPencil />
          </View>
        </Link>
      </View>

      {/* Accion */}
      <View style={styles.btnaccion}>
        <Link to="" style={styles.linkbtn} activeOpacity={0.7} underlayColor='#ffe8d30'>
          <Text style={styles.textbutton}>Ver más rutinas</Text>
        </Link>
      </View>

      <View style={styles.btnaccion}>
        <Link to="" style={styles.linkbtn} activeOpacity={0.7} underlayColor='#ffe8d30'>
          <Text style={styles.textbutton}>Estado dispositivos</Text>
        </Link>
      </View>
      <Link to="/crearrutina" style={styles.linkcreate} activeOpacity={0.7} underlayColor='#ffe8d30'>
        <View style={styles.cuadrocreate}>
          <Text style={styles.txtcreaterut}>Crear rutina</Text>
          <SvgPlus />
        </View>
      </Link>

      
        <SvgHome  r={-20} b={-40}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  btnaccion: {
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    marginTop: 25,
    // marginBottom: 5,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textbutton: {
    fontSize: 25,
  },
  linkbtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  linkcreate: {
    marginTop: 50,
    height: 70,
  },
  cuadrocreate: {
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  txtcreaterut: {
    fontSize: 30,
    color: theme.colors.primary,
  },
  btnhome: {
    borderRadius: 16,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4EFFF",
    right: 0,
    bottom: 0,
    width: "25%",
    height: "12%",
  },
});

export default Home;
