//import liraries
import React, {useEffect} from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Colors, Images} from '../contants';
import { Display } from '../utils';

// create a component
const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
               navigation.navigate('Welcome');
        },9000);
    },[]);

return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content' 
            backgroundColor={Colors.DEFAULT_GREY}
            translucent
            />
            <Image
             source={Images.PLATE}
             resizeMode="contain"
             style={styles.image}

            />
            <Text style={styles.titleText}>FooDelivery</Text>
        </View>
);
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_GREY
    },
    image: {
        height:Display.setHeight(30),
        width:Display.setWidth(60)
    },
    titleText: {
        color: Colors.DEFAULT_BLACK,
        fontSize: 32,
        fontWeight: '100',
        fontStyle: 'normal',

    }


});

//make this component available to the app
export default SplashScreen;
