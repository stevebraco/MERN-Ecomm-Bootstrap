import React from 'react'
import { Link } from "react-router-dom";
import * as Input from '../Input'

const Alert = ({ isVisible }) => (
	isVisible &&
	<div className="alert alert-info mt-3">
		<p className="icontext"><i className="icon text-primary fa fa-thumbs-up"></i>User successfully created</p>
    </div>
)
const ErrorMessage = ({ error }) => (
	error && 
	<div className="alert alert-danger mt-3">
		<p className="icontext]" style={{ color: 'crimson' }}><i className="icon text-danger fas fa-exclamation-circle"></i> {' '}{error?.error}</p>
    </div>
)

const defaultValues = {
	first: 'sandy' ,
	last: 'last' ,
	email: 'sandy@gmail.com' ,
	gender: 'Female' ,
	city: 'city' ,
	password: 'test12345' ,
	confirm_password: 'test12345' 
}
const options = ['Uzbekistan', 'Russia', 'United States', 'India', 'Afganistan']
const Register = () => { 
	return (
	<>
    <div className="card mx-auto" style={{maxWidth:'520px', marginTop:'140px'}} >
      <article className="card-body">
			<header className="mb-4"><h4 className="card-title">Sign up</h4></header>
			{/* feedback et message d'erreurs */}
 			<form name="register" onSubmit={() => null}>
				<div className="form-row">
					<Input.Text label="First Name" name='first' onChange={() => null} />
					<Input.Text label="Label Name" name='last'  onChange={() => null} /> 
				</div> 
				<div className="form-group">
					<Input.Email label="Email" style={{padding: 0}} onChange={() => null}/>
				</div> 
				<div className="form-group">
					<Input.Radio name="gender" label="Male" onChange={() => null} />
					<Input.Radio name="gender" label="Female" onChange={() => null} />
				</div> 
				<div className="form-row">
					<Input.Text name='city' label="City" onChange={() => null} col="6"  />
					<Input.Select name='country' options={options} label="Country" col="6" onChange={() => null}/>
				</div> 	
				
				<div className="form-row">	
					<Input.Password label="Create password"  style={{padding: 0}} col="6" onChange={() => null} />
					<Input.ConfirmPassword label="Repeat password" style={{padding: 0}} col="6" onChange={() => null} />
				</div>
				<div className="form-group">
					<Input.Submit classNamees="btn-primary btn-block" title="Register" /> 
			    </div>              
			</form>
		</article>
    </div>
    <p className="text-center mt-4">Have an account? <Link to='/login'>Log In</Link></p>
    <br /><br /><br />
</>
)}
export default Register