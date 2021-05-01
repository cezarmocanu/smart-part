import nodemailer from 'nodemailer';
import {getSession} from 'next-auth/client'

const TRANSPORTER = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'smartpartinfo@gmail.com',
        pass: 'Pass@SmartPartInfo2021'
    }
});

function post(req,res) {
    const {company, contactName, email, phoneNumber, extra} = req.body;

    const WELCOME_MAIL = {
        from: 'smartpartinfo@gmail.com',
        to: email,
        subject: 'Bine ai venit la SmartPart!',
        text: `
            Buna ziua!\n\n 
            Va multumitm pentru completarea formularului nostru pentru compania ${company}.\n
            Mai jos aveti detaliile de contact procurate. Pentru intrebari suplimentare va rugam raspundeti acestui email.\n\n
            Persoana de contacta pe ${contactName}\n
            Email ${email} \n
            Numar de telefon: ${phoneNumber}\n
            Alte informatii: ${extra ? extra: "Fara informatii suplimentare"}\n\n

            Va uram o zi productiva!
            Echipa SmartPart`
    }

    TRANSPORTER.sendMail(WELCOME_MAIL, function(error, info){
        if (error) {
            return res.status(500).json(error);
        } else {
            return res.status(200).json(info.response);
        }
    });
}

function get(req,res) {
    return res.status(200).json({message: 'GET'})
}

async function handle(req, res){
    if (req.headers.key === process.env.CLIENT_KEY) {
        if (req.method === 'POST') {
            return post(req,res);
        }
        return get(req,res);
    }
    res.status(401);
    res.end();    
}
  

export default handle;