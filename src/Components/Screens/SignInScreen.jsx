import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { image } from '../../../assets/exports';
import React, { useState, useContext } from 'react';
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { UserDataContext } from '../Context/UserContext.js';



export default function SignInScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { userData, setUserData } = useContext(UserDataContext);


    const navigation = useNavigation();

    const params = JSON.stringify({
        "email": username,
        "password": password,
    });


    const onSignInPress = () => {
        fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/LogIn/5', {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            }),
            body: params
        })
            .then(res => {
                //console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    if (result.nickname != undefined) {
                        setUserData({
                            nickname: result.nickname,
                            user_id: result.user_id,
                            picture: result.picture,
                            league_name: result.league_name,
                            league_id: result.league_id,
                            teams: result.listing,
                            players: result.listing, //create an api response with 
                            player_score: result.player_score, 
                            team_budget: result.team_budget,
                            team_id: result.team_id,
                            team_points: result.team_points,
                            total_assists: result.total_assists,
                            total_goals_recieved: result.total_goals_recieved,
                            total_goals_scored: result.total_goals_scored,
                            total_pen_missed: result.total_pen_missed,
                            total_wins: result.total_wins,
                            games_played: result.games_played,
                        })
                        console.log("data received = ", result);
                        console.log("==========================");
                        console.log("user data3 = ", result.user_id);
                    }
                    else {
                        alert("אחד או יותר מהפרטים שהזנת אינם נכונים, נסה שנית");
                        navigation.navigate('Sign In');
                    }
                },
                (error) => {
                    console.log("err post=", error);
                    navigation.navigate('Sign In');
                })
            .then(navigation.navigate('Bottom', userData));

    }


    const onForgotPasswordPress = () => {
        console.warn('forgot password');
        navigation.navigate('Forgot Password');
    }

    const onCreateNewAccountPress = () => {
        console.warn('create new account');
        navigation.navigate('Sign Up');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image source={image} style={styles.pic} />
                <Text style={styles.text}>כניסת משתמש קיים</Text>
                <Text>{username}</Text>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder={'שם משתמש'}
                    style={styles.container}
                />
                <Text>{password}</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder={'סיסמה'}
                    style={styles.container}
                    secureTextEntry
                />
                <CustomButton text="כניסה" onPress={onSignInPress} />
                <CustomButton text="שכחתי סיסמה" onPress={onForgotPasswordPress} />
                <CustomButton text="צור חשבון חדש" onPress={onCreateNewAccountPress} />
                <Text>     </Text>
                <Text>     </Text>
                <Text>     </Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '70%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 5,
        textAlign: 'right'
    },
    root: {
        width: '100%',
        alignItems: 'center',
        padding: 0,
        backgroundColor: '#4472c4',
    },
    pic: {
        width: '100%',
        height: 420,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
})