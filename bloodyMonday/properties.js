import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CircleButton from 'react-native-circle-button';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";




export default function App() {
  return (


  
 
    <View style={styles.container} key="2">
      <text>"Das hier werden die Einstellungen</text>
    </View>




  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E6BEAE",
     
     
    },
  
    
  viewPager:{
    flex:1,
  }
});



<View style={{
  flex:0.5,
  flexDirection: "row",
  marginTop: 60,
  backgroundColor: "#E6BEAE",
  paddingHorizontal: 20,
}}>
<Button title= 'meinKnopf' style={styles.Knopf2}>Submit</Button>
      <Button
        name="Button1"
        title="drück mich"
        style={{width:20}}
        color="#506fa9"
        onPress={() => console.log("wurde gedrückt")}
      />
    <View style={{
  backgroundColor: "#E6BEAE",
  flex:0.5,
  flexDirection: "column",
  alignItems:"flex-end",
  justifyContent:"flex-end",
}}>

<Icon 
    name="plus-circle"
    size={60}
    color="#506fa9"
    style={{width:60, marginRight:90, marginBottom: 90}}
    onPress={() =>console.log("dieser auch")}
    />
</View>
</View>
