import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'

const MapBox = () => {
    MapboxGL.setAccessToken("pk.eyJ1IjoiZGVyb3NzeSIsImEiOiJjazFiaDVobnIybjc4M2twazl3Y2Z6MXc3In0.knu_URust77rKiyCmRia8Q")
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map}>
                    <MapboxGL.Camera
                        zoomLevel={14}
                        centerCoordinate={[106.802591,-6.218702]}
                    />
                </MapboxGL.MapView>
            </View>
        </View>
    )
}

export default MapBox

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: "tomato"
    },
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    map: {
        flex: 1
    },
});
