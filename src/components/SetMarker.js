import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import MapboxGL from "@react-native-mapbox-gl/maps"

const SetMarker = () => {
    MapboxGL.setAccessToken("pk.eyJ1IjoiZGVyb3NzeSIsImEiOiJjazFiaDVobnIybjc4M2twazl3Y2Z6MXc3In0.knu_URust77rKiyCmRia8Q")
    const coordinates = [
        [-73.98330688476561, 40.76975180901395],
        [-73.96682739257812, 40.761560925502806],
        [-74.00751113891602, 40.746346606483826],
        [-73.95343780517578, 40.7849607714286],
        [-73.99017333984375, 40.71135347314246],
        [-73.98880004882812, 40.758960433915284],
        [-73.96064758300781, 40.718379593199494],
        [-73.95172119140624, 40.82731951134558],
        [-73.9829635620117, 40.769101775774935],
        [-73.9822769165039, 40.76273111352534],
        [-73.98571014404297, 40.748947591479705]
    ]

    const renderMarker = () => {
        const items = []
        for (let i=0; i<coordinates.length; i++) {
            const title = `Longitude: ${coordinates[i][0]} Latitude: ${coordinates[i][1]}`
            const id = `pointAnnotation${i}`

            items.push(
                <MapboxGL.PointAnnotation
                    key={id}
                    id={id}
                    coordinate={coordinates[i]}
                    tittle={title}
                >
                    <MapboxGL.Callout title={id}/>
                </MapboxGL.PointAnnotation>
            )
        }
        return items
    }

    return(
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map}>
                    <MapboxGL.Camera
                        zoomLevel={14}
                        centerCoordinate={coordinates[0]}
                    />
                    {renderMarker()}
                </MapboxGL.MapView>
            </View>
        </View>
    )
}

export default SetMarker

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
    marker: {
        flex: 1,
        resizeMode: 'contain',
        width: 25,
        height: 25
    }
});
