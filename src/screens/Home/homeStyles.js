import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image : {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    }
});

export default styles;