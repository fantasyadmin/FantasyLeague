import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useContext, useState, useMemo } from 'react';
import ModalFantasyTeam from '../../../CustomComps/ModalFantasyTeam';
import { LeagueInfoContext } from '../../../Context/UserContext.js'

export default function TeamInTable(props) {
    const { leagueData } = useContext(LeagueInfoContext);
    const [findTeam, setfindTeam] = useState([])
    const [leagueTeams, setleagueTeams] = useState([])
    const [teamPlayers] = useMemo(
        () => leagueTeams.filter((team) => team.user_id === props.user_id),
        [leagueTeams],
    );

    function SetTeam() {
        setfindTeam(teamPlayers);
        console.log("players team for: ", props.nickname);
        console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm2222222222222", teamPlayers);
    }


    useEffect(() => {
        const data = {
            league_id: leagueData.league_id,
        };
        try {
            fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/TeamsInLeague", {
                method: "POST",
                headers: new Headers({
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json; charset=UTF-8",
                }),
                body: JSON.stringify(data),
            })
                .then((res) => {
                    return res.json();
                })
                .then((result) => {
                    //console.log({ result });
                    setleagueTeams(result);
                    SetTeam(result)
                    //console.log("=========================================================", result);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);


    return (
        <View style={styles.container}>
            {leagueTeams.length > 0 ? (
                <ModalFantasyTeam player={props.nickname} user_id={props.user_id} data={findTeam} />
            ) : (
                <View style={styles.noResults}>
                    <Text>  אין קבוצה</Text>
                </View>
            )}
            <Text style={styles.text2}>{props.points} pt.</Text>
            <Text style={styles.text3}>{props.nickname}</Text>
            <Text style={styles.text}>{props.place}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'baseline',
        justifyContent: 'space-around',
        padding: 0,
        backgroundColor: '#4472c4',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 5,
        marginVertical: 5,
        width: 320,

    },
    text: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    text2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        fontWeight: 'bold',
        color: 'white',
        width: 80,
        fontSize: 20,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    text3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    noResults: {
        backgroundColor: "red",
        borderRadius: 180,
        color: "white",
        width: 100,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
})