import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { API_mahasiswa } from './../API/tambah';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nobp: '0',
            nama: '',
            jurusan: '',
            alamat: '',
            hp: '',
        }
    }

    render() {
       const POST =async()=>{
           try {
            console.log("Cetak Respond----->")
            var respond=await API_mahasiswa(this.state)
            console.log(respond);
            console.log(respond.status);
            if(respond.status){
                alert(respond.pesan)
            }else{
                alert(respond.pesan)
            }
           } catch (error) {
               console.log(error)
           }
       }
        const simpan = () => {
            POST()
        }
        return (
            <View style={styles.container}>
                <View style={styles.layout}>
                    <View style={styles.fullLayout}>
                        <Text style={styles.title}>Inpu Mahasiswa</Text>
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable} >NoBp</Text>
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable}>: </Text>
                        <TextInput style={styles.input} onChangeText={(e) => this.setState({ nobp: e })} value={this.state.nobp} />
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable}>Nama</Text>
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable}>: </Text>
                        <TextInput style={styles.input} onChangeText={(e) => this.setState({ nama: e })} value={this.state.nama} />
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable}>Jurusan</Text>
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable}>: </Text>
                        <TextInput style={styles.input} onChangeText={(e) => this.setState({ jurusan: e })} value={this.state.jurusan} />
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable}>Alamat</Text>
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable}>: </Text>
                        <TextInput style={styles.input} onChangeText={(e) => this.setState({ alamat: e })} value={this.state.alamat} />
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable}>Nomor Handphone</Text>
                    </View>
                    <View style={styles.halfLayout}>
                        <Text style={styles.lable}>: </Text>
                        <TextInput style={styles.input} onChangeText={(e) => this.setState({ hp: e })} value={this.state.hp} />
                    </View>
                    <View style={styles.halfLayout}>
                        <TouchableOpacity style={styles.button} onPress={() => simpan()} activeOpacity={0.6}>
                            <Text style={styles.lable}>SIMPAN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
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
        height: 500,
        borderRadius: 20,
        padding: 20,
        width: '80%',
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
    button: {
        backgroundColor: 'grey',
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'green',
    }
});