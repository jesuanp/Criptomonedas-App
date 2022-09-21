import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CoinItem = ({coin, setStatusModal, setCoin}) => {

    const onPress = () => {
        setCoin({
            image: coin.image,
            name: coin.name,
            symbol: coin.symbol,
            current_price: coin.current_price,
            price_change_percentage_24h: coin.price_change_percentage_24h
        });
        
        setStatusModal(true);
    }

    return (
        <TouchableOpacity
            onPress={() => onPress()}
        >
            <View style={styles.containerText}>
                
                <View style={styles.coinNames}>
                    <Image
                        style={styles.image}
                        source={{uri: coin.image}}
                    />

                    <View style={styles.containerNames}>
                        <Text style={styles.text}>{coin.name}</Text>
                        <Text style={styles.textSymbol}>{coin.symbol}</Text>
                    </View>
                </View>

                <View style={styles.containerPrice}>
                    <Text style={styles.text}>${coin.current_price}</Text>
                    <Text style={coin.price_change_percentage_24h < 0 ? styles.percentageRed : styles.percentageGreen}>{coin.price_change_percentage_24h}%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerText: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    coinNames: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
    image: {
        width: 40,
        height: 40,
    },
    textSymbol: {
        color: '#444444',
        paddingLeft: 5,
        textTransform: "uppercase"
    },
    containerNames: {
        paddingLeft: 5,
    },
    containerPrice: {
        alignItems: "flex-end"
    },
    percentageGreen: {
        color: '#357C3C'
    },
    percentageRed: {
        color: '#B33030'
    },
})

export default CoinItem;
