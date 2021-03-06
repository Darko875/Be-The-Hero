import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault()
        try {
            const res = await api.post('sessions', {id})
            localStorage.setItem('ongid', id)
            localStorage.setItem('ongname', res.data.name)
            history.push('/profile')
        } catch (err) {
            alert('ID Inválido')
        }
    }

    return (
    <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Logo"/>

            <form onSubmit={handleLogin}>
                <h1>Faça login</h1>
                <input placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)} ></input>
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register"><FiLogIn size={16} color="#E02041"/>Não tenho conta</Link>
            </form>
        </section>
        <img src={heroesImg} alt="Heroes"/>
      </div>
    )
}