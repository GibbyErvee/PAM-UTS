import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styeles from '../style/page3style'

const Page3 = ({ navigation }) => {



    return (
        <SafeAreaView style={styeles.viewAwal}>
            <View style={styeles.margin}>
                <View style={styeles.colorView}>
                    <Text style={styeles.textstyle}> BELUM ADA PESANAN</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Page3;

