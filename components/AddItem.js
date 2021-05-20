import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'


const AddItem = ({ addItem }) => {
    const [text, setText] = useState('')

    const onChange = (value) => {
        setText(value)
    }

    const onSubmit = () => {
        addItem(text)
        setText('')
    }

    return (
        <View style={styles.header}>
            <TextInput
                placeholder="Add Item..."
                style={styles.input}
                value={text}
                onChangeText={onChange} />
            <TouchableOpacity
                style={styles.btn}
                onPress={onSubmit}>
                <Icon style={styles.btnIcon} name="plus" size={20} />
                <Text style={styles.btnText}>
                    Add Item</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
    btnIcon: {
        color: 'darkslateblue',
        paddingRight: 8,
    }
});

export default AddItem;