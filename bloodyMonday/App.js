import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CircleButton from 'react-native-circle-button';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import properties from "./properties";

import { IndicatorViewPager, PagerDotIndicator} from '@shankarmorwal/rn-viewpager';





export default function App() {
  return (

    <View style={styles.container} >
    <IndicatorViewPager
          style={styles.pagerStyle}
          indicator={
            <PagerDotIndicator pageCount={3} />
          }>
     

     <View style={{
          backgroundColor: "#E6BEAE",
          flex:0.5,
          flexDirection: "column",
          alignItems:"flex-end",
          justifyContent:"flex-end",
        }}key="0">
        <Icon 
            name="plus-circle"
            size={60}
            color="#506fa9"
            style={{width:60, marginRight:90, marginBottom: 90}}
            onPress={() =>console.log("dieser auch")}
            />
    </View>





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


    <View style={{
          backgroundColor: "#E6BEAE",
          flex:0.5,
          flexDirection: "row",
          alignItems:"flex-end",
          justifyContent:"flex-start",
        }}>

        <Icon 
            name="plus-circle"
            size={60}
            color="#506fa9"
            style={{width:60, marginRight:70, marginBottom: 70}}
            onPress={() =>console.log("dieser auch")}
            />

        <Icon 
            name="bullseye-arrow"
            size={60}
            color="#506fa9"
            style={{width:60, marginRight:100, marginBottom: 90}}
            onPress={() =>console.log("dieser auch")}
            />
    </View>


    
</IndicatorViewPager>
      <StatusBar style="auto" />
    </View>
 
 //</ViewPager>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6BEAE",
   
   
  },

viewPager:{
  flex:1,
},
pagerStyle:{
  flex:1,
}
});
