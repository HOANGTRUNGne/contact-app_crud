import React,{useState} from 'react';
import './App.css'


function AddContact(props) {
    const initialValues = {name: "", mail: ""}
    const [formValues, setFormValues] = useState(initialValues)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value})
    }
    const handleAdd = (e) => {
        e.preventDefault()
        if (formValues.name === "" || formValues.mail === "") {
            alert("Don't Empty")
            return
        }
        props.addContact(formValues)
        setFormValues(initialValues)
    }


    return (
        <div className={"form-main"}>
            <form onSubmit={handleAdd}>
                <h3>Add Contact</h3>
                <div className={'container-input'}>
                    <input
                        type="text"
                        placeholder="Your name.."
                        name={"name"}
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Your mail.."
                        name={"mail"}
                        value={formValues.mail}
                        onChange={handleChange}
                    />

                    <button>Add</button>
                </div>
            </form>
        </div>
    );

}

export default AddContact;