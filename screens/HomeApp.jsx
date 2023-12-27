import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import Header from '../components/Header';
import Banners from '../components/Banners';
import StartupCredentials from '../components/StartupCredentials';
import Events from '../components/Events';
import BottomAppBar from '../components/BottomAppBar';


export default function HomeApp() {
    return (
        <SafeAreaView style={{ backgroundColor: '#F6F6F6', flex: 1, }}>
                <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banners />
                <StartupCredentials />
                <Events />
                {/* <Divider width={1} /> */}
            </ScrollView>
                <BottomAppBar />
        </SafeAreaView>
    );
}