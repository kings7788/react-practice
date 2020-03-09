import React, { useState , useEffect} from 'react';
// import axios from 'axios';
import style from './main.module.css'
// import '../vendor/datepicker/daterangepicker.css'
// import '../vendor/select2/select2.min.css'
function Register(props) {

    const [email, setEmailState] = useState('default@gmail.com')

    // console.log('email', email)

    function handleUsernameChange(e) {
        setEmailState(e);
    }
    useEffect(() => {
        console.log('email is:', email)
    });

    // handleSubmit(event) {
    //     console.log('1111');
    //     //alert('An essay was submitted: ' + this.state.value);
    //     event.preventDefault();
    //     this.doRegister();
    // }


    return (
        <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
            <div className="wrapper wrapper--w780">
                <div className="card card-3">
                    <div className="card-heading"></div>
                    <div className="card-body">
                        <h2 className="title">Registration Info</h2>
                        <form >
                            <div className="input-group">
                                <input className="input--style-3" type="email" placeholder="Email" name="email" onBlur={(event)=>handleUsernameChange(event.target.value)}  />
                            </div>

                            <div className="p-t-10">
                                <button className="btn btn--pill btn--green" type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}
// class Register extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleUsernameChange = this.handleUsernameChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.state = {
//             email:'',
//             pwd:'',
//             pwd2: '',
//             birthday: '',
//             gender: '',
//             phone:''
//           }
//     }

//     //
//     doRegister = () => {
//     axios
//         .post("http://localhost:8080/signup/email",{username : '111',password: '2222',email:'333'} )
//         .then(success => console.log(success))
//         .catch(err => console.log(err));
//     };

//     handleUsernameChange(e){
//         this.setState({email: e.target.value});
//     }

//     handleSubmit(event) {
//         console.log('1111');
//         //alert('An essay was submitted: ' + this.state.value);
//         event.preventDefault();
//         this.doRegister();
//     }

//     render(){
//         return(
//             <form onSubmit = {this.handleSubmit}>
//                 <div className="input-group">
//                     <input className="input--style-3" type="email" placeholder="Email" name="email" onChange={this.handleUsernameChange} value={this.state.email}/>
//                 </div>
//                 {/* <div className="input-group">
//                     <input className="input--style-3" type="text" placeholder="password" name="password" value={this.state.pwd}/>
//                 </div>
//                 <div className="input-group">
//                     <input className="input--style-3" type="text" placeholder="password comfirm" name="passwordC" value={this.state.pwd2}/>
//                 </div>
//                 <div className="input-group">
//                     <input className="input--style-3 js-datepicker" type="text" placeholder="Birthdate" name="birthday" value={this.state.birthday}/>
//                     <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
//                 </div>
//                 <div className="input-group">
//                     <div className="rs-select2 js-select-simple select--no-search">
//                         <select name="gender" value={this.state.gender}>
//                             <option disabled="disabled" defaultValue>Gender</option>
//                             <option>Male</option>
//                             <option>Female</option>
//                             <option>Other</option>
//                         </select>
//                         <div className="select-dropdown"></div>
//                     </div>
//                 </div>
//                 <div className="input-group">
//                     <input className="input--style-3" type="text" placeholder="Phone" name="phone" value={this.state.phone}/>
//                 </div> */}
//                 <div className="p-t-10">
//                     <button className="btn btn--pill btn--green" type="submit" >Submit</button>
//                 </div>
//             </form>
//         )
//     }
// }

export default Register