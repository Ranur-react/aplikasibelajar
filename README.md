## Tutorial Form Input React-Native to MYSQL dengan PHP Native


#### A. Mempersiapkan Database 
1. Buat Database dan Table seperti berikut
    * Create database *db_mahasiswa* pada mysql




    ![alt text](https://lh3.googleusercontent.com/_NPpj9VayHKW9c1oBBEomr6wON0pZIfgKbvnMSTnVIAf7vnhp2ItzdzTMh2b85Ifhmb-O5wp0RCFLXoyPcSH-2RJJccE5xLgXl2GDTwSWIXkuVD7k7qMtq97F3emC2SixcKLSkA1)

    * Create table *tb_mahassiwa* pada database

    ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_1.png)
    
    ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_2.png)

#### B. Mempersiapkan Back-End / API SERVER

2. Buatlah Folder project baru pada *xamp/htdoc/APLIKASIBELAJAR/phpapi* sebagai *PHP API Server* agar aplikasi dapat terhubung ke database 

    * Buat file koneksi.php  dengan isi script seperti dibawah pada folder Project sebagai koneksi ke database mysql  pada *php server*
           ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_3.png)

    * Buat file *index.php* dengan isi script seperti dibawah pada folder project sebagai interface **menampilkan** data dari database
          ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_4.png)

    * Buat file *insert.php* dengan isi script seperti dibawah pada folder project sebagai interface **menambah** data ke  database
          ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_5.png)

    * Buat file *update.php* dengan isi script seperti dibawah pada folder project sebagai interface **menambah** data ke  database
          ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_6.png)
    


    * Buat file *delete.php* dengan isi script seperti dibawah pada folder project sebagai interface **menghapus** data ke  database
          ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_7.png)



#### C. Mempersiapkan Setup React Native 
3. Buat Project Baru pada react-native 
    * Gunakan perintah  berikut untuk membuat Project baru ( *pastikan dalm keadaan terkoneksi ke internet*)

    ```PowerSHELL
        npx react-native init aplikasibelajar
    ```

    * Tunggu proses inisialisasi hingga selesai

    * Setelah proses selesai masuk kedalam  folder project yang baru saja dibuat dengan perintah berikut


    * Sehingga tampilan akan seperti berikut pada terminal

      ![alt text](https://lh5.googleusercontent.com/E1CNvPuPFSczePYWUar4WblRf_Utj_T86_NQQB4MmIBtZbae6DDsJ8Wm6S8SVWWKtFeTaSl5kttUtgo0DjzQWCaV5mOBpptp57wh9viUDCoUHgbGntn-bKhKqU2JZGzW7kDuebho)



    * Setelah berada di dalam folder project, jalankan perintah berikut untuk menajalankan react-native  
        * Test koneksi dengan Mobile Perangkat 


        ```PowerSHELL
            adb devices
        ```

        * Jika devices / emulator tersambung maka akan terdeteksi dengan tampilan berikut

        ![alt text](https://lh6.googleusercontent.com/ecxsFSmOezlswSVfk0FBhCfzs97aG7uB7rqcl0ULiYl34bryYHskdI0DLrSXJdCXHBhIp48fZJCAaB8WuC9m7X5mPQahcq-Ei-cyeEZfCwKvm9O8Sb5eo02F8x5ybNKg5D1G7IRG)


        * Jalankan perintah berikut untuk menjalankan project pada emulator  jika device / emulator sudah dipastikan terdeteksi

        ```PowerSHELL
            npx react-native run-android
        ```

        * Setelah perintah dijalankan tunggu hingga metro server running pada desktop seperti pada gmabar dibawah

         ![alt text](https://lh6.googleusercontent.com/rMJZCBmh54sV7T9vqDOdsgNwq0HdqvvAvi-fBX1k78r7nEzlyLhiXq-2S1mTi1FmZ7VEyR3bBDMlkQueEmHD3Udba5GIU4kDPvNEOCtj)

        * Jika Metro Server sudah jalan , kita sudah pastikan aplikasi berjalan dengan pada perangkat.

#### D. Mempersiapkan Front-End

4. Buatlah Form Input Sederhana pada RN

    * Buka file *app.js* Hapus Semua Script di dalam file tersebut lalu ganti dengan scripts seperti berikut

    ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_8.png)

    * Buat *folder baru* pada project dengan nama *FormInput*  

     ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_9.png)

   * Buat file *index.js* pada foder */FormInput*   project dengan dengan script seperti berikut  
    
    ![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/db_10.png)

* 
 ```javascript

 
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

export default class FormInput extends Component {
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



```


    *  Setelah kodingan ini selesai tampilan pada Emulator akan berubah  seperti berikut

![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/front-1.jpeg)



#### E. Mempersiapkan API pada Front-End

5. Sipkan function-functions  script  Vanilla JS, dengan type funtions *asyncronouse await*  API Client  yang berguna untuk acces ke API Server (back-end) php yang sudah ada sebelumnya 

    * buat folder baru denga nama *API* dan sertakan file *index.js* di dalamnya
    * pada file *API/index.js* kita tuliskan script berikut sebagai kumpuan fuctions yang diperlukan




#### F. Mempersiapkan Tampil Data pada Front-End
6. Selanjutnya rancang design view data yang sudah berhasil di simpan, pada view data ini sudah termasuk perintah untuk Update dan delete

    * buat folder baru denga nama *TampilData* dan sertakan file *index.js* di dalamnya
    * pada file *TampilData/index.js* kita tuliskan script berikut 

    * Sehingga tampilan akan seperti berikut 

![alt text](https://github.com/Ranur-react/aplikasibelajar/blob/form/readme/image/front-2.jpeg)


#### F.Cara menjalankan API pada Front-End

* pastikan ip pada komputer host tempat API Server di letakan,
* pastikan ip tersebut dapat di mengakses API Server
* setelah dapat dipastikan API Server dapat di akses gunakan ip tersebut untuk konfigurasi url Acces pada API Client front-end



























































































Buat State penampung data yang di inputkan
Buat External funtions dengan props parameter untuk proses SEND data kedalam API MYSQL dengan vanilla JS
Panggil External Functions tersebut kedalam event
