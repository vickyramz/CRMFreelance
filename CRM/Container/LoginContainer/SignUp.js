import React from "react";
import { Alert, View, Image, Text, ImageBackground, BackHandler, TouchableOpacity, KeyboardAvoidingView, StyleSheet, TextInput, SafeAreaView } from "react-native";



export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: null, isValidEmail: false, isDateValid: false, Dates: 'Date of Birth', full_name: null, phone_number: null, email_address: null, isDateTimePickerVisible: false, ImageSource: null, valueInput: "" };

    }



    hideDateTimePicker = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        this.setState({ isDateTimePickerVisible: false, Dates: month + '/' + day + '/' + year, isDateValid: true });
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker(date);
    };

    showDateTimePicker = () => {
        this.setState({
            isDateTimePickerVisible: true
        })
    }


    selectPhotoTapped = () => {
        //Alert.alert("click")
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({

                    ImageSource: source

                });
            }
        });
    }

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({ email: text, isValidEmail: false })
            return false;
        }
        else {
            this.setState({ email: text, isValidEmail: true })
            console.log("Email is Correct");
        }
    }
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {

        this.props.navigation.navigate('Signin')


        return true;
    }

    ValidateSignUp = () => {
        if (this.state.full_name !== null) {
            if (this.state.phone_number !== null) {
                if (this.state.email !== null) {
                    if (this.state.isValidEmail) {
                        if (this.state.isDateValid) {
                            Alert.alert('Api yet to receive')
                        }
                        else {
                            Alert.alert('Please fill out date of birth')
                        }
                    }
                    else {
                        Alert.alert('Email is Invalid')
                    }

                } else {
                    Alert.alert('Please fill out email')
                }
            } else {
                Alert.alert('Please fill out phone number')
            }
        }
        else {
            Alert.alert('Please fill out name')
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    {/* <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={() => this.setState({ isDateTimePickerVisible: false })} /> */}
                    <ImageBackground source={require('../Assets/1--Menu.png')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ paddingTop: 20, paddingStart: 40, paddingBottom: 40, flex: 0.2 }}>
                            <Text style={{ color: 'white', fontSize: 32, fontFamily: 'TitilliumWeb-Bold' }}>Sign up</Text>
                            {/* <Text style={{ color: 'white', fontSize: 16, fontFamily: 'TitilliumWeb-Regular' }}>Welcome to KAEC</Text> */}
                            {/* <TouchableOpacity onPress={this.selectPhotoTapped} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.big_circle}>
                                    {
                                        this.state.ImageSource === null ? <Image style={styles.ImageContainer} source={require('../Assets/Forma-1.png')} /> :
                                            <Image style={styles.image_Style} source={this.state.ImageSource} />}
                                </View>
                                <View style={styles.small_circle}>
                                    <Image source={require('../Assets/Forma-11.png')} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
                                </View >
                            </TouchableOpacity> */}
                        </View>
                        <View style={{ alignItems: 'center', flex: 0.8, padding: 30 }}>

                            <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 10 }} >

                            

                            <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginBottom: 20, marginEnd: 30, alignItems: 'center', paddingTop: 10 }}>

<View style={{ alignItems: 'flex-start', width: '80%' }}>
    <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
        onChangeText={(text) => this.setState({ full_name: text })}
        placeholder='Full name' placeholderTextColor='black'
    />
</View>
<View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
    {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Icon---Username.png')} /> */}
</View>
</KeyboardAvoidingView>
                                    
                                

                                <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'flex-start' }}>
                                        <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
                                            onChangeText={(text) => this.setState({ phone_number: text })} keyboardType={'numeric'} maxLength={10}
                                            placeholder='Phone number' placeholderTextColor='black'>
                                        </TextInput>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                        {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Forma-12.png')} /> */}
                                    </View>
                                </KeyboardAvoidingView>

                                <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'space-around' }}>
                                        <TextInput style={{ height: 40, fontWeight: 'bold', justifyContent: 'flex-start', width: '100%' }}
                                            onChangeText={(text) => this.validate(text)}
                                            value={this.state.email} keyboardType={'email-address'}
                                            placeholder='Email address' placeholderTextColor='black'>
                                        </TextInput>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                        {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Shape-111.png')} /> */}
                                    </View>
                                </KeyboardAvoidingView>

                                <KeyboardAvoidingView style={{ borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', marginStart: 30, marginEnd: 30, marginBottom: 20, alignItems: 'center' }}>

                                    <TouchableOpacity onPress={this.showDateTimePicker} style={{ flexDirection: 'row' }}>
                                        <View style={{ alignItems: 'flex-start', width: '80%', justifyContent: 'flex-end' }}>
                                            <Text style={{ height: 40, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', paddingLeft: '2%', paddingTop: '3%' }}

                                            >{this.state.Dates}
                                            </Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '20%' }}>
                                            {/* <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../Assets/Forma-13.png')} /> */}
                                        </View>
                                    </TouchableOpacity>
                                </KeyboardAvoidingView>

                                <TouchableOpacity style={{ height: '12%', paddingLeft: '12%', paddingRight: '12%', alignItems: 'stretch', justifyContent: 'center' }}>
                                    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#0a70ff', flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
                                        {/* <Image source={require('../Assets/Shape-1-copy-2.png')} style={{ width: 15, height: 15, marginRight: 10 }} /> */}
                                        <Text style={{ color: 'white' }}>SIGN UP</Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin')}>
                                        <View>
                                            <Text style={{ fontSize: 14, fontFamily: 'TitilliumWeb-Regular' }} >Already have an account?  Sign in</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </View>

                            <View style={{ backgroundColor: 'white', height: 10 }} />

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ width: '50%' }}></View>
                                {/* <Image source={require('../Assets/applogo.png')} style={{ width: '40%', height: 80, resizeMode: 'contain', marginRight: '15%', alignItems: 'flex-end', justifyContent: 'flex-end' }}> */}

                                {/* </Image> */}
                            </View>

                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'gray',
        flex: 1,
        height: '100%',
        justifyContent: 'space-around',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%'
    },

    image_Style: {
        width: 100,
        height: 100,
        borderRadius: 100,
        overflow: "hidden"
    },

    ImageContainer: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain'
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#43A047',
        padding: 12,
        width: 280,
        marginTop: 12,
    },

    text: {

        color: '#fff'
    },
    big_circle: {

        marginTop: 10,
        justifyContent: 'center', alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#f2f2f2',
        borderColor: '#a6d8b2',
        borderWidth: 4

    },

    small_circle: {

        marginTop: 10, marginLeft: -20,
        borderWidth: 0.9,
        borderColor: '#fff',
        justifyContent: 'center', alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 40 / 2,
        backgroundColor: '#fff'
    }
});