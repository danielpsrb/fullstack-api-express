import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expired, setExpired] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        refreshToken();
        getPengguna();
    },[])

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:4000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode.jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpired(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate('/')
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expired * 1000 < currentDate.getTime()){
            const response = await axios.get('http://localhost:4000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode.jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpired(decoded.exp);
        }
        return config;
    }, (error)=>{
        return Promise.reject(error)
    })

    const getPengguna = async () => {
        const res = await axiosJWT.get('http://localhost:4000/users',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(res.data);
    }

    return (
        <div className='container mt-5'>
            <h1>Welcome Back: {name} </h1>
            <button onClick={getPengguna} className='button is-info'>Get Users</button>
            <table className='table is-stripped is-fulwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard