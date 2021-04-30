import {useState, useEffect} from 'react';
import validator from 'validator';
import axios from 'axios';

function ContactForm(){
    const [submitted, setSubmitted] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const fields = ["company", "name", "phone", "email", "message"];
        const data = fields.reduce((acc,key) => ({...acc, [key]: e.target[key].value}),{});
        console.log(data);
        const sendData = async () => {
            await axios.post('/mail', data)
        };
        
        if (validator.isEmail(data['email'])) {
            setSubmitted(true);
            sendData();
        }
        
    }

    if (submitted) {
        return (<h3 className="text-center">Îți mulțumim pentru mesaj. Te vom contacta în cel mai scurt timp!</h3>)
    }

    return (
        <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={handleOnSubmit}>
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Nume firmă</label>
                    <input className="form-control" name="company" type="text" placeholder="Nume Companie" required="required" data-validation-required-message="Vă rugam sa va adaugați numele companiei" />
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Persoană de contact</label>
                    <input className="form-control" name="name" type="text" placeholder="Nume Prenume" required="required" data-validation-required-message="Vă rugam sa va adaugați numele persoanei de contact" />
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Număr de telefon</label>
                    <input className="form-control" name="phone" type="tel" placeholder="Telefon" required="required" data-validation-required-message="Vă rugăm sa va adaugați numele de telefon"/>
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Adresa de Email</label>
                    <input className="form-control" name="email" type="email" placeholder="Email" required="required" data-validation-required-message="Vă rugam sa va adaugați adresa de email" />
                    <p className="help-block text-danger"></p>
                </div>
            </div>
            
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Informații suplimentare</label>
                    <input className="form-control" name="message" placeholder="Întrebări, ore la care va putem contacta, mențiuni suplimentare."/>
                </div>
            </div>
            <br />
            <div className="form-group"><button className="btn btn-primary btn-xl" name="sendMessageButton" type="submit">Trimite</button></div>
        </form>
    )
}

export {ContactForm};