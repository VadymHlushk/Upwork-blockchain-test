import React, { useEffect, useState } from 'react';
import {ethers} from 'ethers';

// reactstrap components
import { Row, Col } from 'reactstrap';
import { Tween } from 'react-gsap';

import LoginFooter from 'components/LoginFooter';
import HomePage from '../../components/Header/index';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Signwithmetamask = () => {
  const [provider, setProvider] = useState(null);
  const [showdesk, setshowdesk] = useState(false);
  const Que = useSelector((state) => state.isConnected);
  
  const handleSignText = async () => {
    try {
      const signText = "Hello, Ai-Blockchain!";

      if (provider) {
        const signer = provider.getSigner();
        const signature = await signer.signMessage(signText);

        console.log('Signature:', signature);
      } else {
        console.error('Provider or address not available');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const initializeProvider = async () => {
      if (Que.theme == true) {
        const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(metamaskProvider);
      } else {
        toast.warn('Please Conneted Metamask');
        setshowdesk(true);
      }
    };

    initializeProvider();
  }, []);

  return (
    <div className="">
      {showdesk ? (
        <Redirect to="/home" />
      ) : (
        <Row>
          <Col className="background custom-content ">
            <HomePage />
            <Row className="body">
              <Col xs="8" className="center h-1-2 body">
                <img src={require('assets/img/title.png')} />
              </Col>
            </Row>
            <LoginFooter />
          </Col>
          <Tween from={{ opacity: 0 }} duration={2}>
            {/* <LoginInput ref = {loginRef}/> */}
            <button>Sign Text</button>
            <div className="background-cover">
              <div className="relative">
                <img src={require('assets/img/login_alert.png')} />
                <div className="absolute custom-input-content ">
                  <h2 style={{ background: 'white' }}>Sign with Metamask</h2>
                </div>
                <div className="absolute login-card ">
                  <div
                  >
                    <AiOutlineClose style={{
                      float: 'right',
                      fontSize: '30px',
                      background: 'white',
                      borderRadius: '50%',
                    }} onClick={() => setshowdesk(true)} />
                  </div>
                  <Row style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                    <Col xs="3" className=" relative ">
                      <a className="">
                        <img
                          src={require('assets/img/submit_button.png')}
                          className="absolute custom-button"
                          style={{ bottom: '-10px', left: 0, width: '100%' }}
                          onClick={handleSignText}
                        />
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Tween>
        </Row>
      )}
    </div>
  );
};

export default Signwithmetamask;