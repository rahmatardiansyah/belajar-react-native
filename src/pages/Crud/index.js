import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import Axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const data = [
    { label: 'Makanan', value: 'Makanan' },
    { label: 'Minuman', value: 'Minuman' },
    { label: 'Bahan Pokok', value: 'Bahan Pokok' },
];

const Item = ({namaBarang, category, stock, onPress, onDelete}) => {
    return (
            <View style={{flexDirection: "row", borderBottomWidth: 1, paddingVertical: 3}}>
                <Text style={{width: 145}}>{namaBarang}</Text>
                <Text style={{width: 112}}>{category}</Text>
                <Text style={{width: 83}}>{stock}</Text>                    
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity onPress={onDelete}>
                        <FontAwesome style={styles.icon} color="black" name="trash" size={15} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress}>
                        <FontAwesome style={styles.icon} color="black" name="redo" size={15} />
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const Crud = () => {
    const [namaBarang, setNamaBarang] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState();
    const [button, setButton] = useState("Simpan");
    const [banyakBarang, setBanyakBarang] = useState([]);
    const [selectedBarang, setSelectedBarang] = useState({});

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        Axios.get('http://localhost:3004/barang')
        .then(res => {
            console.log('res  get data: ', res);
            setBanyakBarang(res.data);
        })
    }

    const selectItem = (item) => {
        console.log('selected item: ', item);
        setSelectedBarang(item);
        setNamaBarang(item.namaBarang);
        setCategory(item.category);
        setStock(item.stock);
        setButton("Update");
    }

    const deleteItem = (item) => {
        console.log(item);
        Axios.delete(`http://localhost:3004/barang/${item.id}`)
        .then(res => {
            console.log('res delete: ', res);
            getData();
        })
    }

    const submit = () => {
        const data = {
            namaBarang,
            category,
            stock,
        }

        if(button === "Simpan"){
            Axios.post('http://localhost:3004/barang', data)
            .then(res => {
                console.log('res data: ', res);
                setNamaBarang("");
                setCategory("");
                setStock(0);
                getData();
            })
        }else if(button === "Update"){
            Axios.put(`http://localhost:3004/barang/${selectedBarang.id}`, data)
            .then(res => {
                console.log('res update: ', res);
                getData();
                setNamaBarang("");
                setCategory("");
                setStock(0);
                setButton("Simpan");
            })
        }
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Data Barang</Text>
            <TextInput placeholder="Nama Barang" style={styles.input} value={namaBarang} onChangeText={(value) => setNamaBarang(value)} />
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                value={category}
                onChange={item => {
                setCategory(item.value);
                }}
                renderLeftIcon={() => (
                <FontAwesome style={styles.icon} color="grey" name="th-list" size={18} />
                )}
            />
            <TextInput 
                placeholder="Jumlah Barang" 
                style={styles.input} 
                keyboardType='numeric'
                value={stock} 
                onChangeText={(value) => setStock(value)} 
            />
            <Button title={button} onPress={submit} />
            <View style={{justifyContent: "center"}}>
                <View style={styles.viewContainer}>
                    <Text style={styles.viewItem}>Nama Barang</Text>
                    <Text style={styles.viewItem}>Category</Text>
                    <Text style={styles.viewItem}>Stok</Text>
                    <Text style={styles.viewItem}>Aksi</Text>             
                </View>
                <View style={styles.itemContainer}>
                    {banyakBarang.map(barang => {
                        return <Item 
                            key={barang.id} 
                            namaBarang={barang.namaBarang} 
                            category={barang.category} 
                            stock={barang.stock}
                            onPress={() => selectItem(barang)}
                            onDelete={() => Alert.alert(
                                'Peringatan',
                                'Anda yakin akan menghapus Barang ini?',
                                [
                                    {
                                        text: 'Tidak', onPress: () => console.log('button tidak')
                                    },
                                    {
                                        text: 'Ya', onPress: () => deleteItem(barang)
                                    }
                            ])}
                        />
                    })}
                </View>
            </View>
        </View>
    )
}

export default Crud;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 18,
        marginTop: 10
    },
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    viewContainer :{
        display: "flex",
        marginTop:30,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    viewItem:{
        alignItems: "center",
        fontSize: 15,
        fontWeight: 'bold'
    },
    itemContainer:{
        
    },

})