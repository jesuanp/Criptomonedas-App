import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
} from 'react-native';
import { Link } from 'react-router-native';
import CoinItem from './CoinItem';
import VentanaModal from './VentanaModal';


const Home = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [statusModal, setStatusModal] = useState(false);
    const [coin, setCoin] = useState({});

    const searchCripto = async () => {
        let res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1");
        const data = await res.json();
        setCoins(data);
    }

    useEffect(() => {
        searchCripto();
    }, []);

    const onChangeInput = (text) => {
        setSearch(text);
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Link
                    to='/'
                    style={styles.navLink}
                >
                    <Text style={styles.text}>Back</Text>
                </Link>

                <Text style={styles.textUp}>CryptoMarket</Text>

                <TextInput
                    style={styles.searchInput}
                    placeholder='Search a coin'
                    placeholderTextColor={'#858585'}
                    onChangeText={text => onChangeInput(text.toLowerCase())}
                />
            </View>

            <FlatList
                style={styles.list}
                data={coins.filter(coin => coin.name.toLowerCase().includes(search) || coin.symbol.includes(search))}
                renderItem={({item}) => {
                    return <CoinItem coin={item} setStatusModal={setStatusModal} setCoin={setCoin} />
                }}
                showsVerticalScrollIndicator={false}
                refreshing={refresh}
                onRefresh={ async () => {
                    setRefresh(true);
                    await searchCripto();
                    setRefresh(false);
                }}
            />

            <VentanaModal statusModal={statusModal} setStatusModal={setStatusModal} coin={coin}  />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
    },
    textUp: {
        color: '#fff',
        fontSize: 20,
        margin: 10
    },
    list: {
        width: '90%',
        marginTop: 10
    },
    searchInput: {
        color: '#fff',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        width: '40%',
    },
    header: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between'
    },
    navLink: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    text: {
        color: '#fff'
    },
});

export default Home;
