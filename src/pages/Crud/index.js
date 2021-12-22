import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import Axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    { label: 'Makanan', value: 'Makanan' },
    { label: 'Minuman', value: 'Minuman' },
    { label: 'Bahan Pokok', value: 'Bahan Pokok' },
];

const Item = ({namaBarang, category, stock, onPress, onDelete}) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={onPress}>
            </TouchableOpacity>
            <View style={styles.desc}>
                <Text style={styles.descNamaBarang}>{namaBarang}</Text>
                <Text style={styles.descCategory}>{category}</Text>
                <Text style={styles.descStock}>{stock}</Text>
            </View>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const Crud = () => {
    const [namaBarang, setNamaBarang] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [button, setButton] = useState("Simpan");
    const [banyakBarang, setBanyakBarang] = useState([]);

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
                setStock(0);
            })
        }else if(button === "Update"){
            Axios.put(`url`, data)
            .then(res => {
                console.log('res update: ', res);
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
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
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
            {banyakBarang.map(barang => {
                return <Item 
                    key={barang.id} 
                    namaBarang={barang.namaBarang} 
                    category={barang.category} 
                    stock={barang.stock}
                />
            })}
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
})