import logo from './logo.svg';
import './App.css';
import LoginForm from './frontEndFile/form';
import storage from './DataFile/Data';
import { useEffect, useState } from 'react';


function App() {
  const [customerList, setCustomerList] = useState([]);


  useEffect(()=>{
    let cust_list = storage.readAllItems();
    console.log("cust_list : ", cust_list);
    setCustomerList(cust_list);
    console.log("customerList: ", customerList);
  }, []);



  return (
    <div className="App">
      {
        customerList.length > 0 ?
        customerList.map(item => <p>{item.email}</p>) //silme butonu
        :
        "Liste BOŞ"
      }
      <LoginForm />
    </div>
  );
}

export default App;
