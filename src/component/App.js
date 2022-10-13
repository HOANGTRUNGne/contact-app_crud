import React, {useState} from "react";
import './App.css';
import AddContact from "./AddContact"
import EditContact from "./EditContact";
import ContactList from "./ContactList"

function App() {
    const [contacts, setContacts] = useState([])

    // search form
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResult, setSearchResult] = useState()

    //Add New Contact
    const addContact = (newContact) => {
        setContacts([...contacts, {id: Date.now(), ...newContact}])
    }

    // Remove contact
    const removeContact = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id
        })
        setContacts(newContactList)
    }

    // Edit Contact
    const [formEditValues, setFormEditValues] = useState({})
    const [isDisabled, setIsDisabled] = useState(true)

    // const updateContact = (contact) =>{
    //     const getId = contacts.find((item) => item.id === contact.id)
    //     console.log(getId)
    // }

    // Search contact list
    const handleSearch = (searchTerm) => {
        console.log(searchTerm)
        setSearchTerm(searchTerm)

        if (searchTerm !== "") {
            const newContactList = contacts.filter((contact) => {
                return Object.values(contact)
                    .join("")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                // Xin Chao Ne  -> xinchaone
            })
            return setSearchResult(newContactList)
        } else {
            setSearchResult(contacts)
        }
    }

    return (
        <div className={"container"}>
            <h1 className={"header"}>Contact Manager</h1>

            <div className={"container-form"}>
                <AddContact addContact={addContact}/>

                <EditContact contacts={contacts} setContacts={setContacts}
                             formEditValues={formEditValues} setFormEditValues={setFormEditValues}
                             isDisabled={isDisabled} setIsDisabled={setIsDisabled}
                />

            </div>

            <ContactList
                // search
                propsContact={searchTerm.length < 1 ? contacts : searchResult}
                propsSearch={searchTerm}
                searchKeyword={handleSearch}

                // delete
                getIdRemove={removeContact}

                // edit
                setFormEditValues={setFormEditValues}

                isDisabled={isDisabled} setIsDisabled={setIsDisabled}

            />
        </div>
    );
}

export default App;


