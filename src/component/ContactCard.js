import React from 'react';
import IconUser from '../images/icon-avatar.svg'
import Pencil from '../images/icon-pencil.svg'
import TrashBin from '../images/bin.svg'

const ContactCard = (props ) => {
    const {contact} = props
    const {id, name, mail} = props.contact
    return (
        <div className={'container-card'}>
            <div className={'card'}>
                <div className={'card-body'}>
                    <img className={'avatar'} src={IconUser} alt="Avatar"/>
                    <div className={'content'}>
                        <h4>{name}</h4>
                        {mail}
                    </div>
                </div>
                <div className={'card-feature'}>
                    <img className={'pencil'} src={Pencil} onClick={() => props.clickHandleEdit(contact)}  alt="pencil"/>

                    <img className={'trash-bin'} src={TrashBin} onClick={() => props.clickHandleDelete(id)} alt="TrashBin"/>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;