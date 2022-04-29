import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'

const Home = ({ name }) => {
    return (
        <View>
            <View style={styles.homeContainer}>
                <Image
                    style={styles.img}
                    source={require('../../assets/homeImage.jpg')}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>Welcome to</Text>
                    <Text style={[styles.heading, { fontSize: 26, color: "violet" }]}>{name}</Text>
                    <Text style={styles.des}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet unde facilis veritatis, adipisci doloribus voluptates, incidunt explicabo dolorum ea pariatur iure est inventore.</Text>
                </View>
            </View>
            <View>
                <Menu />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    homeContainer: {
        height: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        position: 'relative',
        bottom: "5%"
    },
    img: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        borderRadius: 16,
    },
    textContainer: {
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        textTransform: "uppercase",
        color: "purple",
        fontWeight: '600'
    },
    des: {
        lineHeight: 19,
        marginVertical: 9,
        color: "#c3c3c3"
    }
})

export default Home
