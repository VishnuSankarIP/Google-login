import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import logo from '../assets/login.png'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [userInputs, setUserInputs] = useState({ email: "", password: "" })
    console.log(userInputs);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault()

        const emailRegex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
        const minLength = 8;

        if (userInputs.email && userInputs.password) {
            if (!emailRegex.test(userInputs.email)) {
                toast.warning("Please enter a valid Gmail address.");
                return;
            }

            if (userInputs.password.length < minLength) {
                toast.warning("Password must be at least 8 characters long.");
                return;

            }
            // sessionStorage.setItem('userEmail', userInputs.email);
            setTimeout(() => {
                navigate('/dash')
            }, 2000)
            setUserInputs({ email: '', password: '' });

        }
        else {
            toast.warning("Please fill form")
        }
    }

    return (
        <>
            <div className="mainDiv" style={{ height: '100vh' }}>

                <div className="row">
                    <div className="col-lg-8">
                        <img src={logo} width={'100%'} height={'750px'}></img>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-column align-items-center">
                            <h4 className='mt-5'> <i class="fa-solid fa-fingerprint me-2"></i>Cogie</h4>
                            <h2 className='mt-5 ' style={{ fontFamily: "Playfair Display" }}>Welcome Back</h2>
                            <p style={{ fontFamily: 'PT Sans' }}>Enter your email and password to access your account</p>

                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ fontFamily: 'PT Sans' }}>Email</Form.Label>
                                    <Form.Control style={{ borderColor: '#2b2b2b' }} type="email" placeholder="Enter your email" value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{ fontFamily: 'PT Sans' }}>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            style={{ borderColor: '#2b2b2b' }}
                                            value={userInputs.password}
                                            onChange={e => setUserInputs({ ...userInputs, password: e.target.value })}
                                        />
                                        <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                        </Button>
                                    </InputGroup>
                                </Form.Group>
                            </Form>
                            <div className="forgetDiv d-flex justify-content-between align-items-center w-50 mt-1">
                                <label className="mb-1" style={{ fontSize: '12px', fontFamily: 'PT Sans' }}>
                                    <input type="checkbox" className="me-2" />
                                    Remember me
                                </label>
                                <label className="mb-1" style={{ fontSize: '12px', fontFamily: 'PT Sans' }}>
                                    Forget password?
                                </label>

                            </div>

                            <div className="btnDiv w-100 justify-content-center d-flex mt-5">
                                <button onClick={handleLogin} className='w-75 rounded' style={{ backgroundColor: '#2b2b2b', color: 'white', height: '40px' }}>Sign in</button>

                            </div>
                            <div className="btnDiv w-100  justify-content-center d-flex mt-4 " >
                                {/* <button className='w-75 rounded' style={{backgroundColor:'#2b2b2b',color:'white',height:'40px'}}>Sign in</button> */}
                                <GoogleLogin
                                
                                    onSuccess={credentialResponse => {
                                        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                                        console.log(credentialResponseDecoded);
                                        sessionStorage.setItem("userName", credentialResponseDecoded.name);
                                        setTimeout(() => {
                                            navigate('/dash')
                                        }, 2000)
                                        toast.success("Login Succesfully")
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />

                            </div>

                            <div className="SignUpDiv">
                                <p style={{ fontFamily: 'PT Sans' }} className='mt-lg-5'>Don't have an account?<b>SignUp</b> </p>
                            </div>

                        </div>

                    </div>
                </div>
                <ToastContainer position='top-center' theme='colored' autoClose={3000} />
            </div>
        </>
    );
}

export default LoginPage;
