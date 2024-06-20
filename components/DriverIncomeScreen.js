import React, { useState } from 'react';
import { colors } from '../common/theme';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';
import DriverEarningRidelist from './DriverEarningRidelist';

var { width } = Dimensions.get('window');

export default function DriverIncomeScreen() {
    const [tabIndex, setTabIndex] = useState(0);
    const [bookingData,setBookingData] = useState([]);
    return (
        <View style={styles.mainView}>
            <View style={[styles.vew1, { marginBottom: 5, alignSelf: 'center', alignContent: 'center', alignItems: 'center' }]}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', padding: 10, borderBottomWidth: 1, borderBlockColor: colors.FOOTERTOP }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textStyle}>{"Booking Count"}</Text>
                        <View>
                            <Text style={styles.textStyleBold}>{"10"}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textStyle}>{"Today"}</Text>
                        <View>
                            <Text style={styles.textStyleBold}>{"$100"}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textStyle}>{"This Month"}</Text>
                        <View>
                            <Text style={styles.textStyleBold}>{"$1000"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', minWidth: 250, paddingVertical: 15 }}>
                    <View>
                        <Text style={styles.textStyleBold}>{"Total Earning"}</Text>
                    </View>
                    <View>
                        <Text style={styles.textStyleBoldColor}>{"$5000"}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
            {tabIndex>=0?
                    <DriverEarningRidelist data={bookingData} tabIndex={tabIndex} ></DriverEarningRidelist>
                :null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        margin: 5,
        marginTop: 40,
    },
    vew1: {
        width: '100%',
        borderRadius: 10,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        backgroundColor: colors.WHITE,
        padding: 5
    },
    textStyle: {
        fontSize: 15,
        fontFamily: 'Roboto-Regular'
    },
    textStyleBold: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold'
    },
    textStyleBoldColor: {
        fontSize: 22,
        fontFamily: 'Roboto-Bold',
        color: colors.BALANCE_GREEN
    }
});
