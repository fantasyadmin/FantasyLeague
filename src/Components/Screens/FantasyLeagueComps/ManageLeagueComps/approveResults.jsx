import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import TeamInTable from '../TableComps/TeamInTable';
import PlayersInLeague from '../../ManageTeam/createPlayersList';
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import {
    UserDataContext,
    LeagueInfoContext,
    LeaguePlayersInfoContext
} from '../../../Context/UserContext';
import { ScrollView } from 'react-native-gesture-handler';
import { TempUserDataContext } from '../../../Context/TempUserContext';

const logos = [
    <FontAwesome5 name="crown" size={23} color="#993" />,
    <MaterialCommunityIcons name="weight-lifter" size={29} color="#900" />,
    <Icon name="rocket" size={29} color="#900" />,
    <Icon name="rocket" size={29} color="#900" />,
    <Icon name="rocket" size={29} color="#900" />,
    <Icon name="rocket" size={29} color="#900" />,
    <Icon name="rocket" size={29} color="#900" />,
    <Icon name="rocket" size={29} color="#900" />,
]

export default function ApproveResults(props) {
    const { userData, setUserData } = useContext(UserDataContext);
    const { leagueData } = useContext(LeagueInfoContext);
    const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
    const [renderData, setRenderData] = useState()

    //fetch שמקבל את רשימת התוצאות שצריך לאשר
    useEffect(() => {
        const data = {
            league_id: 11,  //leagueData.league_id,
        };
        console.log(data);
        try {
            fetch(
                "https://proj.ruppin.ac.il/bgroup89/prod/api/MatchActiveInLeague",
                {
                    method: "POST",
                    headers: new Headers({
                        "Content-type": "application/json; charset=UTF-8",
                        Accept: "application/json; charset=UTF-8",
                    }),
                    body: JSON.stringify(data),
                }
            ).then(res => {
                console.log('res=', JSON.stringify(res));
                return res.json()
            })
                .then(
                    (result) => {
                        console.log(result);
                        const approvals = [].concat(result);
                        const leaguePlayers = [].concat(LeaguePlayersData)
                        console.log("league players =======", leaguePlayers);
                        var playersList = approvals.map((x, ind) => {
                            // שמייצר שורה בטבלה רק לשחקנים עם תוצאות שלא אושרו עדיין (מהפאצ')
                            leaguePlayers.forEach(p => {
                                 if (x.user_id == p.user_id) {
                                    <PlayersInLeague
                                        key={x.user_id}
                                        nickname={p.nickname}
                                        //points={x.player_score}
                                        icon={logos[ind]}
                                        user_id={x.user_id}
                                    //tellSon={markPlayerToWatch}
                                    />
                                 }
                             });
                        })
                        setRenderData(playersList)
                    })

        } catch (err) {
            console.log(err);
        }
    }, [])





    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>תוצאות ממתינות לאישור</Text>
            <Image source={image} style={styles.pic} />
            <Text> </Text>
            <Text style={styles.text}>בחר שחקן לצפיה בתוצאות</Text>
            <ScrollView>
                {renderData}
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#4472c4',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    pic: {
        width: '70%',
        borderRadius: 300,
        height: 300,
    },
})