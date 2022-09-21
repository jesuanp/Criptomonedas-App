import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';
import fondo from '../image/fondo.jpg';

const LandingPage = () => {

    return (
        
            <ImageBackground
            style={styles.image}
            resizeMode='cover'
            source={fondo}
            
            >
                <View style={styles.container}>
                
                    <Text style={styles.p}>Bienvenido a la app donde puedes ver los precios de las criptomonedas</Text>

                    <Link
                        to='/home'
                        underlayColor='#fff'
                        style={styles.button}
                    >
                        <Text style={styles.text}>Entrar</Text>
                    </Link>
                
                </View>

            </ImageBackground> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    p: {
        textAlign: 'center',
        color: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    text: {
        color: '#fff',
    },
    button: {
        color: '#fff',
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    image: {
        flex: 1,
        justifyContent: "center",
        
    }
});

export default LandingPage;
