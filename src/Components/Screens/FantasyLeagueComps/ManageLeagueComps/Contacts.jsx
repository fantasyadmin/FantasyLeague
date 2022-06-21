import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import TeamInTable from '../TableComps/TeamInTable'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import {
    UserDataContext,
    LeaguePlayersInfoContext,
    LeagueInfoContext,
    InviteContactsContext
} from '../../../Context/UserContext';
import { ContactsForSMS } from '../../../Context/ContactsContext.js';
import { ScrollView } from 'react-native-gesture-handler';
import ContactField from './ContactField';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';



export default function ContactsList(props) {
    const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
    const [rend, setRend] = useState('')
    const [select, setSelect] = useState(false)
    const numbers = []

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync(
                    {
                        fields: [
                            //Contacts.Fields.Emails, 
                            Contacts.Fields.Name,
                            Contacts.Fields.PhoneNumbers,
                            //Contacts.Fields.LastName,
                        ],
                    }
                );
                if (data.length > 0) {
                    console.log("=============sorting============");
                    const sortContacts = [].concat(data).sort();
                    sortContacts.forEach(a => {
                        if (a.name !== undefined || a.phoneNumbers[1].number !== undefined) {
                            setRend(
                                prevState => [...prevState, <ContactField
                                    //key={ind}
                                    name={a.name}
                                    phone={a.phoneNumbers[0].number}
                                    tellSon={(phone) => markPlayerToWatch(phone)}
                                    selected={markedSelect}
                                />]
                            )
                        }
                        else { console.log("empty....."); }
                    });
                }
            }
        })(
        );
    }, []);

    function markedSelect() {
        if (select) {
            setSelect(false);
        }
        else {
            setSelect(true);
        }
        return select
    }

    function markPlayerToWatch(phone) {
        console.log("number added: ", phone);
        numbers.push({ phone })
        console.log("contacts: ", numbers);
    }

    async function sendMessage() {
        var send = ''
        numbers.forEach(x => {
            send += ',' + toString(x.phone)
            console.log(x.phone);
        });
        console.log("sending to: ", JSON.stringify(send));
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            const { result } = await SMS.sendSMSAsync(
                [send],
                'אתה לא מאמין איזו אפליקציה!' +
                '\n הצטרף לליגת הפנטזי עם כל החברים' +
                ' \n פשוט הירשם לליגה מספר    ' + [leagueData.league_id] +
                '\n\nלהורדת האפליקציה היכנס:\nwww.FantasyLeagueSchoona.com\n',
                {
                //     attachments: {
                //         uri: 'www.FantasyLeagueSchoona.com',
                //         mimeType: 'image/png',
                //         filename: 'myfile.png',
                //     },
                }
            );
            console.log(result);
        } else {
            console.log("check sms function");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>אנשי קשר להזמנה</Text>
            <Image source={image} style={styles.pic} />
            {/* <ScrollView>
                <Text>
                    {rend}
                </Text>
            </ScrollView>
            <View style={styles.bottomSec}>
                <Text>
                    בחרת {numbers.length} אנשי קשר
                </Text>
                <Text>
                    שלח הזמנות דרך SMS
                </Text>
            </View> */}
            <Pressable onPress={sendMessage}>
                <Text style={styles.click}>לחץ כדי להזמין את החבר'ה!</Text>
            </Pressable>
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
    bottomSec: {
        //flex: 1,
        flexDirection: 'row'
    },
    click: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
        textDecorationLine: 'underline'
    },
})