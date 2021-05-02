import {useState} from 'react';
import validator from 'validator';
import axios from 'axios';
import {Form, ProgressBar, Button, Col, Alert} from 'react-bootstrap';
import {FormControlMotion, AlertMotion} from './ContactForm.motion';

const FIELDS = {
    company: {
        init: "",
        validate: (value) => value.length > 4 ? true : false
    },
    contactName: {
        init: "",
        validate: (value) => value.length > 4 ? true : false
    },
    email: {
        init: "",
        validate: (value) => validator.isEmail(value)
    },
    phoneNumber: {
        init: "",
        validate: (value) => validator.isMobilePhone(value, ['ro-RO'])
    },
    extra: {
        init: "",
        validate: (value) => true
    }
};

const DEFAULT_VALUES = Object.keys(FIELDS).reduce((acc, key) => ({...acc, [key]:FIELDS[key].init}), {});

function ContactForm(){
    const [submitted, setSubmitted] = useState(false);
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState(DEFAULT_VALUES);
    const [isInvalid, setIsInvalid] = useState(false);

    const sendData = async () => {
        await axios.post('/api/mail',
            {...formValues},
            {headers:{key: process.env.CLIENT_KEY}
        });
    };

    const handleGoBack = (e) => {
        setStep(step - 1);
        setIsInvalid(false);
    };

    const onFieldChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentField = Object.keys(formValues)[step - 1];
        const isCurrentFieldValid = FIELDS[currentField].validate(formValues[currentField]);

        if (!isCurrentFieldValid) {
            setIsInvalid(true);
            return;
        }

        if (step < 5) {
            setStep(step + 1);
            setIsInvalid(false);
            return;
        }
    
        setSubmitted(true);
        sendData();
    };

    if (submitted) {
        return (
            <AlertMotion>
                <Alert variant="success">
                    <p className="text-center">Îți mulțumim pentru mesaj! În scurt timp vei primi un email pe adresa <b>{formValues['email']}</b> cu datele completate și detalii suplimentare.</p>
                </Alert>
            </AlertMotion>
            
        );
    }

    return (
        <Form onSubmit={handleSubmit}>
            <ProgressBar className="mb-1" variant="success" now={step} min={1} max={5} label={`${step} / 5`}/>
            <p className="text-center">Completeaza formularul de mai jos pentru a obtine un demo gratuit</p>
            
            <Form.Row className="justify-content-center mt-5">
                {step === 1 &&
                <FormControlMotion>
                    
                    <Form.Group as={Col} xs={12}>
                        <Form.Control
                            name="company"
                            placeholder="Numele firmei"
                            value={formValues.company}
                            onChange={onFieldChange}
                            isInvalid={isInvalid}
                        />
                        <Form.Control.Feedback className="mb-3" type="invalid">Va rugam completati numele companiei!</Form.Control.Feedback>
                        <Form.Text className="mt-3" muted>
                            Numele firmei pentru care doriti sa vă contactăm. Ex FirmaMea SRL/PFA
                        </Form.Text>
                    </Form.Group>
                    
                </FormControlMotion> 
                }

                {step === 2 &&
                <FormControlMotion>
                    <Form.Group as={Col} xs={12}>
                        <Form.Control
                            name="contactName"
                            placeholder="Numele persoanei de contact"
                            value={formValues.contactName}
                            onChange={onFieldChange}
                            isInvalid={isInvalid}
                        />
                        <Form.Control.Feedback className="mb-3" type="invalid">Va rugam completati numele persoanei de contact!</Form.Control.Feedback>
                        <Form.Text className="mt-3" muted>
                            Numele persoanei cu care vom lua legatura
                        </Form.Text>
                    </Form.Group>
                </FormControlMotion>
                }

                {step === 3 && 
                <FormControlMotion>
                    <Form.Group as={Col} xs={12}>
                        <Form.Control
                            name="email"
                            placeholder="Email de contact"
                            value={formValues.email}
                            onChange={onFieldChange}
                            isInvalid={isInvalid}
                        />
                        <Form.Control.Feedback className="mb-3" type="invalid">Emailul trebuie sa fie de forma email@domeniu.com/ro</Form.Control.Feedback>
                        <Form.Text className="mt-3" muted>
                            Emailul persoanei de contact sau al firmei
                        </Form.Text>
                    </Form.Group>
                </FormControlMotion>
                }


                {step === 4 && 
                <FormControlMotion>
                    <Form.Group as={Col} xs={12}>
                        <Form.Control
                            name="phoneNumber"
                            type="text"
                            placeholder="Numarul de telefon"
                            value={formValues.phoneNumber}
                            onChange={onFieldChange}
                            isInvalid={isInvalid}
                        />
                        <Form.Control.Feedback className="mb-3" type="invalid">Va rugam completati un numar valid de telefon!</Form.Control.Feedback>
                        <Form.Text className="mt-3" muted>
                            Un numar de telefon pe care va putem contacta
                        </Form.Text>
                    </Form.Group>
                </FormControlMotion>
                }


                {step === 5 && 
                <FormControlMotion>
                    <Form.Group as={Col} xs={12}>
                        <Form.Control
                            name="extra"
                            type="text"
                            placeholder="Informatii suplimentare"
                            value={formValues.extra}
                            onChange={onFieldChange}
                        />
                        <Form.Text className="mt-3" muted>
                            Doar daca doriti sa va sunam intr-un anumit interval orar, sau intr-o anumita zi?
                        </Form.Text>
                    </Form.Group>
                </FormControlMotion>
                }
                <Col xs={12} className="d-flex justify-content-center">
                    {step > 1 && <Button variant="secondary" className="mt-2 mr-4" onClick={handleGoBack}>Înapoi</Button>}
                    <Button variant="secondary" className="mt-2" type="submit">Mai departe</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export {ContactForm};