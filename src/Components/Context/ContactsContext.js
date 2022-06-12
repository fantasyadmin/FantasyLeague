import React, { useState } from 'react';

const contactsToInvite = { contact: [] };
const ContactsForSMS = React.createContext(contactsToInvite);

const ContactsForSMSProvider = ({ children }) => {
    const [contacts, setContacts] = useState(contactsToInvite);


    return (
        <ContactsForSMS.Provider value={{ contacts, setContacts }}>
            {children}
        </ContactsForSMS.Provider>
    );
};





export {
    ContactsForSMS, ContactsForSMSProvider,
};