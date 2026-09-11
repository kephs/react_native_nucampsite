import { Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import DirectoryScreen from './DirectoryScreen';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <FontAwesome
                            name='home'
                            style={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={({ navigation }) => ({
                    title: 'Campsite Directory',
                    headerLeft: () => (
                        <FontAwesome
                            name='list'
                            style={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />

            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}
            />
        </Stack.Navigator>
    );
};

const AboutNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='About'
                component={AboutScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <FontAwesome
                            name='info-circle'
                            style={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ContactNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: 'Contact Us',
                    headerLeft: () => (
                        <FontAwesome
                            name='address-card'
                            style={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios'
                        ? 0
                        : Constants.statusBarHeight
            }}
        >
<Drawer.Navigator
    initialRouteName='HomeNav'
    screenOptions={{
        drawerStyle: { backgroundColor: '#CEC8FF' },
        headerShown: true
    }}
>
    <Drawer.Screen
        name='HomeNav'
        component={HomeNavigator}
        options={{
            title: 'Home',
            headerShown: false,
            drawerIcon: ({ color }) => (
                <FontAwesome
                    name='home'
                    size={24}
                    style={{ width: 24 }}
                    color={color}
                />
            )
        }}
    />

    <Drawer.Screen
        name='DirectoryNav'
        component={DirectoryNavigator}
        options={{
            title: 'Campsite Directory',
            headerShown: false,
            drawerIcon: ({ color }) => (
                <FontAwesome
                    name='list'
                    size={24}
                    style={{ width: 24 }}
                    color={color}
                />
            )
        }}
    />

    <Drawer.Screen
        name='AboutNav'
        component={AboutNavigator}
        options={{
            title: 'About Us',
            headerShown: false,
            drawerIcon: ({ color }) => (
                <FontAwesome
                    name='info-circle'
                    size={24}
                    style={{ width: 24 }}
                    color={color}
                />
            )
        }}
    />

    <Drawer.Screen
        name='ContactNav'
        component={ContactNavigator}
        options={{
            title: 'Contact Us',
            headerShown: false,
            drawerIcon: ({ color }) => (
                <FontAwesome
                    name='address-card'
                    size={24}
                    style={{ width: 24 }}
                    color={color}
                />
            )
        }}
    />
</Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;