import { string, number, object } from 'yup';
import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import axios from 'axios';

const loginSchema = object({
  email: string().email().required(),
  password: string().min(6).max(15).required(),
});

const App = () => {
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (key, value) => {
    setDetails({
      ...details,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginSchema
      .validate(details, { abortEarly: false })
      .then((res) => {
        console.log(res);
        axios({
          //Here Am Getting Error  Not able to POST the Request
          method: '',
          post: '',
        });
      })
      .catch((err) => {
        let errObj = {};
        err.inner.map((valErr) => {
          errObj[valErr.path] = valErr.message;
        });
        setErrors(errObj);
      });
  };
  return (
    <div style={{ marginLeft: 550 }}>
      <div>
        <div>
          <h3>Hello there, Sign in to continue</h3>
          <img src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH" />
          <div>
            <form>
              <div>
                <label>Username/Email</label>
                <br />
                <input
                  type="text"
                  value={details.email}
                  onChange={(event) => {
                    handleOnChange('email', event.target.value);
                  }}
                />
                <p className="text-danger">{errors['email']}</p>
                <div></div>
              </div>
              <br />
              <div>
                <label>Password</label>
                <br />
                <input
                  type="password"
                  value={details.password}
                  onChange={(event) => {
                    handleOnChange('password', event.target.value);
                  }}
                />
                <p className="text-danger">{errors['password']}</p>
                <br />
                <div>
                  <br />
                  <input type="checkbox" />
                  <span>Terms and Conditions</span>
                </div>
              </div>
              <br />
              <button onClick={handleSubmit}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
