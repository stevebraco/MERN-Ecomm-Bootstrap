import React from 'react'

import * as Input from '../Auth/Input'
import Payment from './Payment'
import DeliveryBox from './DeliveryBox'

const defaultValues = { 
	delivery: 'standard',
	address: ''
}

const options = ['Canada', 'Russia', 'United States', 'India', 'Afganistan']
const Checkout = () => { 	
	return (
	<>
	<section className="section-content padding-y" style={{ margin: '100px auto', maxWidth: '720px' }}>
		<div className="container" >

			<div className="card mb-4">
				<div className="card-body">
				<h4 className="card-title mb-3">Delivery info</h4>

				<div className="form-row">
					<div className="form-group col-sm-6">
						<DeliveryBox title="standard" message="Free by airline within 20 days" onChange={() => null}/>
					</div>
					<div className="form-group col-sm-6">
						<DeliveryBox title="fast" message="Extra 20$ will be charged" onChange={() => null}/>
					</div>
				</div>

				<div className="form-row">
					<Input.Text label="First name" name="first" onChange={() => null} />
					<Input.Text label="Last name" name="last"  onChange={() => null} />
				</div> 

				<div className="form-row">
					<Input.Email label="Email" onChange={() => null} col="6" />	
				</div> 
				<div className="form-row">
					<Input.Select name='country' options={options}  label="Country" col="6" onChange={() => null}/>
					<Input.Text label="City" name='city'onChange={() => null} />
				</div> 
					<Input.TextArea label="Address" name="address" onChange={() => null}/> 
				</div> 
				<div className="form-row" style={{padding: '0 25px 30px'}}>
					<Payment />	
				</div>
		</div> 
	</div>
</section>
</>
)}
export default Checkout