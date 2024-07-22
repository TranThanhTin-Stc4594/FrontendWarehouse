
import React, { useState } from 'react';
import './App.css';
import Machine_name from './MachineName';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkPassword = () => {
    if (password === 'sasi') {
      setIsAuthenticated(true);
      toast.success('Đăng nhập thành công!');
    } else {
      alert('Incorrect Password');
    }
  };

  const checkEnter = (event) => {
    if (event.key === 'Enter') {
      checkPassword();
    }
  };

  const loadStatus = () => {
    console.log('Status loaded');
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div id="login-wrapper">
          <div className='Warning'>
            <p>Xin vui lòng không phận sự không cố gắng tiếp cận dữ liệu kho.</p>
          </div>
          <label htmlFor="password">Nhập mật khẩu bảo mật:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={checkEnter}
          />
          <button onClick={checkPassword}>Xác nhận</button>
        </div>
      ) : (
        <div id="wrapper">
          <Machine_name />
          {loadStatus()}
        </div>
      )}
    </div>
  );
};

export default Login;
