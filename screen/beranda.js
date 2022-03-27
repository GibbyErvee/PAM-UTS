import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styles from '../style/stylehome';


const Home = ({ navigation }) => {

    const [textAwal, onChangeAwal] = React.useState('');
    const [textTujuan, onChangeTujuan] = React.useState('');
    const [textWaktu, onChangeWaktu] = React.useState('');
    const [textJam, onChangeJam] = React.useState('');


    return (
        <SafeAreaView >
            <ScrollView>

                <View style={styles.centerView}>

                    <View style={styles.marginV}>
                        <Text style={styles.textTitle}>Berlayarzzz</Text>
                    </View>
                    <View style={styles.boxmain}>
                        <View style={styles.margins}>
                            <Text style={styles.textSubtittle}>Pelabuhan Awal</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => onChangeAwal(text)}
                                value={textAwal}
                                placeholder="Tulis..." />
                            <Text style={styles.textSubtittle}>Pelabuhan Tujuan</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => onChangeTujuan(text)}
                                value={textTujuan}
                                placeholder="Tulis..." />
                            <Text style={styles.textSubtittle}>Waktu Keberangkatan</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => onChangeWaktu(text)}
                                value={textWaktu}
                                placeholder="YYYY-MM-DD" />
                            <Text style={styles.textSubtittle}>Jam</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => onChangeJam(text)}
                                value={textJam}
                                placeholder="Tulis..." />
                            <Button
                                title="Pesan"
                                onPress={() => navigation.navigate('Pesanan Saya')}

                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

