import React , { useEffect, useState } from "react";
import { View, Text, Image,  TouchableOpacity , FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from "./styles";
import api from '../../service/api'

import Logo from "../../assets/logo.png";

export default function List() {
  const [incidents , setIncidents] = useState([]);
  const [total , setToltal] = useState(0);
  const [ page , setPage] = useState(1);
  const [ loading , setLoading ] = useState(false)


  const navigation = useNavigation()

  function navigationToDetail(incident){
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents() {
    if(loading){
      return;
    }
    if(total > 0 && incidents.length === total){
      return 
    }
    setLoading(true);

    const response = await api.get('incidents', { params : { page}});
    setIncidents([...incidents , ...response.data])
    setToltal(response.headers['x-total-count']);
    setPage(page + 1)
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  },[])

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={Logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> {total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        showsVerticalScrollIndicator={false}
        keyExtractor={incident => String(incident.id)}
        style={styles.incidentsList}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item:incident  }) => (
          <View style={styles.incidents}>
            <Text style={styles.incidentProperty}>Ong</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            
            <Text style={styles.incidentProperty}>Caso</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{style: 'currency' , currency : 'BRL'}).format(incident.value)}</Text>

            <TouchableOpacity style={styles.deatilButton} onPress={()=> navigationToDetail(incident)}>
              <Text style={styles.detailButtonText}>Ver mais Detalhe</Text>
              <Feather name="arrow-right" size={16} color="#e02041"/>
            </TouchableOpacity>
        </View>
        )}
      />
    </View>
  );
}
