
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, submitForm } from '../slice/RegisterSlice';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.registration);
  const [name, setName] = useState(formData.name);
  const [email, setEmail] = useState(formData.email);
  const [password, setPassword] = useState(formData.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFormData({ name, email, password }));
    dispatch(submitForm());
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <hr />
    </div>
  );
};

export default RegistrationForm;
