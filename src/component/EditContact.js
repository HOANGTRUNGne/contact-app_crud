import React, {useState} from 'react';
import './App.css'


function EditContact(props) {
    const { formEditValues, setFormEditValues, contacts, setContacts, isDisabled, setIsDisabled } = props
    const {name, mail} = formEditValues


    // handle input
    const initialValues = {name: "", mail: ""}
    const handleChangeEdit = (e) => {
        const {name, value} = e.target
        setFormEditValues({...formEditValues, [name]: value})
    }



    // handle submit
    const handleEdit = (e) => {
        e.preventDefault()
        if (formEditValues.name === "" || formEditValues.mail === "") {
            alert("Don't Empty")
            return
        }
        const updateContact = contacts.map(contact => {
            if (contact.id === formEditValues.id) {
                return {...contact, name: name, mail: mail}
            }
            return contact;
        });

        setContacts(updateContact);
        setFormEditValues(initialValues)
        setIsDisabled(true)
    }

    return (
        <div className={"form-main"}>
            <form onSubmit={handleEdit}>
                <h3>Update Contact</h3>
                <div className={'container-input'}>
                    <input
                        type="text"
                        placeholder="Your name.."
                        name={"name"}
                        value={name}
                        onChange={handleChangeEdit}
                        disabled={isDisabled}
                    />

                    <input
                        type="text"
                        placeholder="Your mail.."
                        name={'mail'}
                        value={mail}
                        onChange={handleChangeEdit}
                        disabled={isDisabled}
                    />

                    <button>Update Now</button>
                </div>
            </form>
        </div>
    );

}

export default EditContact;