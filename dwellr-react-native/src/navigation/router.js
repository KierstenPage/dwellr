import React from 'react';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Payment from '../screens/Payment/paymentIndex';
import AddChat from '../screens/Messages/addchatIndex';
import Chat from '../screens/Messages/chatIndex';
import Messages from '../screens/Messages/messagesIndex';
import HomeScreen from '../screens/Home/homeIndex';
import HomeTabNavigator from './HomeTabNavigator';
import { ProgressViewIOSComponent, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-elements';
import WelcomeScreen from '../screens/Chat/welcome/welcome-screen';
import ChatListScreen from '../screens/Chat/chat-list/chat-list-screen';
import ChatRoomScreen from '../screens/Chat/chat-room/chat-room-screen';
import ChatCreateScreen from '../screens/Chat/chat-create/chat-create-screen';
import AppProvider from '../app-context';

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Login';

    switch (routeName) {
        case 'Login':
            return 'Login';
        case 'Home':
            return '                                         Home                                          ';
        case 'Payment':
            return '                                 Make Payment                                      ';
        case 'Calendar':
            return '                                   My Calendar                                           ';
        case 'Messages':
            return '                                     Chat Room                                    ';
        case 'Profile':
            return '                                        Profile                                          ';
        case 'Maintenance':
            return '                                  Maintenance                                          ';
    }
}


const Stack = createStackNavigator();

const Router = (props) => {

    return(
        <NavigationContainer>
            <Stack.Navigator style={styles.container}>
                <Stack.Screen 
                    name={"Login"} 
                    component={HomeTabNavigator}
                    // options = {{headerShown: true}}
                    options={({ route }) => ({
                        headerTitle: getHeaderTitle(route),
                        // headerRight: ()=> (
                        //     <View
                        //     style={{
                        //         flexDirection: "row",
                        //         justifyContent: "space-between",
                        //         width: 50
                        //     }}
                        //     >
                        //         <TouchableOpacity>
                        //             <EvilIcons name="user" size={38} color="#47c9ba"/>
                        //         </TouchableOpacity>
                        //     </View>
                        // )
                    })}
                    
                />
                <Stack.Screen 
                    name={"Add Chat"} 
                    component= {AddChat}
                    options={{
                        headerTitle: () => (
                            <Text style={{color: "white", marginLeft:10, fontWeight: "600", fontSize: 18, }}>                       Add Chat                     </Text>
                        ),
                        headerStyle: {backgroundColor: "#47c9ba"}, 
                    }}
                />

                <Stack.Screen 
                    name={"Payment"} 
                    component= {Payment}
                    options={{title: "                       Payment                          "}}
                />
                
                <Stack.Screen 
                    name={"Messages"} 
                    component= {Messages}
                    options={{
                        headerLeft: () => (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: 80,
                                    marginRight: 20,
                                }}
                                >
                                    <TouchableOpacity>
                                        <Entypo name="home" size={25} color={color}/>
                                    </TouchableOpacity>
                            </View>
                        )
                    }}
                />

                <Stack.Screen 
                    name={"Test Chat"} 
                    component= {Chat}
                    options={{
                        headerTitleAlign: "center",
                        headerTintColor: "white",
                        headerStyle: {backgroundColor: "#47c9ba"},
                        headerTitle: () => (
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar 
                                    rounded 
                                    source={{
                                        uri:
                                            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                                    }}
                                />
                                <Text style={{color: "white", marginLeft:10, fontWeight: "600", fontSize: 18, }}> Test Chat                                      </Text>

                            </View>
                        ),
                    }}
                />
                    <Stack.Screen
                        name={"Welcome"}
                        // options={screenOptions(routes.Welcome.title)}
                        component={WelcomeScreen}
                    />
                    
                    <Stack.Screen
                        name={"Chatlist"}
                        options={{title: "                       Chat List                          "}}
                        component={ChatListScreen}
                    />
                    
                    <Stack.Screen
                        name={"Chatroom"}
                        options={{title: "                       Chat Room                          "}}
                        component={ChatRoomScreen}
                    />
                    
                    <Stack.Screen
                        name={"Chat create"}
                        options={{title: "                       Join Chat                           "}}
                        component={ChatCreateScreen}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})

export default Router;

