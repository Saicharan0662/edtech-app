import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CourseDetails = (props) => {
    // console.log(props.route.params.course)
    const { course } = props.route.params

    return (
        <View style={styles.courseDetailCont}>
            <View style={styles.courseCard}>
                <Image style={styles.img} source={{ uri: course.image }} resizeMode="contain" />
                <View style={styles.textBox}>
                    <Text style={styles.courseTitle}>{course.title}</Text>
                    <Text style={styles.courseDescription}>{course.description}</Text>
                </View>
                <View style={styles.contentBox}>
                    {course.content.map((item, index) => {
                        return (
                            <View key={index} >
                                <Text style={styles.contentText}>{item}</Text>
                            </View>
                        )
                    })}
                </View>
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text>Pay ₹{course.price}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    courseDetailCont: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
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
    contentBox: {
        flexDirection: "row"
    },
    contentText: {
        paddingHorizontal: 7,
        paddingVertical: 5,
        marginHorizontal: 5,
        backgroundColor: "purple",
        borderRadius: 4,
        fontSize: 14,
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

export default CourseDetails
