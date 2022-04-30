import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

const Students = () => {

    const [user, setUser] = useState(null)

    const getUsers = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const usr = await res.json()
            // console.log(usr)
            setUser(usr)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <View style={styles.studentCont}>
            <FlatList
                data={user}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.userCard}>
                            <Text style={styles.nameStyle}>{item.name}</Text>
                            <Text style={styles.text}>{item.email}</Text>
                            <Text style={styles.text}>{item.company.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    studentCont: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        position: 'relative',
        bottom: "5%",
        paddingTop: 40,
    },
    userCard: {
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 16,
        marginVertical: 8,
        borderRadius: 10,
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: "uppercase"
    },
    text: {
        fontSize: 16,
    }
})

export default Students
