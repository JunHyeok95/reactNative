import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {Platform, Alert, FlatList} from "react-native";
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';

import IconButton from '~/Components/IconButton';
import MarkerList from '~/Screens/MapMarker/MarkerList';

const Footer = Styled.View`
  height: 10%;
  position: absolute;
  bottom: 8px;
  left: 16px;
  right: 16px;
  border: 1px;
`;

interface IGeolocation {
  latitude: number;
  longitude: number;
}

type TypeDrawerProp = DrawerNavigationProp<DrawNaviParamList, 'MainTabNavi'>;
interface DrawerProp {
  navigation: TypeDrawerProp;
}



const MapMarker = ({navigation}: DrawerProp) => {
  const [markerList, setMarkerList] = useState<Array<String>>(["1","2","3","4","5","6","7","8"]);
  const [location, setLocation] = useState<IGeolocation>({
    latitude: 35.896311,
    longitude: 128.622051,
  });
  const [locations, setLocations] = useState<Array<IGeolocation>>([]);

  const saveLocations = require('./saveLocations.json');
  // console.log('---------------------------------------');
  // const [coords, ...list] = saveLocations;
  // console.log(coords);


  useEffect(() => {
    console.log("--- --- MapMarker Mount");
    let arr = [];
    for(let i=0; i<saveLocations.length; i++){
      let coords = saveLocations[i].coords;
      arr.push(coords);
      console.log(arr);
    }
    console.log(arr);
    setLocations(arr);
    console.log("locations");
    console.log(locations);

    return () => {

    }
  },[]); 

  return (
    <>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        loadingEnabled={true}
        showsUserLocation={true}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      >
        <Polyline
          coordinates={locations}
          strokeWidth={3}
          strokeColor="#00f" 
        />
      </MapView>
      <IconButton
        style={{position:"absolute", top:60, right:24, width:50, height:50, backgroundColor:"#FFFFFF", borderWidth:3, borderRadius:30, paddingTop:2}}
        icon="menu"
        color="#000000"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Footer>
        <MarkerList markerList={markerList} />
      </Footer>
    </>
  );
};

export default MapMarker;