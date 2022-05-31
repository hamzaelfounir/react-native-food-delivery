//import liraries
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { Colors, General } from '../contants';
import { WelcomeCard} from '../components';
import { Display } from '../utils';
// create a component
const pageStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_WHITE};

    const Pagination = ({index}) => {
        return (
          <View style={styles.pageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
              i === index ? (
                <View style={pageStyle(true)} key={i} />
              ) : (
                <View style={pageStyle(false)} key={i} />
              ),
            )}
          </View>
        );
      };

const WelcomeScreen = ({navigation}) => {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0)
    const welcomeList = useRef()
    const onViewRef = useRef(({changed}) => {
        setWelcomeListIndex(changed[0].index);
      });
      const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    
      const pageScroll = () => {
        welcomeList.current.scrollToIndex({
          index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
        });
      };
    return (
        <View style={styles.container}>
            <StatusBar 
            barStyle='dark-content'
            backgroundColor={Colors.DEFAULT_WHITE}
            translucent
            />
            <View style={styles.welcomeListContainer}>
                <FlatList 
                ref={welcomeList}
                data={General.WELCOME_CONTENTS} 
                keyExtractor={ item => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                overScrollMode='never'
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                renderItem={({item}) => <WelcomeCard {...item} />}
                />
             </View>
             <Pagination index={welcomeListIndex} />
      {welcomeListIndex === 2 ? (
          
        <TouchableOpacity
          style={styles.gettingStartedButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('signin')}>
          <Text style={styles.gettingStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginLeft: 10}}
            onPress={() => welcomeList.current.scrollToEnd()}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => pageScroll()}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    welcomeListContainer:{
       height:Display.setHeight(60)
    },
    pageContainer:{
       flexDirection:'row',
    },
    page:{
        height:8,
        width:15,
        backgroundColor:Colors.DEFAULT_GREY,
        borderRadius:32,
        marginHorizontal:5,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:Display.setWidth(90),
        alignItems:'center',
    },
    buttonText:{
        fontSize:16,
        fontStyle: 'normal',   
    },
    button:{
        backgroundColor:Colors.LIGHT_GREY,
        paddingVertical:20,
        paddingHorizontal:11,
        borderRadius:32,
    },
    gettingStartedButton: {
        backgroundColor: Colors.DEFAULT_GREY,
        paddingVertical: 4,
        paddingHorizontal: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginTop:20
      },
      gettingStartedButtonText: {
        fontSize: 20,
        color: Colors.DEFAULT_WHITE,
        lineHeight: 20 * 1.4,
        fontStyle:'normal'
      },
});

//make this component available to the app
export default WelcomeScreen;

