import { TextInput, Text, View, StyleSheet, TouchableOpacity, } from 'react-native'





const LoginPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.share}>

                <View style={styles.ButDes}>
                    <Text>שם משתמש:     </Text>
                    <TextInput
                        onChangeText={(val) => this.setState({ username: val })}
                        keyboardType='email-address'
                        placeholder='User Name'
                        placeholderTextColor='rgba(225,225,225,255)'
                        underlineColorAndroid='black'
                    />
                </View>


                <View style={styles.ButDes}>
                    <Text>סיסמא:             </Text>
                    <TextInput
                        onChangeText={(val) => this.setState({ password: val })}
                        placeholder='Password'
                        placeholderTextColor='rgba(225,225,225,255)'
                        underlineColorAndroid='black'
                        secureTextEntry
                    />
                </View>


                <View style={styles.ButDes}>
                    <TouchableOpacity style={styles.Button1} onPress={''}>
                        <Text style={styles.Button1}>התחבר</Text>
                    </TouchableOpacity>
                    <Text>                               </Text>
                    <TouchableOpacity style={styles.Button} onPress={''}>
                        <Text>שכחת סיסמא?</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    );
}

export default LoginPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        direction: 'rtl',
        justifyContent: 'center',
        backgroundColor: '#4472c4',
    },
    share: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        direction: 'rtl',
    },
    Button1: {
        alignItems: "center",
        backgroundColor: "#4472c4",
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        padding: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000'
    },
    Button: {
        alignItems: "center",
    },
    ButDes: {
        flexDirection: 'row',
    },
});