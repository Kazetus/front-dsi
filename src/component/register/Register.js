import React, { useState } from "react";

export default function Register() {
    const validName = new RegExp(
        '^[a-zA-Z]{1,1}[a-zA-Z0-9]{3,23}$'
    );
    const validMail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    const validPhone = new RegExp(
        '^[0]+[0-9]{9,9}'
    );
    const validPassword = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$'
    )
    const [myUsername, setMyUsername] = useState('');
    const [myMail, setMyMail] = useState('');
    const [myPhone, setMyPhone] = useState('');
    const [myPassword, setMyPassword] = useState('');
    const [myCPassword, setMyCPassword] = useState('');
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidMail, setIsValidMail] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidCPassword, setIsValidCPassword] = useState(true);
    function validate(e) {
        let compare = '';
        switch(e.target.id) {
            case 'username':
                compare = validName;
            break;
            case 'mail' :
                compare = validMail;
            break;
            case 'phone':
                compare = validPhone;
            break;
            case 'password':
                compare = validPassword;
            break;
            case 'cpassword':
                compare = document.getElementById("password").value;
            break;
            default:
            break;
        }
        if(e.target.value.match(compare) != null || e.target.value === compare) {
            disableError(e.target.id);
            e.target.classList.remove("is-invalid");
        } else {
            e.target.classList.add("is-invalid");
            enableError(e.target.id);
        }
    }
    function enableError(id) {
        switch(id){
            case 'username':
                setIsValidUsername(false);
            break;
            case 'mail' :
                setIsValidMail(false);
            break;
            case 'phone':
                setIsValidPhone(false);
            break;
            case 'password':
                setIsValidPassword(false);
            break;
            case 'cpassword':
                setIsValidCPassword(false);
            break;
            default:
            break;
        }
    }
    function disableError(id) {
        switch(id){
            case 'username':
                setIsValidUsername(true);
            break;
            case 'mail' :
                setIsValidMail(true);
            break;
            case 'phone':
                setIsValidPhone(true);
            break;
            case 'password':
                setIsValidPassword(true);
            break;
            case 'cpassword':
                setIsValidCPassword(true);
            break;
            default:
            break;
        }
    }
    return (
        <div className="container">
            <div className="card text-center p-3 m-3">
                <h1>Inscription</h1>
                <form className="d-flex flex-column p-3 m-3"action='/account' method="post">
                    <label className="mb-3" htmlFor="username"> Username :</label>
                    <input className="mb-3" type="text" name="username" id="username" value={myUsername} onChange={(e) => {setMyUsername(e.target.value);validate(e)}} />
                    {isValidUsername ? null :  <div className="error">
                        <p>Entre 4 et 24 caractères.
                            Doit commencer par une lettre.
                            Doit comporter au moins une lettre et aucun caractère spéciaux.</p>
                    </div>}
                    <label className="mb-3" htmlFor="mail">Mail :</label>
                    <input className="mb-3" type="mail" name="mail" id="mail" value={myMail} onChange={(e) => {setMyMail(e.target.value);validate(e)}}/>
                    {isValidMail ? null :<div className="error" id="mailError">
                        <p>L'adresse e-mail doit avoir le bon format.</p>
                    </div>}
                    <label className="mb-3" htmlFor="phone"> Téléphone :</label>
                    <input className="mb-3" type="text" name="phone" id="phone" value={myPhone} onChange={(e) => {setMyPhone(e.target.value);validate(e)}} />
                    {isValidPhone ? null :<div className="error" id="phoneError">
                        <p>Le numéro de téléphone doit avoir le bon format.</p>
                    </div>}
                    <label className="mb-3" htmlFor="password">Password :</label>
                    <input className="mb-3" type="password" name="password" id="password" value={myPassword} onChange={(e) => {setMyPassword(e.target.value);validate(e)}} />
                    {isValidPassword  ? null : <div className="error" id="passwordError">
                        <p>Le mot de passe doit faire entre 8 et 20 caractères.
                            Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.</p>
                    </div>}
                    <label className="mb-3" htmlFor="cpassword">Confirmation de password :</label>
                    <input className="mb-3" type="password" name="cpassword" id="cpassword" value={myCPassword} onChange={(e) => {setMyCPassword(e.target.value);validate(e)}} />
                    {isValidCPassword ? null :<div className="error" id="cpasswordError">
                        <p>La confirmation de mot de passe doit correspondre au mot de passe.</p>
                    </div>}
                    <button type="submit" id="submit" disabled={!isValidCPassword || !isValidMail || !isValidPassword || !isValidPhone || !isValidUsername ? true : false}>Register</button>
                    <a href="/login">Déjà un compte ?</a>
                </form>
            </div>
        </div>
    )
}