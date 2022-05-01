import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const AboutUs = () => {
    return (
        <View style={styles.aboutCont}>
            <View style={styles.header}>
                <Text style={styles.heading}>Sai Charan</Text>
                <Text style={styles.subHeading}>Full stack developer</Text>
            </View>
            <Image style={styles.img} source={{ uri: "https://avatars.githubusercontent.com/u/83747548?v=4" }} />
            <View style={styles.aboutTextBox}>
                <Text style={styles.headText}>About me</Text>
                <Text style={{ color: "#fff" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nulla et dolor, rerum corrupti repudiandae aut dolore laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias ipsa quisquam. Incidunt placeat beatae voluptatibus.</Text>
            </View>
            <View style={styles.linkCont}>
                <Text style={[styles.headText, { color: "black" }]}>Connect with me</Text>
                <View style={styles.links}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/saicharan0662/")}>
                        <Image style={styles.icon} source={{ uri: "https://camo.githubusercontent.com/8c244a7a7b8a6e767d241c9a6c5e1b5e13ea693770c52bbc3fe564ba4044a4c9/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3137342f3137343835372e706e67" }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://saicharan006.netlify.app/")}>
                        <Image style={styles.icon} source={{ uri: "https://saicharan006.netlify.app/static/media/profile.a1fd317f.jpg" }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Saicharan0662")}>
                        <Image style={styles.icon} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFYUzq5Fn-C8IZ8AFuapPX_mf3HqwEdlzedMiSHPyYoBgGJiNRcW4&usqp=CAE&s" }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    aboutCont: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        position: 'relative',
        bottom: "5%",
        paddingTop: 40,
        backgroundColor: "#f3f3f3"
    },
    header: {
        alignItems: "center",
        marginTop: 40,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: "uppercase"
    },
    subHeading: {
        fontSize: 16,
        fontWeight: '500',
        color: "#ccc",
    },
    img: {
        width: 150,
        aspectRatio: 1,
        borderRadius: 100,
        marginVertical: 30,
    },
    aboutTextBox: {
        padding: 10,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderTopWidth: 1,
    },
    headText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        color: "#fff",
    },
    linkCont: {
        marginVertical: 20,
        paddingVertical: 20,
        alignItems: "center",
        width: "100%",
        marginTop: 30,
    },
    links: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 10,
    },
    icon: {
        width: 40,
        aspectRatio: 1,
        marginHorizontal: 10,
    }
})

export default AboutUs
