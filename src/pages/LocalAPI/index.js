import React, { useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useState } from "react/cjs/react.development";
import Axios from 'axios';

const Item = ({name, email, bidang, onPress, onDelete}) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={onPress}>
                <Image 
                source={{uri: `https://i.pravatar.cc/150?u=${email}`}}
                style={styles.avatar} 
                />
            </TouchableOpacity>
            <View style={styles.desc}>
                <Text style={styles.descName}>{name}</Text>
                <Text style={styles.descEmail}>{email}</Text>
                <Text style={styles.descBidang}>{bidang}</Text>
            </View>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const LocalAPI = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bidang, setBidang] = useState("");
    const [users, setUsers] = useState([]);
    const [button, setButton] = useState("Simpan");
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        getData();
    }, [])

    const submit = () => {
        const data = {
            name,
            email,
            bidang,
        }

        if(button === "Simpan"){
            Axios.post('http://localhost:3004/users', data)
            .then(res => {
                console.log('res: ', res);
                setName("");
                setEmail("");
                setBidang("");
                getData();
            })
        }else if(button === "Update"){
            Axios.put(`http://localhost:3004/users/${selectedUser.id}`, data)
            .then(res => {
                console.log('res update: ', res);
                setName("");
                setEmail("");
                setBidang("");
                getData();
                setButton("Simpan");
            })
        }
    }

    const getData = () => {
        Axios.get('http://localhost:3004/users')
        .then(res => {
            console.log('res  get data: ', res);
            setUsers(res.data);
        })
    }

    const selectItem = (item) => {
        console.log('selected item: ', item);
        setSelectedUser(item);
        setName(item.name);
        setEmail(item.email);
        setBidang(item.bidang);
        setButton("Update");
    }

    const deleteItem = (item) => {
        console.log(item);
        Axios.delete(`http://localhost:3004/users/${item.id}`)
        .then(res => {
            console.log('res delete: ', res);
            getData();
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Local API (JSON SERVER)</Text>
            <Text>Masukkan Anggota</Text>
            <TextInput placeholder="Nama Lengkap" style={styles.input} value={name} onChangeText={(value) => setName(value)} />
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(value) => setEmail(value)} />
            <TextInput placeholder="Bidang" style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)} />
            <Button title={button} onPress={submit} />
            <View style={styles.line} />
            {users.map(users => {
                return <Item 
                    key={users.id} 
                    name={users.name} 
                    email={users.email} 
                    bidang={users.bidan} 
                    onPress={() => selectItem(users)} 
                    onDelete={() => Alert.alert(
                        'Peringatan',
                        'Anda yakin akan menghapus user ini?',
                        [
                            {
                                text: 'Tidak', onPress: () => console.log('button tidak')
                            },
                            {
                                text: 'Ya', onPress: () => deleteItem(users)
                            }
                        ])}
                />
            })}
        </View>
    )
}

export default LocalAPI;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        marginVertical: 20
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 80
    },
    itemContainer: {
        flexDirection: "row",
        marginBottom: 20
    },
    desc: {
        marginLeft: 18,
        flex: 1
    },
    descName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    descEmail: {
        fontSize: 16
    },
    descBidang: {
        fontSize: 12,
        marginTop: 8
    },
    delete: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red"
    }
})