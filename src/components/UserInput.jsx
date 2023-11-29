import {useState} from 'react'
export default function UserInput({}) {

 

	const [initialInvestment, setInitialInvestment] = useState(20000)
	const [annualInvestment, setAnnualInvestment] = useState(8000)
	const [expectedReturn, setExpectedReturn] = useState(7 )
	const [duration, setDuration] = useState(5)

	
	function handleInitial(event){
		setInitialInvestment(event.target.value)
	 }
  
	 function handleAnnual(event){
		setAnnualInvestment(event.target.value)
	 }
  
	 function handleReturn(event){
		setExpectedReturn(event.target.value)
	 }
  
	 function handleDuration(event){
		setDuration(event.target.value)
	 }
	
 

	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label>initial investment</label>
					<input type='number' required onChange={handleInitial} value={initialInvestment} />
				</p>
				<p>
					<label>annual investment</label>
					<input type='number' required onChange={handleAnnual} value={annualInvestment}/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label>expected duration</label>
					<input type='number' required onChange={handleReturn} value={expectedReturn}/>
				</p>
				<p>
					<label>duration</label>
					<input type='number' required onChange={handleDuration} value={duration}/>
				</p>
			</div>
		</section>
	)
}
