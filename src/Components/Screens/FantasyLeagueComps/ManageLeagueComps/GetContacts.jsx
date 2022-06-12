//https://docs.expo.dev/versions/latest/sdk/contacts/

import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import { ContactField } from './ContactField.jsx';
import { ContactsForSMS } from '../../../Context/ContactsContext.js';
import ContactsList from './Contacts.jsx';


export default function GetContacts() {
  const [contactList, setContactList] = useState([{ name: '', phone: '' },])
  const [phoneContacts, setPhoneContacts] = useState()
  const { contactsContext, setContactsContext } = useContext(ContactsForSMS);


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
            if (a.name !== undefined || a.phoneNumbers[0].number !== undefined) {
              var contact = { name: a.name, phone: a.phoneNumbers[0].number }
              console.log('contact saved: ', contact);
              setContactList(prevState => [...prevState, { 'name': a.name, 'phone': a.phoneNumbers[0].number }]);
            }
            else { console.log("empty....."); }
          });
          console.log("00000000000000000000000000000000000000000000000000000000000000000000000000000000000");
          console.log("234242423", contactList[100]);
        }
      }
    }).then(
      contactList.map((x, ind) => {
        return x !== null ? <ContactField
          key={ind}
          name={x.name}
          phone={x.phone}
          icon={logos[ind]}
          tellSon={markPlayerToSell}
        /> : null
      })
    );
  }, []);



  return (
    <View>
      {contactList.map((x, ind) => {
        return x !== null ? <ContactField
          key={ind}
          name={x.name}
          phone={x.phone}
          icon={logos[ind]}
          tellSon={markPlayerToSell}
        /> : null
      })}
    </View>
  );
}