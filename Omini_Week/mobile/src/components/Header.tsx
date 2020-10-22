import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title:string;
  showCancel?:boolean;
}

export default function Header({title , showCancel= true}: HeaderProps) {

  const navigation = useNavigation();

  function handleGoBackToAppHomePage(){
    navigation.navigate('OrphanageMap');
  }


  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6"/>
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showCancel ? (<BorderlessButton onPress={handleGoBackToAppHomePage}>
        <Feather name="x" size={24} color="#ff669d"/>
      </BorderlessButton>) : (
        <View/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9fafc",
    padding:24,
    borderColor:"#dde3f0",
    paddingTop:44,

    flexDirection:'row'
  
  },
  title: {
    fontSize: 16,
    color: "#8fa7b3",
    fontFamily:'Nunito_600SemiBold'
  },
});
