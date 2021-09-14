import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Switch, CheckBox, Picker } from 'react-native';

const mimage = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  const[isActiveSwitch, setActiveSwitch]=useState(false);
  const [valSwitch,setValSwitch]= useState(0);
  const [sexo, setSexo]= useState(false);
  const [accesorio, setAccesorio]= useState('Monitor')
  const altSwitch= () => {
    setActiveSwitch(statePrevious => !statePrevious)
    if(!isActiveSwitch){
      setValSwitch(1)
    }
    else{
      setValSwitch(0)
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Image
          source={require('./images/image.jpg')}
          style={styles.mImages}
        />
        <Image
          source={require('./images/valle.jpg')}
          style={styles.mImages}
        />
        <Image
          source={mimage}
          style={styles.mImages}
        />
        <Image
          source={{ uri: 'https://www.eltiempo.com/files/article_main/uploads/2019/12/07/5dec47012d257.jpeg' }}
          style={styles.mImages}
        />
        {/* <Image
          source={{uri:'https://acortar.link/ACE8O0'}}
          style={styles.mImages}
        /> */}
        {/* <Image
          source={{uri:'https://acortar.link/zRdpmT'}}
          style={styles.mImages}
        /> */}
        <ImageBackground
          source={mimage}
          style={styles.mImages}
        >
          <Text style={{color:'red',fontSize:25,textAlign:'center',margin:20}}>texto al frente</Text>

        </ImageBackground>

      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text>Micrófono:  {isActiveSwitch ? " Activado " : " Desactivado "}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isActiveSwitch ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={altSwitch}
          value={isActiveSwitch}
        />
        <Text>Valor numérico: {valSwitch}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <CheckBox
          value={sexo}
          onValueChange={setSexo}
          style={{alignSelf:'center'}}
        />
        <Text>Masculino/Femenino</Text>
      </View>
      <View>
        <Text>seleccione el accesorio</Text>
      <Picker
          selectedValue={accesorio}
          style={{ height:35, width: 150, borderColor:'blue'}}
          //onValueChange={(itemValue) => setAccesorio(itemValue)}
          onValueChange={(itemValue) => setAccesorio(itemValue)}
        >
          <Picker.Item label="Mouse" value="mouse" />
          <Picker.Item label="Teclado" value="teclado" />
          <Picker.Item label="SSD" value="ssd" />
          <Picker.Item label="Monitor 15 p" value="monitor" />
        </Picker>
      </View>
      <View>
        <Text>El accesorio seleccionado es: {accesorio}</Text>
      </View>

      {/* Operador ternario */}
      <View>
        <Text>Premio: {accesorio=="mouse" ? "ganaste un viaje": ""}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mImages: {
    width: 150, height: 150, resizeMode: 'stretch', borderRadius: 20, borderColor: 'red', borderWidth: 2, marginLeft: 20
  },
});
