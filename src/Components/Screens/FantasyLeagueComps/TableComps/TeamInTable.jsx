import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useContext, useState, useMemo } from 'react';
import ModalFantasyTeam from '../../../CustomComps/ModalFantasyTeam';
import { LeagueInfoContext } from '../../../Context/UserContext.js'
import { image } from '../../../../../assets/exports';

export default function TeamInTable(props) {
    const { leagueData } = useContext(LeagueInfoContext);
    const [findTeam, setfindTeam] = useState([])
    const [leagueTeams, setleagueTeams] = useState([])
    const [teamPlayers] = useMemo(
        () => leagueTeams.filter((team) => team.user_id === props.user_id),
        [leagueTeams],
    );

    function SetTeam(teamPlayers) {
        setfindTeam(teamPlayers);
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
                <ModalFantasyTeam player={props.nickname} user_id={props.user_id} data={teamPlayers} />
            ) : (
                <View style={styles.noResults}>
                    <Text>  אין קבוצה</Text>
                </View>
            )}
            <Text style={styles.text2}>נק': {props.points}</Text>
            <Text style={styles.text3}>{props.nickname}</Text>
            {props.picture ? (
                <Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/fantasyleagueneighborhoo-fe0e1.appspot.com/o/" + props.picture + "?alt=media&token=e96a14e8-36bf-4c1b-b58d-a75e1863a590"}}
                    style={styles.profilePic} />
            ) : (
                <Image source={image} style={styles.profilePic} />

            )}
            <Text style={styles.text}>   {props.place}  </Text>
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
        //justifyContent: 'space-around',
        padding: 0,
        backgroundColor: '#4472c4',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 5,
        marginVertical: 5,
        width: 360,
    },
    text: {
        flexDirection: 'row',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 35,
    },
    text2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        fontWeight: 'bold',
        color: 'white',
        width: 90,
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
        fontSize: 22,
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
    profilePic: {
        marginTop: 10,
        width: 60,
        height: 60,
        borderColor: '#000000',
        borderWidth: 2,
        //borderWidth: 1,
        borderRadius: 100,
        overflow: 'hidden',
    },
})