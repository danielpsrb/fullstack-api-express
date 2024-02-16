import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const Auth = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/login', {
                email: email,
                password: password,
            });
            // Navigasi setelah post berhasil
            navigate('/dashboard')
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message)
            }
        }
        }
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
            <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                <form onSubmit={Auth} className="box">
                    <p className='hash-text-centered'>{message}</p>
                    <div className="field mt-5">
                    <label className="label">Email or Username</label>
                    <div className="controls">
                        <input type="text" className="input" placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    </div>
                    <div className="field mt-5">
                    <label className="label">Password</label>
                    <div className="controls">
                        <input type="password" className="input" placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    </div>
                    <div className="field" mt-5>
                    <button className='button is-success is-fullwidth'>Login</button>
                    </div>
                    <p className="has-text-centered mt-3">
                    Belum memiliki akun? <Link to="/register">Daftar sekarang</Link>
                    </p>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Login;
