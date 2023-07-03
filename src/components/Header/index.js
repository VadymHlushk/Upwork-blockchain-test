import React, { useEffect } from 'react';
// reactstrap components
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { SetTheme } from 'redux/features/QuestionSlice';
import './index.scss';

function HomePage() {
  const dispatch = useDispatch();
  const Que = useSelector((state) => state.isConnected);

  useEffect(() => {
    // Check if Metamask is installed
    if (typeof window.ethereum == 'undefined') {
      alert('No Metamask!');
    }
  }, []);

  const connectWallet = async () => {
    try {
      // Request access to the user's Metamask wallet
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      dispatch(SetTheme(true));
    } catch (error) {
      console.error('Failed to connect to wallet:', error);
    }
  };
  return (
    <Row className="padding-32">
      <Col xs="4" className="">
        {' '}
        <img src={require('assets/img/logo.png')} />{' '}
      </Col>
      <Col xs="4" className="logo">
        <Link to="/" className="margin-12">
          HOME
        </Link>{' '}
        <span>/</span>
        <Link to="/about" className="margin-12">
          ABOUT
        </Link>{' '}
        <span>/</span>
        <Link to="/loginpage" className="margin-12">
          LOGIN
        </Link>{' '}
        <span>/</span>
        <Link to="/signWithMetamask" className="margin-12">
          SignWithMetamask
        </Link>
      </Col>
      <Col xs="4" className="logo">
        <a className="margin-12" onClick={connectWallet}>
          {Que.theme == true ? 'Connected' : 'Connect Wallet'}
        </a>
      </Col>
    </Row>
  );
}
export default HomePage;