import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

const Contact = ({ navigation }) => {

    const [input, setInput] = useState({ name: "", email: "", message: "" })
    const [agree, setAgree] = useState(false)

    const submit = () => {
        if (input.name === "" || input.email === "" || input.message === "") {
            Alert.alert("Please fill all the fields")
            return;
        }
        Alert.alert("Thank you for contacting us")
        navigation.navigate("Home")
    }

    return (
        <View style={styles.contactCont}>
            <View style={styles.header}>
                <Text style={styles.heading}>Contact Us</Text>
                <Text style={styles.subHeading}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, iusto.</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.label}>Name*</Text>
                    <TextInput style={styles.textInput} placeholder="Enter your name"
                        value={input.name}
                        onChangeText={(text) => setInput({ ...input, name: text })}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>email*</Text>
                    <TextInput style={styles.textInput} placeholder="Enter your email"
                        value={input.email}
                        onChangeText={(text) => setInput({ ...input, email: text })}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Message*</Text>
                    <TextInput style={styles.textInput} placeholder="Enter the message"
                        value={input.message}
                        onChangeText={(text) => setInput({ ...input, message: text })}
                    />
                </View>
                <View style={styles.cbCont}>
                    <Checkbox
                        value={agree}
                        onValueChange={() => setAgree(!agree)}
                        color={agree ? "#4630EB" : undefined}
                    />
                    <Text style={styles.tncText}>I agree to terms and condition</Text>
                </View>
            </View>
            <Button title='Submit' onPress={() => submit()}
                disabled={!agree}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contactCont: {
        justifyContent: 'center',
        paddingHorizontal: 24,
        position: 'relative',
        bottom: "5%",
        paddingTop: 40,
        backgroundColor: "#f3f3f3"
    },
    header: {
        marginTop: 30,
    },
    heading: {
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: 'bold'
    },
    subHeading: {
        fontSize: 16,
        lineHeight: 20,
        marginVertical: 15,
    },
    form: {
        marginVertical: 10,
        paddingVertical: 10,
    },
    input: {
        marginVertical: 10
    },
    label: {
        fontSize: 18,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        borderRadius: 7,
        fontSize: 16,
        marginVertical: 8,
    },
    cbCont: {
        marginTop: 18,
        flexDirection: 'row',
        marginHorizontal: 4,
    },
    tncText: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default Contact
