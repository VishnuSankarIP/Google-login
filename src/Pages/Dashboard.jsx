import React, { useEffect, useState } from 'react'
import user from '../assets/suser.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  // const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const navigate=useNavigate()

  const handleSignOut=()=>{
    googleLogout();
    sessionStorage.removeItem("userName");
    setUserName('');
   toast.info("Signout Successfully")
    
      navigate('/')
 
 
  }
  useEffect(()=>{
    if(sessionStorage.getItem("userName"))
    {
      const storedUserName = sessionStorage.getItem('userName');
      setUserName(storedUserName);

    }
  },[])

 
  return (
<>
<header>
<Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <i class="fa-solid fa-fingerprint me-2"></i>Cogie</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button onClick={handleSignOut}  variant="outline-secondary">Sign Out <i class="fa-solid fa-right-from-bracket"></i></Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
<div className="div" style={{backgroundColor:'#FFB0A3'}}>

<div className="mainDiv  d-flex justify-content-center" >
 <h1 className='mt-5' style={{ fontFamily: "Playfair Display",fontSize:'50px' }} >Welcome {userName}</h1>

</div>
<div className="mainDiv  d-flex justify-content-center"  >
<img src={user} width={'600px'}></img>
<ToastContainer position='top-center' theme='colored' autoClose={3000} />
</div>

</div>

</>
  )
}

export default Dashboard