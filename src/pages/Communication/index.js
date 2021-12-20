import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import Product from '../../components/Product'
import Cart from '../../components/Cart'

const Communication = () => {
    const [totalProduct, setTotalProduct] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi komunikasi antar Component</Text>
            <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
            <Cart quantity={totalProduct} />
        </View>
    )
}

export default Communication;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    }
});