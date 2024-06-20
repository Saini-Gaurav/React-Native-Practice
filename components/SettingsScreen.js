import React from "react";
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from "../common/theme";
import { MAIN_COLOR, SECONDORY_COLOR } from "../common/theme"

var { width } = Dimensions.get('window');

export default function SettingsScreen(props) {
    const menuList = [
        { name: 'Profile Settings', navigationName: 'Profile', icon: 'account-cog-outline', type: 'material-community' },
        { name: 'Documents', navigationName: 'editUser', icon: 'description', type: 'materialIcons' },
        { name: 'Income', navigationName: 'MyEarning', icon: 'attach-money', type: 'materialIcons' },
        { name: 'Convert to Driver/Rider', navigationName: 'Convert', icon: 'account-convert-outline', type: 'material-community' },
        { name: 'Cars', navigationName: 'Cars', icon: 'car-cog', type: 'material-community' },
        { name: 'Refer & Earn', navigationName: 'Refer', icon: 'cash-outline', type: 'ionicon' },
        { name: 'SOS', navigationName: 'Sos', icon: 'radio-outline', type: 'ionicon' },
        { name: 'Notifications', navigationName: 'Notifications', icon: 'notifications-outline', type: 'ionicon' },
        { name: 'Complain', navigationName: 'Complain', icon: 'chatbox-ellipses-outline', type: 'ionicon' },
        { name: 'About Us', navigationName: 'About', icon: 'info', type: 'entypo' },
        { name: 'Logout', icon: 'logout', navigationName: 'Logout', type: 'antdesign' }
    ];

    return (
        <View style={styles.mainView}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={menuList}
                scrollEnabled={true}
                initialNumToRender={13}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item }) => (
                    <View style={styles.vew}>
                        <TouchableOpacity
                            style={{ height: '100%', flexDirection: 'row', alignItems: 'center' }}
                            key={item.navigationName}
                            onPress={() => props.navigation.navigate(item.navigationName)}
                        >
                            <View style={styles.vew2}>
                                <Icon
                                    name={item.icon}
                                    type={item.type}
                                    color={colors.BLACK}
                                    size={26}
                                />
                            </View>
                            <View style={{ flex: 1, height: '100%', justifyContent: 'center' }}>
                                <Text style={{ color: colors.BLACK }}>{item.name}</Text>
                            </View>
                            <View style={{ height: '100%', width: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <MaterialIcons name="keyboard-arrow-right" size={30} color={MAIN_COLOR} />
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
    contentContainer: {
        paddingVertical: 5 
    },
    vew: {
        flex: 1,
        height: 60,
        width: width - 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        marginVertical: 6,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: colors.WHITE,
    },
    vew2: {
        padding: 6,
        marginHorizontal: 5,
        backgroundColor: SECONDORY_COLOR,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        width: 50,
        height: 50,
        justifyContent: 'center'
    }
});
