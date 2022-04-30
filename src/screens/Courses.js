import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import courses from '../data/courses'
import CourseCard from '../components/CourseCard'

const Courses = () => {
    return (
        <View style={styles.courseContainer}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={courses}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    // console.log(item);
                    return (
                        <CourseCard item={item} />
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    courseContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: "rgba(0,0,0,0.1)",
    },

})

export default Courses
