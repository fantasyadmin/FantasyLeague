import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../CustomComps/CustomButton';
import { image } from '../../../../assets/exports';
import { useNavigation } from '@react-navigation/native';
import { UserDataContext, LeagueInfoContext } from '../../Context/UserContext';


export default function CreateLeague({ registerUser, user_id }) {
    const { userData, setUserData } = useContext(UserDataContext);
    const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
    const [leagueName, setLeagueName] = useState('');
    const [leagueRules, setLeagueRules] = useState('');
    const [invite_url, setInvite_url] = useState('');

    const navigation = useNavigation();


    const data = JSON.stringify({
        "user_id": userData.user_id,
        "league_name": leagueName,
        "league_picture": '',
        "league_rules": leagueRules,
        "league_id": leagueData.league_id,
        "invite_url": invite_url
    });

    const onInvitePress = () => {
        console.log("llllllllllllllllllllleeeeaaaagggguuueeeeee", leagueData.league_id);
        console.log("llllllllllllllllllllleeeeaaaagggguuueeeeee3333333", userData.user_id);

        navigation.navigate('Contacts List')
    }

    const onCreateLeaguePress = () => {
        console.log("create league = ", data);
        fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/CreateNewLeague', {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            }),
            body: data
        })
            .then(res => {
                console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch POST= ", result);
                },
                (error) => {
                    console.log("err post=", error);
                });
        Alert.alert(
            "ברוכים הבאים ל-Fantasy League צ'כונה! ",
            " עכשיו מה שנשאר לעשות זה להיכנס באמצעות הפרטים שהזנת ולהזמין את החבר'ה דרך מסך הבית",
            [
                {
                    text: "אישור",
                },
            ],
            { cancelable: false }
        );
        navigation.navigate('Sign In')
    }

    return (
        <View style={styles.back}>
            <View style={styles.container}>
                <Text>
                    {'\n\n\n\n'}
                </Text>
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
                    onChangeText={setLeagueName}
                    style={styles.container1}
                />
            </View>

            <View style={styles.text}>
                <Text style={styles.text}>     צ'אט הליגה:    </Text>
                <TextInput
                    multiline
                    numberOfLines={8}
                    value={invite_url}
                    placeholder={'הזן את הקישור לקבוצת הוואצאפ '}
                    style={styles.inputField}
                    onChangeText={setInvite_url}
                />
            </View>
            <View style={styles.text}>
                <Text style={styles.text}>     חוקי הליגה:    </Text>
                <TextInput
                    multiline
                    numberOfLines={8}
                    value={leagueRules}
                    placeholder={'הזן את חוקי הליגה'}
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
    )
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#4472c4',
        height: "100%"
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
        height: 50,
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
