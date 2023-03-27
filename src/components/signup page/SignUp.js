import React,{useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import logo from '../assets/trace.svg';
import '../signup page/SignUp.css';

function Signup({setIsLoggedIn}){
   const [formData, setFormData] = useState({
    username:"",
    firstname: "",
    lastname:"",  
    email: "",
    password: "",
    

  });
  let nav = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          firstname: formData.firstname,
          lastname: formData.lastname,
          username: formData.username
        }),
      })
      .then(response => {
        if (response.ok) {
        //    setIsLoggedIn(true);
          nav("/");
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(error => {
        console.error(error);
      }); 
      
    }
    return (
        <div className="container-fluid" id="sign">
          <img src={logo} alt="Logo" width="200" height="180" class="d-inline-block align-text-top"/>
            <form onSubmit={handleSubmit} className="row g-3 mt-4">
                <center>
                    <div className="form-group mb-2 col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstname"
                        id="firstname"
                        onChange={handleChange}
                        value={formData.firstname}
                    />
                    </div>
                    <div className="form-group mb-2 col-md-4"> 
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastname"
                        id="lastname"
                        onChange={handleChange}
                        value={formData.lastname}
                    />
                    </div>
                    <div className="form-group mb-2 col-4 align-items-center">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="@Username"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        value={formData.username}
                    />
                    </div>
                    <div className="form-group mb-2 col-md-4">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    </div>
                    <div className="form-group mb-4 col-md-4">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                    </div>
        
                    <button type="submit" className="btn btn-outline-dark mb-4"><strong>Signup</strong></button>
                    
                    <p className="forgot-password text-right">
                        Already registered <Link to="/">Login?</Link>
                    </p>

                </center>
            </form>
        </div>
    );
}
export default Signup;