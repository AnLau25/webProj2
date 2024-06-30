import React, { useEffect } from 'react';
import GoldBtn from './GoldBtn';
import BglessBtn from './BglessBtn';
import './Sinsout.css';

const Sinsout = ({ onClose, onSignIn }) => {

  useEffect(() => {
    const content = document.getElementById('sinsout');
    const Signbtn = document.getElementById('signin');
    const Logbtn = document.getElementById('login');

    const handleSignIn = () => {
      content.classList.add('active');
    };

    const handleLogIn = () => {
      content.classList.remove('active');
    };

    if (Signbtn && Logbtn) {
      Signbtn.addEventListener('click', handleSignIn);
      Logbtn.addEventListener('click', handleLogIn);

      return () => {
        Signbtn.removeEventListener('click', handleSignIn);
        Logbtn.removeEventListener('click', handleLogIn);
      };
    }
  }, []);

  const handleSignInClick = () => {
    const content = document.getElementById('sinsout');
    content.classList.add('active');
  };

  const handleLogInClick = () => {
    const content = document.getElementById('sinsout');
    content.classList.remove('active');
  };

  const handleGoldBtnClick = () => {
    onClose();
    onSignIn(); 
  };

  return (
    <div className='sinsout justify-content align-items-center d-flex shadow-lg' id='sinsout'>
      <button className="close-btn" onClick={onClose}>×</button>
      <div className='col-md-6 d-flex justify-content-center'>
        <form>
          <div className='header-text mb-4 justify-content-center'>
            <h1>Create an acount</h1>
          </div>
          <div className='input-group mb-3'>
            <input type='text' placeholder="User name" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='email' placeholder="E-mail" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='password' placeholder="Password" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3 justify-content-center'>
            <GoldBtn prop='Sign In' onClick={handleGoldBtnClick} />
          </div>
        </form>
      </div>

      <div className='col-md-6 right-box'>
        <form>
          <div className='header-text mb-4 justify-content-center'>
            <h1>Connect to your account</h1>
          </div>
          <div className='input-group mb-3'>
            <input type='text' placeholder="User name" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='password' placeholder="Password" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3 justify-content-center'>
            <GoldBtn prop='Log In' onClick={handleGoldBtnClick} />
          </div>
        </form>
      </div>

      <div className='switch-content'>
        <div className='switch'>
          <div className='switch-panel switch-left'>
            <h1>Welcome back!</h1>
            <p>Glad to see you again</p>
            <BglessBtn prop='Log In' id='login' onClick={handleLogInClick} />
          </div>
          <div className='switch-panel switch-right'>
            <h1>Hello there!</h1>
            <p>You're new?</p>
            <BglessBtn prop='Sign In' id='signin' onClick={handleSignInClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sinsout;
