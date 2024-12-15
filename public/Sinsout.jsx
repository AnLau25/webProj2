import React, { useEffect } from 'react';
import GoldBtn from './GoldBtn';
import BglessBtn from './BglessBtn';
import './Sinsout.css';
import { useTranslation } from 'react-i18next';

const Sinsout = ({ onClose, onSignIn }) => {
  const [t, i18n] = useTranslation('global');

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
            <h1>{t('sinsout.create.header')}</h1>
          </div>
          <div class="divider">
            <div class="line"></div>
            <img src="../Symbol.svg" alt="Symbol" class="symbol" />
            <div class="line"></div>
          </div>
          <div className='input-group mb-3'>
            <input type='text' placeholder={t('sinsout.create.uss')} className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='email' placeholder={t('sinsout.create.email')} className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='password' placeholder={t('sinsout.create.pass')} className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3 justify-content-center'>
            <GoldBtn prop={t('sinsout.usual.btn')} onClick={handleGoldBtnClick} />
          </div>
        </form>
      </div>

      <div className='col-md-6 right-box'>
        <form>
          <div className='header-text mb-4 justify-content-center'>
            <h1>{t('sinsout.connect.header')}</h1>
          </div>
          <div class="divider">
            <div class="line"></div>
            <img src="../Symbol.svg" alt="Symbol" class="symbol" />
            <div class="line"></div>
          </div>
          <div className='input-group mb-3'>
            <input type='text' placeholder={t('sinsout.connect.uss')} className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='password' placeholder={t('sinsout.connect.pass')} className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3 justify-content-center'>
            <GoldBtn prop={t('sinsout.new.btn')} onClick={handleGoldBtnClick} />
          </div>
        </form>
      </div>

      <div className='switch-content'>
        <div className='switch'>
          <div className='switch-panel switch-left'>
            <h1>{t('sinsout.usual.title')}</h1>
            <p>{t('sinsout.usual.subT')}</p>
            <h5>{t('sinsout.usual.subq')}</h5>
            <BglessBtn prop={t('sinsout.usual.btn')} id='login' onClick={handleLogInClick} />
          </div>
          <div className='switch-panel switch-right'>
            <h1>{t('sinsout.new.title')}</h1>
            <p>{t('sinsout.new.subT')}</p>
            <h5>{t('sinsout.new.subq')}</h5>
            <BglessBtn prop={t('sinsout.new.btn')} id='signin' onClick={handleSignInClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sinsout;

//Make separate div, between text and sign-in/log-in suggestion
/*
If u create an animation, create another version of it for the dif query
or leave it as is.
Ahí que te llevas? Un dato curioso
 
*/

/* .sinsout {
        display: flex;
        flex-direction: column;
        min-height: 480px; 
        position: relative;
        overflow: hidden;
    }

    .sinsout .col-md-6 {
        width: 100%;
        padding: 20px;
    }

    .sinsout .right-box {
        padding: 20px;
    }

    //Switch Content 
  

    .sinsout.active .switch {
        transform: translateY(-50%); // Move down halfway to align with bottom half 
    }

    .sinsout .switch-panel {
        position: absolute;
        width: 100%;
        height: 50%; // Fit into half of the container 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 30px;
        text-align: center;
        transition: 0.6s ease-in-out;
    }

    .sinsout .switch-left {
        transform: translateY(0); // Stay in the top half 
    }

    .sinsout.active .switch-left {
        transform: translateY(100%); // Move to bottom half 
    }

    .switch-right {
        transform: translateY(100%); // Initially in bottom half 
    }

    .sinsout.active .switch-right {
        transform: translateY(0); // Move to top half 
    }
*/