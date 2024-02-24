// isim email city yas rol 

import {useState} from "react"; 
import storage from "../DataFile/Data";


const LoginForm = (props) => {
//   let name = props.name;
//   let email = props.email;
//   let role = props.role;
//   let city = props.city;
//   let age = props.age;

const [name, setName] = useState(props.name || '' )
const [email, setEmail] = useState( props.email || "")
const [role, setRole] = useState(props.role || "")
const [city, setCity] = useState(props.city || "")
const [age, setAge] = useState(props.age || 0)


const nameOnChange = (event) => {
    //let nameCatcher = event.target.getAttribute("name")
    setName(event.target.value)
    console.log('name clicked');
}

const emailOnChange = (event) => {
    //let emailCatcher = event.target.getAttribute("name")
    setEmail(event.target.value)
    console.log('email clicked');
}

const roleOnChange = (event) => {
    //let roleCatcher = event.target.getAttribute("name")
    setRole(event.target.value)
    console.log('role clicked');
}

const cityOnChange = (event) => {
    //let cityCatcher = event.target.getAttribute("name")
    
    setCity(event.target.value)
    console.log("City clicked")
}

const ageOnChange = (event) => {
    //let ageCatcher = event.target.getAttribute("name")
    
    setAge(event.target.value)
    console.log("Ageclicked")
}


const onSubmitFnc = (event) => {
    event.preventDefault();
    //check if the action insert or update
  
    // if (props.email) {
    //   console.log("Performing update action...")
    //   // UPDATE FONKSYON TETİLE
    // } else {
    //     console.log("Performing insert action...")
    //   // INSERT FONKSYON TETİLE
    // }

    let result = sendData(name, email, role, city, age);
    console.log(result);
}




const sendData = (name, email, role, city, age ) => {
    console.log("Data akıyor")
    //veri takımından insert functionı tetiklemelisin
    storage.insertItem(name,email, city, age, role);
    return true;
}

return (
<>
<form onSubmit={onSubmitFnc}>
        <div>
            <p>
            <label>Name:
                <input
                
                name="Name"
                type ="string"
                onChange={nameOnChange}
                />
                </label> 
            </p>
        </div>
        <div>
            <p>
            <label>Email:
                <input
                
                name="Email"
                type ="string"
                onChange={emailOnChange}
            
                
                />
                </label> 
            </p>
        </div>
        <div>
            <p>
            <label>Role:
                <input
                
                name="Role"
                type ="string"
                onChange={roleOnChange}
                
                
                />
                </label> 
            </p>
        </div>
        <div>
            <p>
            <label>City:
                <input
                
                name="City"
                type ="string"
                onChange={cityOnChange}
                
                />
                </label> 
            </p>
        </div>
        <div>
            <p>
            <label>Age:
                <input
                
                name="Age"
                type ="number"
                onChange={ageOnChange}
                
                />
                </label> 
            </p>
        </div>
        <button>kaydet</button>
</form>
</>
)
}


export default LoginForm;