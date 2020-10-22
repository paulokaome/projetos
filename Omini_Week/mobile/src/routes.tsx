import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OrphanageMap from "./pages/OrphanagesMap";
import OrphanageDetails from "./pages/OrphanageDetails";
import SelectMapPosition from "./pages/createOrphanage/SelectMapPosition";
import OrphanageData from "./pages/createOrphanage/OrphanageData";
import Header from "./components/Header";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false , cardStyle: {backgroundColor:'#f2f3f5'} }}>
        <Screen name="OrphanageMap" component={OrphanageMap} />
        <Screen name="OrphanageDetail" component={OrphanageDetails} options={{headerShown:true, header:() => <Header showCancel={false} title="Orfanato"/>}}/>
        <Screen name="SelectMapPosition" component={SelectMapPosition} options={{headerShown:true, header:() => <Header title="Selecione no Mapa"/>}}/>
        <Screen name="OrphanageData" component={OrphanageData} options={{headerShown:true, header:() => <Header title="Informe os Dados"/>}}/>
      </Navigator>
    </NavigationContainer>
  );
}
