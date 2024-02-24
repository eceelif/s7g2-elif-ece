// App.js

import React, { useEffect, useState } from 'react';
import UpdateForm from './UpdateForm';
import storage from './DataFile/Data';

function App() {
  const [customerList, setCustomerList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    let cust_list = storage.readAllItems();
    setCustomerList(cust_list);
  }, []);

  const handleDelete = (email) => {
    storage.deleteItem(email);
    setCustomerList(storage.readAllItems());
  };

  const handleUpdate = (updatedItem) => {
    storage.updateItem(updatedItem.email, updatedItem);
    setCustomerList(storage.readAllItems());
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <h1> User Form</h1>
      <UpdateForm selectedItem={selectedItem} onUpdate={handleUpdate} />
      {customerList.length > 0 ? (
        customerList.map(item => (
          <div key={`${item.email}-${item.name}`} style={{ marginBottom: '10px' }}>
            <p>
              Email: {item.email}, Name: {item.name}, Role: {item.role}, City: {item.city}, Age:{item.age}
            </p>
            <button onClick={() => setSelectedItem(item)}>Update</button>
            <button onClick={() => handleDelete(item.email)}>Delete</button>
          </div>
        ))
      ) : (
        "Liste BOŞ"
      )}
    </div>
  );
}

export default App;
