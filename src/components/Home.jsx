import { ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../theme.js";
import globalstyle from "../styles.js";
import { Link } from "react-router-native";
import { SvgPlus } from "./SvgPlus.jsx";
import { SvgPencil } from "./SvgPencil.jsx";
import { SvgHome } from "./SvgHome.jsx";

function Home() {
  return (
    <ScrollView>
      <Text style={globalstyle.texttitle}>Buenos dias Juan</Text>
      {/* Rutinas */}
      <View style={globalstyle.btnrutina}>
        <Link
          to=""
          style={globalstyle.linkbtn}
          activeOpacity={0.7}
          underlayColor="#ffe8d30"
        >
          <View style={globalstyle.contbtn}>
            <Text style={globalstyle.txtbtnrutina} adjustsFontSizeToFit>Casa en la noche</Text>
            <Text style={globalstyle.txthorabtnrutina} adjustsFontSizeToFit>18:30</Text>
          </View>
        </Link>
        <Link
          to=""
          style={globalstyle.btnpencil}
          activeOpacity={0.7}
          underlayColor="#ffe8d30"
        >
          <View>
            <SvgPencil />
          </View>
        </Link>
      </View>
      <View style={globalstyle.btnrutina}>
        <Link
          to=""
          style={globalstyle.linkbtn}
          activeOpacity={0.7}
          underlayColor="#ffe8d30"
        >
          <View style={globalstyle.contbtn}>
            <Text style={globalstyle.txtbtnrutina} adjustsFontSizeToFit>Ejercicio mañanas</Text>
            <Text style={globalstyle.txthorabtnrutina} adjustsFontSizeToFit>06:30</Text>
          </View>
        </Link>
        <Link
          to=""
          style={globalstyle.btnpencil}
          activeOpacity={0.7}
          underlayColor="#ffe8d30"
        >
          <View>
            <SvgPencil />
          </View>
        </Link>
      </View>

      {/* Accion */}
      <View style={styles.btnaccion}>
        <Link
          to=""
          style={styles.linkbtn}
          activeOpacity={0.7}
          underlayColor="#ffe8d30"
        >
          <Text style={styles.textbutton}>Ver más rutinas</Text>
        </Link>
      </View>

      <View style={styles.btnaccion}>
        <Link
          to=""
          style={styles.linkbtn}
          activeOpacity={0.7}
          underlayColor="#ffe8d30"
        >
          <Text style={styles.textbutton}>Estado dispositivos</Text>
        </Link>
      </View>
      <Link
        to="/crearrutina"
        style={styles.linkcreate}
        activeOpacity={0.7}
        underlayColor="#ffe8d30"
      >
        <View style={styles.cuadrocreate}>
          <Text style={styles.txtcreaterut}>Crear rutina</Text>
          <SvgPlus />
        </View>
      </Link>
      <View style={globalstyle.btnhome}>
        <SvgHome r={45} b={5} />
      </View>
    </ScrollView>
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
    marginTop: 20,
  },
  cuadrocreate: {
    alignItems: "center",
    justifyContent: "center",
  },
  txtcreaterut: {
    fontSize: 30,
    color: theme.colors.primary,
  },  
});

export default Home;
