import React from "react";
import { View ,Text ,Image , TouchableOpacity  } from "react-native";
import { Feather } from '@expo/vector-icons'
import { useNavigation , useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import {Linking} from 'react-native'

import styles from "./styles";
import Logo from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident
  const message = `Ola ${incident.name} , estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR',{style: 'currency' , currency : 'BRL'}).format(incident.value)}`

  function navigationBack(){

    navigation.navigate('List')

  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Heroi do Caso : ${incident.title}`,
      recipients: [incident.email],
      body:message
    })

  }
  function senWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}=${message}`)


  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
       
        <TouchableOpacity onPress={navigationBack}>
        <Feather name="arrow-left" size={16} color="#e02041"/>
        </TouchableOpacity>
      </View>
      <View style={styles.incidents}>

            <Text style={[styles.incidentProperty , { marginTop:0}]}>Ong</Text>
            <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
            
            <Text style={styles.incidentProperty}>Caso</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{style: 'currency' , currency : 'BRL'}).format(incident.value)}</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o Dia</Text>
        <Text style={styles.heroTitle}>Seja o Heroi desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em Contato</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={senWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-Mail</Text>
          </TouchableOpacity>

        </View>
      </View>


    </View>
  );
}
