//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '../contants';
import { Display } from '../utils';
// create a component
const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
             <StatusBar barStyle='dark-content' backgroundColor={Colors.DEFAULT_WHITE}
            translucent
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}> Sign Up</Text>
            </View>
            <Text style={styles.title}> Create Account</Text>
            <Text style={styles.content}> Enter your email, choose a username and password for sign up</Text>
            <View style={styles.inputContainer}>
            <View  style={styles.inputSubContainer}>
                <TextInput placeholder='Username' />
            </View>
            </View>
            <View >
                <View>
                    <Text  style={styles.titl}> </Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
            <View  style={styles.inputSubContainer}>
                <TextInput placeholder='Email' />
            </View>
            </View>
            <View >
                <View>
                    <Text  style={styles.titl}> </Text>
                </View>
            </View>
            
            <View style={styles.inputContainer}>
            <View View  style={styles.inputSubContainer}>
                <TextInput 
                secureTextEntry={true}
                placeholder='Password' />
            </View>
            </View>
            <Text></Text>
            <TouchableOpacity  style={styles.signiinButton}>
                <Text style={styles.signinButtonText}> Create Account </Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
            <Text style={styles.accountText}> Already have account </Text>
            <Text style={styles.signupText} 
            onPress={() => navigation.navigate('signin')}> Sign in</Text>
        </View>
        </View>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.DEFAULT_WHITE,
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:20
    },
    headerTitle:{
        fontSize:20,
        lineHeight:20* 1.4,
        marginTop: 50,
        width: Display.setWidth(80),
        textAlign:'center',

    },
    title:{
        fontSize:20,
        lineHeight:20* 1.4,
        marginTop:50,
        marginBottom:10,
        marginHorizontal:20,  
    },
    content:{
         fontSize:20,
         marginTop:10,
         marginBottom:20,
         marginHorizontal:20,  
    },
    inputContainer:{
        backgroundColor:Colors.LIGHT_GREY,
        paddingHorizontal:10,
        paddingVertical:15,
        marginHorizontal:20,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:Colors.LIGHT_GREY,
        justifyContent:'center'
     },
     inputSubContainer:{
         flexDirection:'row',
         alignItems:'center',
     },
     signiinButton:{
        backgroundColor:Colors.DEFAULT_GREY,
        borderRadius:8,
        marginHorizontal:20,
        height: Display.setHeight(6),
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    signinButtonText:{
        fontSize:18,
        lineHeight:12* 1.4,
        color:Colors.DEFAULT_WHITE
    },
    signupContainer:{
        marginHorizontal:20,
        justifyContent:'center',
        paddingVertical:20,
        flexDirection:'row',
    },
    accountText:{
        fontSize:15,
        color:Colors.DEFAULT_BLACK,
    },
    signupText:{
        fontSize:15,
        color:Colors.DEFAULT_GREY,
    }
});

//make this component available to the app
export default SignupScreen;
