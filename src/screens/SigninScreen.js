//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '../contants';
import { Display } from '../utils';
// create a component
const SigninScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={Colors.DEFAULT_WHITE}
            translucent
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}> Sign In</Text>
            </View>
            <Text style={styles.title}> Welcome </Text>
            <Text style={styles.content}> Enter your username and password , and enjoy ordering food</Text>
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
            <View View  style={styles.inputSubContainer}>
                <TextInput 
                secureTextEntry={true}
                placeholder='Password' />
            </View>
            </View>
            <Text></Text>
            <View style={styles.forgotPasswordContainer}>
              <View>
                  <Text style={styles.rememberMeText}>Remember me</Text>
              </View>
              <Text style={styles.forgotPasswordText}> forgot Password</Text>
            </View>
            <TouchableOpacity  style={styles.signiinButton}>
                <Text style={styles.signinButtonText}> Sign In</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
            <Text style={styles.accountText}> Don't have account </Text>
            <Text style={styles.signupText} 
            onPress={() => navigation.navigate('signup')}> Sign up</Text>
        </View>
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
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
    titl:{
        color:'white'
    },
    forgotPasswordContainer:{
         marginHorizontal:20,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between',

    },
    rememberMeText:{
        marginLeft:10,
        fontSize:12,
        lineHeight:12* 1.4,
        color:Colors.DEFAULT_GREY,
    },
    forgotPasswordText:{
        fontSize:12,
        lineHeight:12* 1.4,
        color:Colors.DEFAULT_BLACK,
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
export default SigninScreen;