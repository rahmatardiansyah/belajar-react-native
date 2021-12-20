import React from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";

const Story = (props) => {
    return (
        <View style={{alignItems: "center", marginRight: 20}}>
            <Image 
            source={{uri: props.gambar}} 
            style={{width: 70, height: 70, borderRadius: 70/2}}  />
            <Text style={{maxWidth: 50, textAlign: "center"}}>{props.judul}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Component dinamis dengan Props</Text>
            <ScrollView horizontal>
                <View style={{flexDirection: "row"}}>
                    <Story judul="tes asdf asdf asd" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                    <Story judul="dua" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                    <Story judul="dua" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                    <Story judul="dua" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                    <Story judul="dua" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                    <Story judul="dua" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                    <Story judul="dua" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                    <Story judul="dua" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                    <Story judul="dua" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                    <Story judul="dua" gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/212669762_1710340499161156_6482942911617272968_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_KG1jM97vF8AX8e4bm6&tn=JEsxFXU1ki1SZTcN&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9vOCQy6cf3k2KHyJUFKNlAqqNkDc2gQSVEhDsWmtbM2Q&oe=61C570C1&_nc_sid=9a90d6" />
                </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis;

const styles = StyleSheet.create({});