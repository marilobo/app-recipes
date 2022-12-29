import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainContext from '../context/MainContext';

function Login() {
  const { user, setUser } = useContext(MainContext);

  const [disabled, setDisabled] = useState(true);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    history.push('/meals');
  };

  useEffect(() => {
    function handleDisabledBtn() {
      const seven = 7;
      const emailValidation = /\S+@\S+\.\S+/;
      if (user.password.length >= seven && emailValidation.test(user.email)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
    handleDisabledBtn();
  }, [user]);

  return (
    <form>
      <label htmlFor="email">
        <input
          data-testid="email-input"
          name="email"
          value={ user.email }
          id="email"
          type="email"
          placeholder="Email"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password">
        <input
          data-testid="password-input"
          name="password"
          value={ user.password }
          id="password"
          type="password"
          placeholder="Password"
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="login-submit-btn"
        type="submit"
        onClick={ handleClick }
        disabled={ disabled }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
