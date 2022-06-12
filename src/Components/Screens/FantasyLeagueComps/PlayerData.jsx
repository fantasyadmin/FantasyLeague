import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import React, { useContext } from 'react';
import CustomButton from '../../CustomComps/CustomButton';
import {
    UserDataContext,
    LeagueInfoContext,
    FantasyTeamInfoContext,
    LeaguePlayersInfoContext,
    MatchInfoContext,
    LeagueTeamsInfoContext
} from '../../Context/UserContext';
import { TempUserDataContext } from '../../Context/TempUserContext';


export default function PlayerData(props) {
    const { userData, setUserData } = useContext(UserDataContext);
    const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
    const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);
    const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
    const { matchData, setMatchData } = useContext(MatchInfoContext);
    const { leagueTeamsData, setLeagueTeamsData } = useContext(LeagueTeamsInfoContext);
    const { TempUserData, setTempUserData } = useContext(TempUserDataContext);


    return (
        <View style={styles.root}>
            <Text></Text>
            <Text style={styles.text1}>פרופיל שחקן</Text>
            <View style={styles.top}>
                <Image source={profilePic} style={styles.pic} /><View>
                </View>
                <Text style={styles.text}>{TempUserData.nickname}       </Text>
            </View>

            <Text></Text>
            <Text></Text>
            <Text style={styles.text}>  שם הליגה:  {leagueData.league_name}</Text>
            <Text></Text>
            <Text style={styles.text}>  מספר משחקים:  {TempUserData.games_played}</Text>
            <Text></Text>

            <Text></Text><Text></Text><Text></Text>
            <Text style={styles.text}>ביצועים אישיים</Text>
            <Text></Text>
            <Text style={styles.text}>  ציון שחקן:  {TempUserData.player_score}</Text>
            <Text></Text>
            <Text style={styles.text}>  נצחונות:  {TempUserData.total_wins}</Text>
            <Text></Text>
            <Text style={styles.text}>  שערים:  {TempUserData.total_goals_scored}</Text>
            <Text></Text>
            <Text style={styles.text}>  בישולים:  {TempUserData.total_assists}</Text>
            <Text></Text>
            <Text style={styles.text}>  שערים שספג:  {TempUserData.total_goals_recieved}</Text>
            <Text></Text>
            <Text style={styles.text}>  פנדלים שהוחמצו:  {TempUserData.total_pen_missed}</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    root: {
        width: '100%',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#4472c4',
        height: '100%',
        paddingTop: 50,
    },
    pic: {
        width: 100,
        borderRadius: 100,
        height: 100,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    text1: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        paddingRight: '35%'
    },
    top: {
        flexDirection: 'row',
        width: '100%',
    },

})  