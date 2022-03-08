import { Text, View, } from 'react-native'

const LoginPage = () => {
    return (
        <View>
            <TextInput
                onChangeText={(val) => this.setState({ username: val })}
                //keyboardType='email-address'
                //placeholder='Email or Mobile Num'
                //placeholderTextColor='rgba(225,225,225,0.7)'
                //underlineColorAndroid='transparent' 
                />
            <TextInput
                onChangeText={(val) => this.setState({ password: val })}
                //placeholder='Password'
                //placeholderTextColor='rgba(225,225,225,0.7)'
                //underlineColorAndroid='transparent'
                //secureTextEntry 
                />
        </View>
    );
}

export default LoginPage;