import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CourseCard = ({ item }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.courseCard}>
            <Image style={styles.img} source={{ uri: item.image }} resizeMode="contain" />
            <View style={styles.textBox}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseDescription}>{item.description}</Text>
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("CourseDetails", {
                    course: item
                })}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    courseCard: {
        width: "100%",
        backgroundColor: '#fff',
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: "center"
    },
    img: {
        width: "100%",
        height: undefined,
        borderRadius: 5,
        aspectRatio: 1,
    },
    textBox: {
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
    },
    courseTitle: {
        fontSize: 22,
        fontWeight: "bold",
    },
    courseDescription: {
        fontSize: 16,
    },
    btn: {
        marginVertical: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "cyan",
        width: 100,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default CourseCard
