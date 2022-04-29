import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
                <Text>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Students")}>
                <Text>Students</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
                <Text>Aboutus</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                <Text>Contact</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
        marginBottom: 20,
        borderWidth: .5,
        borderColor: "#c3c3c3",
        paddingHorizontal: 5,
    }
})

export default Menu
