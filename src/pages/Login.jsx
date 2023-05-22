import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/authSlice';

const Login = () => {
  const [err, setErr] = useState(false);
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const id = e.target[0].value;
    const token = e.target[1].value;

    try {
      dispatch(setUser({ id, token }));
      localStorage.setItem('user', JSON.stringify({ id, token }));
      window.location.reload();
    } catch (err) {
      setErr(true);
    }
  };

  useEffect(() => {
    if (user?.id) {
      navigate('/');
    }
    if (localStorage.getItem('user') && !user?.id) {
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Введите данные Green API</span>
        <form onSubmit={handleSubmit}>
          <input placeholder="IdInstance" />
          <input placeholder="ApiTokenInstance" />
          <button>Войти</button>
          {err && <span>Что-то пошло не так...</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
