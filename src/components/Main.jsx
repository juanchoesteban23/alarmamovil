import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { Route, Routes } from 'react-router-native';
import Login from './Login';
import {theme} from '../theme.js'
import Home from './Home.jsx';


function Main() {
  return (
    <View style={styles.container}>      
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/listarutinas' element={} /> */}
       </Routes>
       
    </View>

  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.bg,
      alignItems: "center",
      padding: 20,
    },
    pantalla: {
      marginTop: 30,
    },})

export default Main