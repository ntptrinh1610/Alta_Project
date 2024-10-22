import React, { useState } from "react";
import './style.css'

type LoginProps = {
    handleLogin: (index: number) => void
}

const Login = (props: LoginProps) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        if (username == 'admin' && password == 'admin')
        // alert('login successfully')
        {
            localStorage.setItem('username', username)
            props.handleLogin(2)
        }
        else
            alert('incorrect username or password')
    }
    return (
        <>
            <div className="container">
                <div className="LoginTemplate">
                    <table>
                        <tr>
                            <td>User Name:</td>
                            <td><input type="text" value={username}
                                onChange={(e) => setUsername(e.currentTarget.value)}
                            /></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type="password" value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                            /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button
                                onClick={handleLogin}
                            >Login</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Login;