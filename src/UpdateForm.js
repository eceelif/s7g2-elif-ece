// UpdateForm.js

import React, { useEffect, useState } from 'react';

const UpdateForm = ({ selectedItem, onUpdate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem.name || '');
      setEmail(selectedItem.email || '');
      setRole(selectedItem.role || '');
      setCity(selectedItem.city || '');
      setAge(selectedItem.age || ''); 
    } else {
      setName('');
      setEmail('');
      setRole('');
      setCity('');
      setAge('');
    }
  }, [selectedItem]);

  const onSubmit = (event) => {
    event.preventDefault();

    onUpdate({
      name,
      email,
      role,
      city,
      age,
    });

    setName('');
    setEmail('');
    setRole('');
    setCity('');
    setAge('');
  };

  return (
    <form onSubmit={onSubmit}>
     
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      
      <button type="submit" disabled={!name.trim()}>Kaydet</button>
    </form>
  );
};

export default UpdateForm;
