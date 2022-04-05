import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';


export const nickname = '';




export default function UserInfo(props) {
    const [user, setUser] = useState(props.user)
    const [nickname, setNiackname] = useState(props.nickname)
    const [player, setPlayer] = useState(props.player)
    const [league, setLeague] = useState(props.league)
    const [match, setMatch] = useState(props.match)
    const [fantasyTeam, setFantasyTeam] = useState(props.fantasy_team)
    const [leaguePlayers, setLeaguePlayers] = useState(props.leaguePlayers)


    storeData = () => {

    }




    return (
        <View>
            <Text>UserInfo</Text>
        </View>
    )
}

const styles = StyleSheet.create({})