import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styeles from '../style/page2style'

const Page2 = ({ navigation }) => {



    return (
        <SafeAreaView style={styeles.viewAwal}>
            <View style={styeles.margin}>
                <View style={styeles.colorView}>
                    <Text style={styeles.textstyle}>Merak -----{'>'} Bakauheni</Text>
                    <Text style={styeles.textstyle}>Jadwal Masuk Pelabuhan</Text>
                    <Text style={styeles.textstyle}>Minggu, 27 Maret 2022</Text>
                    <Text style={styeles.textstyle}>15:00</Text>
                    <Text style={styeles.textstyle}></Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Page2;

