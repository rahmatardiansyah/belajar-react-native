import React from "react";
import { View,Text,Image,StyleSheet, TouchableOpacity} from "react-native";
import lenovo from '../../assets/images/leptop.png'

const Product = (props) => {
    return (
        <View>
            <View style={{marginTop:15,width:212,backgroundColor :'#f2f2f2',padding:12,borderRadius:8 }}>
            <Image source={lenovo}  style = {{width:188,height:107,borderRadius:8,marginTop:12}}/>
            <Text style={{fontSize:14,fontWeight:'bold',marginTop:12}}>Lenovo ThinkPad</Text>
            <Text style={{fontWeight:'bold',fontSize:14,color:'#f2994a',marginTop:12}}>Rp 8.000.000</Text>
            <Text style={{fontSize:12 ,fontWeight:'300',marginTop:12}}>Pekanbaru</Text>
            <TouchableOpacity onPress={props.onButtonPress}>
                <View style={{backgroundColor:'#6fcf97',paddingVertical:6,borderRadius:25}}>
                    <Text style={{fontSize:14,fontWeight:'400',textAlign:'center',color:'white'}}>Beli</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product;