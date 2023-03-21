import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";



const DateTimePickerScreen = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
   // const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('Select Date');
   // const [selectedTime ,setSelectedTime] =useState ('Select Time');
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        const dt = new Date(date);
        const x = dt.toISOString().split("T");
        const x1 = x[0].split("-");
        console.log(x1[2] + "/" + x1[1] + "/" + x1[0]);
        setSelectedDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
        hideDatePicker();
    };

    // const showTimePicker = () => {
    //     setTimePickerVisibility(true);
    // };

    // const hideTimePicker = () => {
    //     setTimePickerVisibility(false);
    // };

    // const handleTimeConfirm = (date) => {
    //     console.warn("A date has been picked: ", date);
    //     const dt = new Date(date);
    //     const x = dt.toLocaleTimeString();
    //     setSelectedTime(x);
    //     console.log(x);
    //     hideTimePicker();
    
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.innerContainer} onPress={() => { showDatePicker() }}>
                <Text style={styles.DateContainer}>{selectedDate}</Text>
            </TouchableOpacity>
            
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
        }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",

    },
    innerContainer: {
        width: 200,
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        margin: 10,
        fontWeight: 'bold',
    },
    DateContainer: {
        color: '#000000',
        fontWeight: 'bold'
    }
})

export default DateTimePickerScreen;