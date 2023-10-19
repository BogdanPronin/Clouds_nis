import React, { useState } from "react";
import "../styles/form.css";
import photo from "../images/form.jpg";
import google from "../images/google_play_icon.jpg";
import app_store from "../images/app_store_icon.jpg";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    }

    const handleSubmit = (event) => {
        const data = {
            name: name,
            email: email,
            phone: phone
        };
        console.log(JSON.stringify(data));
        event.preventDefault();
    }

    return (

        <div className="form">

            <div className="form-wrapper">
                <img src={photo} />
                <form className="form-input" onSubmit={handleSubmit}>
                    <div className="form-h">
                        Хотите заказать проект?
                    </div>
                    <div className="form-h-mini">
                        Оставьте заявку, и мы вам перезвоним
                    </div>

                    <input placeholder="Имя:" type="text" value={name} onChange={handleChangeName} />

                    <input placeholder="E-mail:" type="email" value={email} onChange={handleChangeEmail} />

                    <input placeholder="Телефон:" type="phone" value={phone} onChange={handleChangePhone} />


                    <button className="form-button" type="submit" value="Отправить">Отправить заявку</button>
                    <div className="form-store">
                        <img src={google} />
                        <img src={app_store} />
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Form;