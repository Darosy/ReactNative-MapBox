/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import MapBox from './src/components/MapBox'
import GetLatLong from './src/components/getLatLong'
import SetMarker from './src/components/SetMarker'

export default class App extends React.Component {
    // componentDidMount() {
    //     MapboxGL.setTelemetryEnabled(false);
    // }
    render() {
        return (
            <SetMarker/>
        );
    }
};
