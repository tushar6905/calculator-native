import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const [display, setDisplay] = useState("")
  const calculateValue=()=>{
    if(display.length>0){
      let d = eval(display);
      setDisplay(d.toString());
    }
  }
  const removeOne=()=>{
    let newDisplay=display.slice(0,-1);
    setDisplay(newDisplay)
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={[styles.heading,{marginTop:10}]}>Made by Tushar with ❤️ </Text>
      <TextInput value={display} style={styles.display}/>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={removeOne} style={[styles.btn,{width:'98%',backgroundColor:'pink'}]}>
          <Text style={styles.btnText}><FontAwesome5 name="backspace" size={24} color="black" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={()=>{setDisplay(display+"7")}} style={styles.btn}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"8")}} style={styles.btn}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"9")}} style={styles.btn}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"+")}} style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={()=>{setDisplay(display+"4")}} style={styles.btn}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"5")}} style={styles.btn}>
          <Text  style={styles.btnText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"6")}} style={styles.btn}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"-")}} style={styles.btn}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={()=>{setDisplay(display+"1")}} style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"2")}} style={styles.btn}>
          <Text  style={styles.btnText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"3")}} style={styles.btn}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"*")}} style={styles.btn}>
          <Text style={styles.btnText}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={()=>{setDisplay("")}} style={styles.btn}>
          <Text style={styles.btnText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"0")}} style={styles.btn}>
          <Text  style={styles.btnText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+".")}} style={styles.btn}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplay(display+"/")}} style={styles.btn}>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={calculateValue} style={[styles.btn,{width:'98%',backgroundColor:'pink'}]}>
          <Text style={[styles.btnText,{fontSize:60}]}>=</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flex:1,
    padding:10,
    backgroundColor:'#eee',
  },
  display:{
    marginTop:50,
    width:'98%',
    backgroundColor:'white',
    margin:5,
    height:100,
    borderRadius:10,
    textAlign:'right',
    fontSize:28,
    padding:10,
    fontWeight:'bold'
  },
  btn:{
    height:90,
    width:90,
    backgroundColor:'white',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  btnWrapper:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  btnText:{
    fontSize:18,
  },
  heading:{
    fontSize:18,
  fontWeight:'bold',
  textAlign:'center',
  padding:10
  },
});

