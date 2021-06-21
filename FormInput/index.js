import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import { API_mahasiswa, API_mahasiswa_update, API_mahasiswa_tampil,API_mahasiswa_delete} from '../API';
import TampilData from './../TampilData';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: true,
            data: [],
            nobp: '0',
            nama: '',
            jurusan: '',
            alamat: '',
            hp: '',
        }
        const GET = async () => {
            try {
                console.log("Cetak Respond Data Tampil----->")
                var respond = await API_mahasiswa_tampil()
                this.setState({ data: respond.data })
                console.log(this.state.data);
            } catch (error) {
                console.log(error)
            }
        }
        GET();
    }

    render() {
        const GET = async () => {
            try {
                console.log("Cetak Respond Data Tampil----->")
                var respond = await API_mahasiswa_tampil()
                this.setState({ data: respond.data })
                console.log(this.state.data);
            } catch (error) {
                console.log(error)
            }
        }
        const POST = async () => {
            try {
                console.log("Cetak Respond----->")
                var respond = await API_mahasiswa(this.state)
                console.log(respond);
                console.log(respond.status);
                if (!respond.status) {
                    alert(respond.pesan)
                }else{
                    nobpChange()
                }
                GET();
            } catch (error) {
                console.log(error)
            }
        }
        const POSTUPDATE = async () => {
            try {
                console.log("Cetak Respond Update----->")
                var respond = await API_mahasiswa_update(this.state)
                console.log(respond);
                console.log(respond.status);
                if (!respond.status) {
                    alert(respond.pesan)
                }else{
                    nobpChange()
                }
                GET();
            } catch (error) {
                console.log(error)
            }
        }
        const POSTDELETE = async (e) => {
            try {
                console.log("Cetak Respond Update----->")
                var respond = await API_mahasiswa_delete(e)
                console.log(respond);
                console.log(respond.status);
                if (!respond.status) {
                    alert(respond.pesan)
                }else{
                    nobpChange()
                }
                GET();
            } catch (error) {
                console.log(error)
            }
        }
        const simpan = () => {
            POST()
        }
        const updateSimpan = () => {
            POSTUPDATE()

        }
        const update = (e) => {
            console.log("Hasil dari Reaksi Klik")
            this.setState({
                mode: false,
                nobp: e.nobp,
                nama: e.nama,
                jurusan: e.jurusan,
                alamat: e.alamat,
                hp: e.hp,
            })
        }
        const hapus = (e) => {
            POSTDELETE(e)
        }
        const submit = () => {
            if (this.state.mode) {
                simpan();
            }
            else {
                updateSimpan()
            }
        }
        const nobpChange = () => {
            this.setState({ nobp: '' })
            this.setState({ nama: '' })
            this.setState({ alamat: '' })
            this.setState({ jurusan: '' })
            this.setState({ hp: '' })
            this.setState({ mode: true })
        }
        return (
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.layout}>
                        <View style={styles.fullLayout}>
                            <Text style={styles.title}>{!this.state.mode ? 'Edit' : 'Tambah'} Mahasiswa</Text>
                        </View>
                        <View style={styles.halfLayout}>
                            <Text style={styles.lable} >NoBp</Text>
                        </View>
                        <View style={styles.halfLayout}>
                            <Text style={styles.lable}>: </Text>
                            <TextInput style={styles.input} onChangeText={(e) => this.setState({ nobp: e })} value={this.state.nobp} onFocus={() => nobpChange()} />
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
                            <TouchableOpacity style={styles.button}  onPress={() => submit()} activeOpacity={0.6}>
                                <Text style={styles.lable}>{!this.state.mode ? 'Edit' : 'Tambah'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TampilData props={this.state.data} evenDelete={(e) => hapus(e)} evenUpdate={(e) => update(e)} />
                </View>
            </ScrollView>
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
        height: 400,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
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
    button: {
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#9cc081',
    }
});