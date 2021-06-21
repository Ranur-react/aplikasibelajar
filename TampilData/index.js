import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { API_mahasiswa } from '../API/tambah';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nobp: '1720001',
            nama: 'Rahmat Nur',
            jurusan: 'SK',
            alamat: 'Pauah Katapiang',
            hp: '083182647716',
        }
        console.log("this.state.data")
        console.log(this.state.data)
    }

    render() {
        const TanpilList = (e) => {
            return (
                <View style={styles.dataCrad} >
                    <Text>1. Nama : {e.data.nama} ({e.data.nobp}) - Jurusan {e.data.jurusan} </Text>
                    <Text>    Alamat : {e.data.alamat}</Text>
                    <View style={styles.buttonGroub}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.evenUpdate(e.data)} activeOpacity={0.6}>
                            <Text >Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => hapus(e.data.nobp)} activeOpacity={0.6}>
                            <Text >Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        if (this.props.props == undefined) {
            return (
                <View style={styles.container}>
                    <View style={styles.layout}>
                        <Text style={styles.title}>No Connections or value at databases . .!</Text>
                    </View>
                </View>
            )

        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.layout}>
                        <View style={styles.fullLayout}>
                            <Text style={styles.title}>Data Mahasiswa</Text>
                        </View>
                        {
                            <View >
                                {
                                    this.props.props.map((value, index) => {
                                        // 
                                        return <TanpilList data={value} key={index} />;
                                    })
                                }
                            </View>
                        }
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    layout: {
        // flex:1,
        backgroundColor: 'rgba(50,50,50,0.1)',
        borderRadius: 20,
        padding: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    halfLayout: {
        marginBottom: 10,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    fullLayout: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginBottom: 20,
        backgroundColor: 'white',

    },
    title: {
        fontSize: 30,
        letterSpacing: 2,
    },
    lable: {
        fontSize: 24,
        letterSpacing: 1,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        color: 'black',
        width: '100%',
        height: 30,
        fontSize: 12,
        borderRadius: 20,

    },
    buttonGroub: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#9cc081',
        height: 30,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    deleteButton: {
        backgroundColor: '#ff6c2c',
        height: 30,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    dataCrad: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        borderRadius: 50,
        width: '100%',
        paddingLeft: 20,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },


});