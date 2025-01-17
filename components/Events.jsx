import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Events () {
return (
    <View style={{paddingBottom:70, paddingHorizontal:12, paddingTop:20}}>
        <Text style={{fontSize:18, fontWeight:'bold', }}> Events </Text>
        <EventsCard eventName='B-Plan' backgroundColor='#BFF4C8' textColor='#5F9468' description="Have an Idea that can do wonders. Take part in our Business Event and get a change to get your IDEA across Judges, win Prizes and get a chance to be funded" />
    </View>
)
}
const EventsCard = ({eventName, description, backgroundColor, textColor}) => {
    return(
        <View style={{
            marginVertical:20,
            width:'98%',
            alignSelf: 'center',
            height:150,
            backgroundColor: backgroundColor,
            borderRadius: 18,    
            // flexDirection:'coloumn',
            // alignItems: 'center',
            justifyContent: 'space-around',
            padding:20
        }}>
    
            <Text style= {{
                fontWeight: 'bold',
                paddingBottom:10,
                fontSize: 14
            }}>{eventName}</Text>
            <Text style={{
                padding:8,
                marginRight: 20,
                fontSize: 11,
                color: textColor,
            }}>{description} </Text>
                <AntDesign style={{position:'absolute', right:10,bottom:20}} name="rightcircleo" size={30} />
                {/* <Image source={require('../assets/ideaSubmit.png')} 
                    style={{
                        width:'100%',
                        height: '65%',
                        resizeMode: 'contain',
                        padding:15,
                    }} /> */}
    
        </View>
    )
}