// LoginComponent.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../../store/authSlice';
import VITE_APP_API_URL from '../../config/config'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post(
                `${VITE_APP_API_URL} /auth/api/login`,
                { email, password },
                { withCredentials: true }
            );

            const data = response.data;
            
            if (response.status === 200) {
                dispatch(setToken(data.token));
                localStorage.setItem('token', data.token);

                console.log("Login successful:", data.message);
                navigate('/dashboard');  // Redirect to dashboard after login
            } else {
                console.error("Login failed:", data.message);
            }
        } catch (error) {
            console.error("An error occurred during login:", error.response?.data?.message || error.message);
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5'
        }}>
            <form
                onSubmit={handleLogin}
                style={{
                    backgroundColor: '#ffffff',
                    padding: '40px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    maxWidth: '400px',
                    boxSizing: 'border-box'
                }}
            >
                <h2 style={{
                    marginBottom: '20px',
                    textAlign: 'center',
                    color: '#333',
                    fontWeight: 'bold'
                }}>Login</h2>
        
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px 15px',
                        marginBottom: '20px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        outline: 'none',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                    }}
                />
        
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px 15px',
                        marginBottom: '20px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        outline: 'none',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                    }}
                />
        
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                >
                    Login
                </button>
            </form>
        </div>
         
    );
};

export default Login;
