import React, {useRef} from 'react';
import ContactCard from "./ContactCard";

const ContactList = (props) => {
   // function  as props
    const {getIdRemove, setFormEditValues, setIsDisabled} = props

    const handleDelete = (id) => {
        getIdRemove(id)
    }
    const handleEdit = (contact) =>{
        setIsDisabled(false)
        setFormEditValues(contact)
    }


    const inputEl = useRef("")
    const getSearchTerm = () => {
        // console.log(inputEl.current.value)
        props.searchKeyword(inputEl.current.value)
    }

    const RenderContactList = props.propsContact.map(contact => {
        return (
            <ContactCard contact={contact}  clickHandleDelete={handleDelete} clickHandleEdit={handleEdit} key={contact.id} />

        )
    })

    return (
        <div>
            <h3 className={"header-small"}>Contact List</h3>

            <div className={"container-search"}>
                <input
                    ref={inputEl}
                    type="text"
                    id="searchform"
                    value={props.propsSearch}
                    onChange={getSearchTerm}
                    placeholder="Search for names.."/>
            </div>

            {RenderContactList}
        </div>
    );
};

export default ContactList;