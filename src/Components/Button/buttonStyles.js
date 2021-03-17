import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },

    button: {
        backgroundColor: 'black', 
        height: 50,
        width: '100%',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold', 
        alignSelf:'center', 
        textTransform: 'uppercase', 
    },
});

export default styles; 