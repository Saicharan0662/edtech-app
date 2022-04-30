import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/course.png')}
                />
                {/* <Text>Courses</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Students")}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/student.png')}
                />
                {/* <Text>Students</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/about.png')}
                />
                {/* <Text>Aboutus</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/contact.png')}
                />
                {/* <Text>Contact</Text> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 5,
        borderWidth: .5,
        borderColor: "#c3c3c3",
        paddingHorizontal: 5,
    },
    icon: {
        width: "100%",
        aspectRatio: 1
    }
})

export default Menu
