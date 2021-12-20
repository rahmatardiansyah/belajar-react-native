import React from "react";
import { View,Text,Image,StyleSheet} from "react-native";
import cart from '../../assets/icons/cart.png';

const Cart = (props) => {
    return (
        <View style={styles.halaman}>
            <View style={styles.pembungkus}>
                <Image source={cart} style={styles.icon} />
                <Text style={styles.textk}>{props.quantity}</Text>
            </View>
            <Text style={styles.keranjang}>Keranjang Belanja</Text>
        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    icon : {
        width:50,
        height:50
    },
    pembungkus : {
        borderWidth:1,
        width:93,
        height:93,
        borderColor:'#4398d1',
        borderRadius:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    keranjang : {
        marginTop:8,
        fontSize:20,
        fontWeight:'700'
    },
    halaman: {
        alignItems:'center',
        padding:20
        
    },
    textk :{
        width:20,
        height:20,
        backgroundColor:'#4ACB4B',
        borderRadius:50,
        position:'absolute',
        top:0,
        right:0,
        
        
    }
})