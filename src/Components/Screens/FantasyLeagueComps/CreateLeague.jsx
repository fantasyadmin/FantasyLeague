import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../CustomComps/CustomButton';
import { image } from '../../../../assets/exports';
import { postCreateLeague } from '../../../../APIActions/apiRequests';
import { useNavigation } from '@react-navigation/native';


export default function CreateLeague(props) {

    const navigation = useNavigation();

    const [leagueName, setLeagueName] = useState('');
    const [leagueRules, setLeagueRules] = useState('');
    //const [userId, setUserId] = useState(props.user_id);

    const data = JSON.stringify({
        "league_name": leagueName,
        "league_picture": '',
        "league_rules": leagueRules,
        "user_id": props.userId
    });

    const onInvitePress = () => {
        console.warn('invite friends');
        //contacts API
    }

    const onCreateLeaguePress = () => {
        console.log("create league = ", data);
        postCreateLeague(data);
        //submit to DB and navigate to Home
        navigation.navigate('Bottom')
    }

    return (
        <ScrollView>
            <View style={styles.back}>

                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <View style={styles.container}>
                    <Text>                       </Text>
                    <Image source={image} style={styles.pic} />
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>

                <View style={styles.container}>
                    <Text style={styles.text}>   שם הליגה:   </Text>
                    <TextInput
                        value={leagueName}
                        placeholder={'שם הליגה'}
                        onChangeText={setLeagueName} //{(text) => this.setState({email: text})}
                        style={styles.container1}
                    />
                </View>

                <View style={styles.text}>
                    <Text style={styles.text}>     חוקי הליגה:    </Text>
                    <TextInput
                        multiline
                        numberOfLines={8}
                        value={leagueRules}
                        placeholder={'חוקי הליגה'}
                        style={styles.inputField}
                        onChangeText={setLeagueRules}
                    />
                </View>

                <View style={styles.container}>
                    <Text>                     </Text>
                    <CustomButton text="הזמן חברים" onPress={onInvitePress} />
                    <Text>                     </Text>
                    <CustomButton text="צור ליגה" onPress={onCreateLeaguePress} />
                </View>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#4472c4',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        padding: 5
    },
    pic: {
        width: '70%',
        borderRadius: 300,
        height: 300,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    text2: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    inputField: {
        height: 100,
        margin: 30,
        borderWidth: 1,
        padding: 10,
        color: 'white',
    },
    container1: {
        backgroundColor: '#fff',
        width: '70%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 5,
        textAlign: 'right'
    },
})
