import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapboxGL from "@react-native-mapbox-gl/maps"

const GetLatLong = () => {
    MapboxGL.setAccessToken("pk.eyJ1IjoiZGVyb3NzeSIsImEiOiJjazFiaDVobnIybjc4M2twazl3Y2Z6MXc3In0.knu_URust77rKiyCmRia8Q")
    let [latitude, setLatitude] = useState("")
    let [longitude, setLongitude] = useState("")

    const onPress = (event) => {
        const {geometry} = event
        setLongitude(geometry.coordinates[0])
        setLatitude(geometry.coordinates[1])
    }

    const renderBuble = () => {
        return(
            <View style={styles.bubleContainer}>
                <Text>Lat:{latitude}</Text>
                <Text>Long:{longitude}</Text>
            </View>
        )
    }

    return(
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map} onPress={(event)=>onPress(event)}>
                    <MapboxGL.Camera
                        zoomLevel={14}
                        centerCoordinate={[106.802591,-6.218702]}
                    />
                </MapboxGL.MapView>
            </View>
            {renderBuble()}
        </View>
    )
}

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
    bubleContainer: {
        borderRadius: 30,
        position: 'absolute',
        bottom: 16,
        left: 48,
        right: 48,
        paddingVertical: 16,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})

export default GetLatLong
