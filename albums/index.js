// Import a iibrary to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a comonent
const App = () => (
    <View style={{ flex: 1 }}>
        <Header HeaderText={'Albums'} />
        <AlbumList />
    </View>
);
// Render it to the device
AppRegistry.registerComponent('albums', () => App);
