import React from 'react';
import { colors } from '../common/theme';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

var { width } = Dimensions.get('window');

export default function AboutPage() {

    return (
        <View style={styles.mainView}>
            <View style={[styles.mainView, { borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: colors.WHITE }]}>
                <View style={{ flex: 1, position: 'absolute', backgroundColor: colors.TRANSPARENT, height: '100%', width: '100%' }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%' }}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.logo}>
                                <Image
                                    style={{ width: width / 2.5, height: width / 2.5, borderRadius: 15 }}
                                    source={require('../assets/logo1024x1024.png')}
                                />
                            </View>
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 16, marginHorizontal: 20, marginBottom: 20 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto officiis molestias provident, eos ratione voluptatum beatae! Quo quaerat nemo nostrum sit eaque! Quod, nulla alias accusantium quos quas optio animi!
                        </Text>
                        <View style={{ marginBottom: 20 }}>
                            <View style={[styles.vew, { flexDirection: 'row', alignItems: 'center' }]}>
                                <View style={styles.vew1}>
                                    <Ionicons name="call" size={30} color={colors.BLACK} />
                                </View>
                                <View style={styles.textpart}>
                                    <Text style={{ color: colors.BLACK, fontWeight: 'bold', fontSize: 14, textAlign: "left" }}>{"Contact Us"}</Text>
                                    <Text style={{ color: colors.BLACK, fontWeight: 'bold', fontSize: 12, textAlign: "left" }}>{"123-456-7890"}</Text>
                                </View>
                            </View>
                            <View style={[styles.vew, { flexDirection: 'row', alignItems: 'center' }]}>
                                <View style={styles.vew1}>
                                    <MaterialIcons name="email" size={30} color={colors.BLACK} />
                                </View>
                                <View style={styles.textpart}>
                                    <Text style={{ color: colors.BLACK, fontWeight: 'bold', fontSize: 14, textAlign: "left" }}>{"Email"}</Text>
                                    <Text style={{ color: colors.BLACK, fontWeight: 'bold', fontSize: 12, textAlign: "left" }}>{"info@example.com"}</Text>
                                </View>
                            </View>
                            <View style={[styles.vew, { flexDirection: 'row', alignItems: 'center' }]}>
                                <View style={styles.vew1}>
                                    <MaterialCommunityIcons name="web" size={30} color={colors.BLACK} />
                                </View>
                                <View style={styles.textpart}>
                                    <Text style={{ color: colors.BLACK, fontWeight: 'bold', fontSize: 14, textAlign: "left" }}>{"Company Website"}</Text>
                                    <Text style={{ color: colors.BLACK, fontWeight: 'bold', fontSize: 12, textAlign: "left" }}>{"www.example.com"}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.MAIN_COLOR,
        marginTop: 50,
    },
    vew: {
        flex: 1,
        height: 55,
        width: width - 40,
        marginVertical: 6,
        alignSelf: 'center'
    },
    logo: {
        width: width / 2.5,
        height: width / 2.5,
        marginTop: 10,
        marginBottom: 25,
        alignSelf: 'center',
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 10
    },
    vew1: {
        width: 50,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 2,
        padding: 10,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2
    },
    textpart: {
        width: width - 110,
        marginHorizontal: 2,
        padding: 10,
        flexDirection: 'column'
    },
});
