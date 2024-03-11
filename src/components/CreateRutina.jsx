import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme.js";
import { Link } from "react-router-native";
import globalstyle from "../styles.js";
import { SvgHome } from "./SvgHome.jsx";
import { SvgPencil } from "./SvgPencil.jsx";
import { ScrollView } from "react-native";

function CreateRutina() {
  return (
    <ScrollView>
      <Text style={globalstyle.texttitle}>Crear rutina </Text>
      <View style={styles.contsesion}>
        <Text style={styles.txtdescripcion}>Nombre</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txtedit}>Casa en la noche</Text>
          <SvgPencil w="20px" h="20px" color="#fa9537" />
        </View>
        <Text style={styles.txtdescripcion}>Dispositivo</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txtedit}>Aire acondicionado</Text>
          <SvgPencil w="20px" h="20px" color="#fa9537" />
        </View>
        <Text style={styles.txtdescripcion}>Acción</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txtedit}>Temperatura, 24°C</Text>
          <SvgPencil w="20px" h="20px" color="#fa9537" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.txtdescripcion}>Fecha</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.txtedit}>Hoy, Martes</Text>
              <SvgPencil w="20px" h="20px" color="#fa9537" />
            </View>
          </View>
          <View>
            <Text style={styles.txtdescripcion}>Hora</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.txtedit}>18:30</Text>
              <SvgPencil w="20px" h="20px" color="#fa9537" />
            </View>
          </View>
        </View>
        <Text style={styles.txtdescripcion}>Repetir</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txtedit}>Todos los dias</Text>
          <SvgPencil w="20px" h="20px" color="#fa9537" />
        </View>
        <Text style={styles.txtdescripcion}>Sonido</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txtedit}>Sonido Bestial - Richie</Text>
          <SvgPencil w="20px" h="20px" color="#fa9537" />
        </View>
        <Text style={styles.txtdescripcion}>Descripción</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txtedit}>
            Rutina despues del trabajo al llegar a casa
          </Text>
          <SvgPencil w="20px" h="20px" color="#fa9537" />
        </View>
      </View>
      <View style={styles.cuadrobtns}>
        <Link
          to="/crearrutinaOK"
          style={styles.btnsave}
          underlayColor="#FFE8D3"
        >
          <Text style={styles.textbutton}>Guardar</Text>
        </Link>
        <Link to="/home" style={styles.btncancel} underlayColor="#f8dabe">
          <Text style={styles.textbutton}>Cancelar</Text>
        </Link>
      </View>
      <View style={globalstyle.btnhome}>
        <SvgHome b={5} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contsesion: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 16,
    marginTop: 30,
    padding: 20,
    // marginHorizontal: 20,
  },
  txtedit: {
    fontSize: 18,
    color: theme.colors.bg,
    paddingLeft: 25,
    marginBottom: 6,
    marginVertical: 3,
  },
  txtdescripcion: {
    fontSize: 20,
  },
  btnsave: {
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  btncancel: {
    marginLeft: 25,
    borderRadius: 16,
    backgroundColor: theme.colors.tertiary,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  textbutton: {
    fontSize: 25,
  },
  cuadrobtns: {
    marginVertical: 20,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    // marginHorizontal: 20,
  },
});

export default CreateRutina;
