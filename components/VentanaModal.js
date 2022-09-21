import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Image,
    TouchableOpacity
} from 'react-native';

const VentanaModal = ({statusModal, setStatusModal, coin}) => {

    return (
        <Modal
            animationType = 'fade'
            visible={statusModal}
            transparent={true}
        >

            <View style={styles.modalView}>

                <View style={styles.modalBody}>

                    <View style={styles.viewImageCoin}>
                        <Text>{coin.name}</Text>
                        <Image
                            style={styles.image}
                            source={{uri: coin.image}}
                        />
                        <Text style={styles.textSymbol}>{coin.symbol}</Text>
                    </View>

                    <View style={styles.viewPrice}>
                        <Text>${coin.current_price}</Text>
                        <Text style={coin.price_change_percentage_24h < 0 ? styles.percentageRed : styles.percentageGreen}>{coin.price_change_percentage_24h}%</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => setStatusModal(false)}
                        style={styles.touchableClose}
                    >
                        <Image
                            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1024px-OOjs_UI_icon_close.svg.png'}}
                            style={styles.imageClose}
                        />
                    </TouchableOpacity>

                </View>

            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(34,34,34,0.75);',
    },
    modalBody: {
        height: 270,
        width: 200,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    touchableClose: {
        position: 'absolute',
        top: 6,
        right: 6,
    },
    imageClose: {
        height: 30,
        width: 30,
    },
    image: {
        height: 60,
        width: 60,
        marginVertical: 5,
    },
    viewImageCoin: {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewPrice: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSymbol: {
        color: '#444444',
        paddingLeft: 5,
        textTransform: "uppercase"
    },
    percentageGreen: {
        color: '#357C3C'
    },
    percentageRed: {
        color: '#B33030'
    },
});

export default VentanaModal;
