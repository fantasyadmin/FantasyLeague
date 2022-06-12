import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import TeamInTable from '../TableComps/TeamInTable'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserDataContext, LeaguePlayersInfoContext } from '../../../Context/UserContext';
import { ContactsForSMS } from '../../../Context/ContactsContext.js';
import { ScrollView } from 'react-native-gesture-handler';
import ContactField from './ContactField';
import * as Contacts from 'expo-contacts';



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

export default function ContactsList(props) {
    const { userData, setUserData } = useContext(UserDataContext);
    const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
    const { contactsContext, setContactsContext } = useContext(ContactsForSMS);
    const [contactList, setContactList] = useState([{ name: 'aaa', phone: 'aaa' },])
    const [rend, setRend] = useState('')

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
                    //const contact = data[0];
                    //console.log(contact);
                    console.log("=============sorting============");
                    const sortContacts = [].concat(data).sort();
                    sortContacts.forEach(a => {
                        if (a.name !== undefined || a.phoneNumbers[1].number !== undefined) {
                            var contact = { name: a.name, phone: a.phoneNumbers[0].number }
                            //console.log('contact saved: ', contact);
                            setContactList(prevState => [...prevState, { 'name': a.name, 'phone': a.phoneNumbers[0].number }]);
                            setRend(
                                prevState => [...prevState, <ContactField
                                    //key={ind}
                                    name={a.name}
                                    phone={a.phoneNumbers[0].number}
                                //tellSon={markPlayerToWatch}
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


    {
        contactList.map((x, ind) => {
            <ContactField
                key={ind}
                name={x.name}
                phone={x.number}
            //icon={logos[ind]}
            //tellSon={markPlayerToWatch}
            />
        })
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>אנשי קשר להזמנה</Text>
            <Image source={image} style={styles.pic} />
            <ScrollView>
                <Text>
                    {rend}
                </Text>
            </ScrollView>
            <View style={styles.bottomSec}>
                <Text>
                    בחרת {0} אנשי קשר
                </Text>
                <Text>
                    שלח הזמנות דרך SMS
                </Text>
            </View>
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
})