import React, {useState} from 'react';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city
        };

        try{
            const res = await api.post('ongs', data);
            alert('Seu ID de acesso:' + res.data.id);
            history.push('/')
        }
        catch (err){
            alert('Erro na criação de conta');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo"/>
                    <h1>Registe-se</h1>
                    <p>Crie a sua conta, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#E02041"/>Já tenho conta</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                    <button className="button" type="submit">Registar</button>
                </form>
            </div>
        </div>
    )
}