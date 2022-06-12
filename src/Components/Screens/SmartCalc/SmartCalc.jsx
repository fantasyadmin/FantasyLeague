import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import React, { useContext } from 'react';
import { profilePic } from '../../../../assets/exports';
import {
    UserDataContext,
    LeagueInfoContext,
    FantasyTeamInfoContext,
    LeaguePlayersInfoContext,
    MatchInfoContext,
    LeagueTeamsInfoContext
} from '../../Context/UserContext';
//import { TempUserDataContext, TempUserDataContextProvider } from '../../Context/TempUserContext;'

export default function SmartCalc(props) {
    const { userData, setUserData } = useContext(UserDataContext);
    const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
    const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);
    const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
    const { matchData, setMatchData } = useContext(MatchInfoContext);
    const { leagueTeamsData, setLeagueTeamsData } = useContext(LeagueTeamsInfoContext);
    //const { TempUserData, setTempUserData } = useContext(TempUserDataContext);


    return (
        <View style={styles.root}>
            <Text></Text>
            <Text style={styles.text1}>השוואת שחקנים</Text>
            <View style={styles.top}>
                <Image source={profilePic} style={styles.pic} /><View>
                </View>
                <Text style={styles.text}>       </Text>
            </View>

            <Text></Text>
            <Text></Text>
            <Text style={styles.text}>  שם הליגה:  </Text>
            <Text></Text>
            <Text style={styles.text}>  מספר משחקים: </Text>
            <Text></Text>

            <Text></Text><Text></Text><Text></Text>
            <Text style={styles.text}>ביצועים אישיים</Text>
            <Text></Text>
            <Text style={styles.text}>  ציון שחקן:  </Text>
            <Text></Text>
            <Text style={styles.text}>  נצחונות:  </Text>
            <Text></Text>
            <Text style={styles.text}>  שערים:  </Text>
            <Text></Text>
            <Text style={styles.text}>  בישולים:  </Text>
            <Text></Text>
            <Text style={styles.text}>  שערים שספג:  </Text>
            <Text></Text>
            <Text style={styles.text}>  פנדלים שהוחמצו:  </Text>
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