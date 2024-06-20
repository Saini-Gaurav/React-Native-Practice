import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../common/theme';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { MAIN_COLOR } from '../common/theme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function DriverEarningRidelist(props) {
    const [tabIndex, setTabIndex] = useState(props.tabIndex)
    const renderData = ({ item }) => (
        <View style={[styles.BookingContainer, styles.elevation]}>
            <View style={[styles.box, { padding: 5 }]}>
                <View style={{ flexDirection: 'row', flex: 1, margin: 10, justifyContent: 'space-between' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.textStyleBold}>{"Date/Time"}</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <MaterialCommunityIcons name="cash" size={28} color={colors.BLACK} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.textStyleBold}>{"$100"}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginTop: 5 }}>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 30, alignItems: 'center' }}>
                                <Ionicons name="location-outline" size={24} color={colors.BALANCE_GREEN} />
                                <View style={[styles.hbox2, { flex: 1, minHeight: 5 }]} />
                            </View>
                            <View style={{ flex: 1, marginBottom: 10 }}>
                                <Text style={[styles.textStyle, { marginLeft: 6, textAlign: 'left' }]}>{"Pickup Address"}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 30, alignItems: 'center' }}>
                                <Ionicons name="location-outline" size={24} color={colors.BUTTON_ORANGE} />
                            </View>
                            <View style={{ flex: 1, marginBottom: 10 }}>
                                <Text style={[styles.textStyle, { marginLeft: 6, textAlign: 'left' }]}>{"Drop Address"}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.textView3}>
            <SegmentedControlTab
                values={["Daily", "This Month", "This Year"]}
                selectedIndex={tabIndex}
                onTabPress={(index) => { setTabIndex(index)}}
                borderRadius={0}
                tabsContainerStyle={styles.segmentcontrol}
                tabStyle={{ borderWidth: 0, backgroundColor: 'transparent', borderColor: MAIN_COLOR }}
                activeTabStyle={{ borderBottomColor: colors.RED, backgroundColor: 'transparent', borderBottomWidth: 1.5 }}
                tabTextStyle={{ color: colors.FOOTERTOP, fontWeight: 'bold' }}
                activeTabTextStyle={{ color: colors.BLACK }}
            />
            <View style={{ flex: 1 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    data={[{}, {}, {}]} // Placeholder data
                    renderItem={renderData}
                    ListEmptyComponent={
                        <View style={{ marginTop: height / 3.5, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 50, minWidth: 150, borderRadius: 10, backgroundColor: MAIN_COLOR, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.textStyleBold, { color: colors.WHITE }]}>{"No Data Available"}</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    BookingContainer: {
        margin: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 1,
    },
    box: {
        backgroundColor: colors.WHITE,
        borderRadius: 10,
    },
    elevation: {
        elevation: 5,
    },
    textView3: {
        flex: 1,
    },
    segmentcontrol: {
        color: colors.WHITE,
        fontSize: 18,
        fontFamily: "Roboto-Regular",
        marginTop: 0,
        alignSelf: "center",
        height: 50,
    },
    hbox2: {
        width: 1,
        backgroundColor: colors.MAP_TEXT,
    },
    textStyle: {
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
    },
    textStyleBold: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
    },
});
