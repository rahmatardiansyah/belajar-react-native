import React, { Component, useEffect, useState } from "react";
import { Text, View } from "react-native";


// class FlexBox extends Component {
//    constructor(props){
//        super(props);
//        console.log('==>Constructor');
//        this.state = {
//            tulisa : 'Question',
//        }
//    }
//    componentDidMount(){
//        console.log('==>Di Mount');
//        setTimeout(() => { 
//         this.setState({
//             tulisa :'answer',
//         });
//      },2000);
//    }
   
   
//    componentDidUpdate(){
//        console.log('==>DiUpdate');
      
//    }
//     render(){
//         console.log('==>Di Render');
//         return(
//             <View>
//                 <View style={{
//                     flexDirection:'column',
//                     width:400 ,
//                     height:400,
//                     backgroundColor:'#f2f2f2',
//                     alignItems:'flex-end'}}>

//                     <Text style={{backgroundColor:'#ee5253' ,width:50,height:50}}></Text>
//                     <Text style={{backgroundColor:'#feca57' ,width:50,height:50}}></Text>
//                     <Text style={{backgroundColor:'#1dd1a1' ,width:50,height:50}}></Text>
//                     <Text style={{backgroundColor:'#5f27cd' ,width:50,height:50}}></Text>
//                 </View>
//                 <View style={{
//                     flexDirection:'row',
//                     justifyContent:'flex-end',
//                     alignItems:'center'
                    
                    
//                 }}>
//                     <Text style={{marginRight:12}}>Beranda</Text>
//                     <Text style={{marginRight:12}}>Keterangan</Text>
//                     <Text style={{marginRight:12}}>{this.state.tulisa}</Text>
                    
//                 </View>
//                 <View>
                    
//                 </View>
//             </View>
//         )
//     }
// }

const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(200);
    useEffect(() => {
        console.log('did mount');
        setTimeout(() => {
        setSubscriber(400);
        }, 2000);
        return () => {
            console.log('did update')
        }
    }, [])

    // akan dipanggil setiap ada perubahan
    // useEffect(() => {
    //     console.log('did update');
    //     setTimeout(() => {
    //         setSubscriber(400);
    //     }, 2000);
    // }, [subscriber])

    return(
        <View>
            <View style={{
                flexDirection:'row',
                width:400 ,
                height:400,
                backgroundColor:'#000000',
                alignItems:'flex-end'}}>

                <Text style={{backgroundColor:'#ee5253' ,width:50,height:50}}></Text>
                <Text style={{backgroundColor:'#feca57' ,width:50,height:50}}></Text>
                <Text style={{backgroundColor:'#1dd1a1' ,width:50,height:50}}></Text>
                <Text style={{backgroundColor:'#5f27cd' ,width:50,height:50}}></Text>
            </View>
            <View style={{
                flexDirection:'row',
                justifyContent:'flex-end',
                alignItems:'center'
            }}>
                <Text style={{marginRight:12}}>Beranda</Text>
                <Text style={{marginRight:12}}>{subscriber}</Text>
            </View>
        </View>
    )
}

export default FlexBox;
