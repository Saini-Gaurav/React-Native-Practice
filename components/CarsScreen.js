import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { colors } from '../common/theme';
import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { MAIN_COLOR, SECONDORY_COLOR } from '../common/theme';
import { FontAwesome5 } from '@expo/vector-icons';

const { height } = Dimensions.get("window");

export default function CarsScreen(props) {
    const isRTL = false; // You can set it to true for testing RTL layout
    const data = [
        {
            makeModel: 'Toyota Camry',
            approved: 'Yes',
            activeStatus: 'Yes',
            carType: 'Sedan',
            vehicleRegNo: '1234',
            otherInfo: 'Some other info',
            imageUrl: require('../assets/download.jpg')
        },
        {
            makeModel: 'Honda Accord',
            approved: 'No',
            activeStatus: 'No',
            carType: 'SUV',
            vehicleRegNo: '5678',
            otherInfo: 'Additional info here',
            imageUrl: require('../assets/download.jpg')
        }
    ]; // Add test data here if needed

    const onPressBack = () => {
        // Dummy function for back button
    }

    const lCom = () => {
        return (
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={onPressBack}>
                <FontAwesome5 name="arrow-left" size={24} color={colors.WHITE} />
            </TouchableOpacity>
        );
    }

    React.useEffect(() => {
        props.navigation.setOptions({
            headerLeft: lCom,
        });
    }, [props.navigation]);

    React.useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={() => {}} style={{ marginEnd: 8, width: 80, alignItems: 'flex-end', padding: 5 }}>
                        <Text style={[styles.headerTitleStyle, { color: colors.BLACK }]}>Add</Text>
                    </TouchableOpacity>
                )
            }
        });
    }, [props.navigation]);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {data && data.length > 0 ?
                data.map((c, i) => {
                    return (
                        <TouchableWithoutFeedback key={"index" + i} onPress={() => {}}>
                            <View style={styles.card}>
                                <View style={[styles.vew1, { backgroundColor: MAIN_COLOR, flexDirection: isRTL ? 'row-reverse' : 'row', borderBottomRightRadius: isRTL ? null : 90, borderBottomLeftRadius: isRTL ? 90 : null }]}>
                                    <View style={{ flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'center', flex: 1 }}>
                                        <Text style={[styles.text, { marginHorizontal: 3 }]}>{c.makeModel}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {}} style={[isRTL ? { marginLeft: 20, width: 50 } : { marginLeft: 20, width: 50 }]}>
                                        <MaterialIcons name="delete" size={24} color={colors.WHITE} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '100%', flexDirection: isRTL ? 'row-reverse' : 'row', height: 180 }}>
                                    <View style={{ width: '60%', alignItems: 'center', height: '90%' }}>
                                        <Image source={c.imageUrl} style={styles.carImage} resizeMode={'center'} />
                                    </View>
                                    <View style={{ flexDirection: 'column', width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={styles.vew2}>
                                            <Text style={styles.text3}>Approved</Text>
                                            <Text style={[styles.text3, { fontWeight: 'bold' }]}>{c.approved}</Text>
                                        </View>
                                        <View style={styles.vew2}>
                                            <Text style={styles.text3}>Active Status</Text>
                                            <Text style={[styles.text3, { fontWeight: 'bold' }]}>{c.activeStatus}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.vew, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                                    <MaterialCommunityIcons name="car-multiple" size={24} color={MAIN_COLOR} style={styles.icon} />
                                    <View>
                                        <Text style={styles.text1}>Car Type</Text>
                                        <Text style={[styles.text1, { fontWeight: 'bold' }]}>{c.carType}</Text>
                                    </View>
                                </View>
                                <View style={[styles.vew, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                                    <MaterialCommunityIcons name="numeric" size={24} color={MAIN_COLOR} style={styles.icon} />
                                    <View>
                                        <Text style={styles.text1}>Vehicle Reg No</Text>
                                        <Text style={[styles.text1, { fontWeight: 'bold', textAlign: isRTL ? 'right' : 'left' }]}>{c.vehicleRegNo}</Text>
                                    </View>
                                </View>
                                <View style={[styles.vew, { flexDirection: isRTL ? 'row-reverse' : 'row', marginBottom: 10 }]}>
                                    <Entypo name="info" size={24} color={MAIN_COLOR} style={styles.icon} />
                                    <View>
                                        <Text style={styles.text1}>Other Info</Text>
                                        <Text style={[styles.text1, { fontWeight: 'bold', textAlign: isRTL ? 'right' : 'left' }]}>{c.otherInfo}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })
                :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: height / 2, padding: 10 }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Add your car</Text>
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    headerTitleStyle: {
        color: colors.WHITE,
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        marginEnd: '10%'
    },
    card: {
        backgroundColor: colors.WHITE,
        margin: 10,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3
    },
    vew: {
        height: 60,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginVertical: 7,
        padding: 10
    },
    carImage: {
        width: '90%',
        height: '100%'
    },
    text: {
        color: colors.WHITE,
        fontSize: 18
    },
    text3: {
        color: colors.HEADER,
        fontSize: 14
    },
    vew1: {
        minHeight: 55,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        alignItems: 'center'
    },
    vew2: {
        backgroundColor: SECONDORY_COLOR,
        height: 70,
        width: 120,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 5
    },
    text1: {
        color: colors.BLACK,
        fontSize: 16,
        marginHorizontal: 15
    },
    icon: { marginHorizontal: 10, marginTop: 8 }
});
