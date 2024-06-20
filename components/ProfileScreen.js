import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import { Entypo, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';

const ProfileScreen = () => {
    const profileData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        mobile: '+1234567890',
        referralId: 'REF123456',
        vehicleType: 'SUV',
        rating: '4.5',
    };

    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [modalVisible, setModalVisible] = useState(false);
    const [profileImage, setProfileImage] = useState('https://placekitten.com/200/200'); // Replace with actual image source

    const editProfile = () => {
        // Implement edit profile logic here
    };

    const deleteAccount = () => {
        // Implement delete account logic here
    };

    const languageOptions = [
        { label: 'English', value: 'English' },
        { label: 'Spanish', value: 'Spanish' },
        { label: 'French', value: 'French' },
        // Add more languages as needed
    ];

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            setProfileImage(result.uri);
            setModalVisible(false); // Close the modal after setting the image URI
        }
    };

    const openImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {
            setProfileImage(result.uri);
            setModalVisible(false); // Close the modal after setting the image URI
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.imageContainer}>
                    <Image
                        source={{ uri: profileImage || 'https://placekitten.com/200/200' }} // Ensure a fallback image URI
                        style={styles.profileImage}
                    />
                    <Entypo name="edit" size={24} color="#808080" style={styles.editIcon} />
                </TouchableOpacity>
                <Text style={styles.profileName}>{`${profileData.firstName} ${profileData.lastName}`}</Text>
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Ionicons name="mail" size={24} color="#808080" />
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoText}>Email</Text>
                            <Text style={styles.infoValue}>{profileData.email}</Text>
                        </View>
                        <Feather name="edit-3" size={20} color="#808080" style={styles.editIcon} />
                    </View>
                    <View style={styles.infoRow}>
                        <MaterialIcons name="phone" size={24} color="#808080" />
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoText}>Mobile</Text>
                            <Text style={styles.infoValue}>{profileData.mobile}</Text>
                        </View>
                        <Feather name="edit-3" size={20} color="#808080" style={styles.editIcon} />
                    </View>
                    <View style={styles.infoRow}>
                        <MaterialIcons name="language" size={24} color="#808080" />
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoText}>Language</Text>
                            <View style={styles.languagePicker}>
                                <RNPickerSelect
                                    value={selectedLanguage}
                                    onValueChange={(value) => setSelectedLanguage(value)}
                                    items={languageOptions}
                                    placeholder={{}}
                                    style={{
                                        inputIOS: styles.pickerInput,
                                        inputAndroid: styles.pickerInput,
                                        iconContainer: {
                                            top: 10,
                                            right: 12,
                                        },
                                    }}
                                    useNativeAndroidPickerStyle={false}
                                    Icon={() => {
                                        return <Ionicons name="arrow-down" size={24} color="#333333" />;
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <MaterialIcons name="card-giftcard" size={24} color="#808080" />
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoText}>Referral ID</Text>
                            <Text style={styles.infoValue}>{profileData.referralId}</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <MaterialIcons name="directions-car" size={24} color="#808080" />
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoText}>Vehicle Type</Text>
                            <Text style={styles.infoValue}>{profileData.vehicleType}</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <MaterialIcons name="star" size={24} color="#808080" />
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoText}>Driver Rating</Text>
                            <Text style={styles.infoValue}>{profileData.rating}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={deleteAccount} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={openCamera} style={styles.modalOption}>
                            <Ionicons name="camera" size={24} color="#000" />
                            <Text style={styles.modalOptionText}>Take a Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openImagePicker} style={styles.modalOption}>
                            <Ionicons name="image" size={24} color="#000" />
                            <Text style={styles.modalOptionText}>Upload a Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalOption}>
                            <Ionicons name="close" size={24} color="#000" />
                            <Text style={styles.modalOptionText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    profileContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    imageContainer: {
        position: 'relative',
        marginTop: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    editIcon: {
        position: 'absolute',
        bottom: 5,
        right: 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 5,
    },
    profileName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoContainer: {
        marginTop: 15,
        width: '100%',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    infoTextContainer: {
        flex: 1,
        marginLeft: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 5,
    },
    infoValue: {
        fontSize: 14,
        color: '#666666',
    },
    languagePicker: {
        marginTop: 5,
        justifyContent: 'center',
    },
    pickerInput: {
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        color: '#333333',
    },
    deleteButton: {
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#FF0000',
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    deleteButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    modalOptionText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
});

export default ProfileScreen;
