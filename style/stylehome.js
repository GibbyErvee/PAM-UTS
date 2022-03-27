import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bacgroundSaveArea: {
        backgroundColor: 'green',
    },
    centerView: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '100%',
        height: 600,
        backgroundColor: '#355c7d',

    },
    boxmain: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        width: '70%',
        //borderRadius: 10,
    },
    margins: {
        margin: 20,
        //alignItems:'flex-start',
        //backgroundColor: 'red',
    },
    textSubtittle: {
        fontFamily: "Cochin",
        fontSize: 16,
        fontWeight: "bold",
    },
    textInput: {
        height: 40,
        width: 250,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'powderblue',
        padding: 10,
        borderRadius: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'powderblue'
    },
    marginV: {
        marginVertical: 30,
    },
    textTitle: {
        fontFamily: "Cochin",
        fontSize: 32,
        fontWeight: "bold",
        color: 'white',
    },
    copyright: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 60,
    },

});

export default styles;