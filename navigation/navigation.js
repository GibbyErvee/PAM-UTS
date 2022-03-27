import React, { useState } from 'react';
import { Text, View, Modal, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



//screenMain
import Home from '../screen/beranda';
import Page2 from '../screen/page2';
import Page3 from '../screen/page3';
import Page4 from '../screen/page4';

const Tab = createBottomTabNavigator();

const Navigasi = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <NavigationContainer>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);

                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>GIBRAN BASYAYEF</Text>
                        <Text style={styles.modalText}>119140187</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Tab.Navigator

                screenOptions={{
                    tabBarActiveTintColor: '#206378',
                    headerShown: true,
                    tabBarStyle: { position: 'absolute' },
                    tabBarStyle: { height: 70, backgroundColor: '#FCFEFF', },
                }}

            >

                <Tab.Screen
                    name="Beranda"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Pesanan Saya"
                    component={Page2}
                    options={{
                        tabBarLabel: 'Pesanan Saya',
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="book" color={color} size={size} />
                        ),
                    }}

                />
                <Tab.Screen
                    name="Pembatalan"
                    component={Page3}
                    options={{
                        tabBarLabel: 'Pembatalan',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="cancel" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen listeners={() => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        setModalVisible(true);
                    },


                })}
                    name="Page3"
                    component={Page4}
                    options={{
                        tabBarLabel: 'Lainnya',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "green",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold'
    }
});

export default Navigasi;
