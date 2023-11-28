import {useState} from 'react'
export default function UserInput({}) {

   const [initialInvestment, setInitialInvestment] = useState(20000)
   const [annualInvestment, setAnnualInvestment] = useState(20000)
   const [expectedDuration, setEpectedDuration] = useState(20000)
   const [duration, setDuration] = useState(20000)



	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label>initial investment</label>
					<input type='number' />
				</p>
				<p>
					<label>annual investment</label>
					<input type='number' />
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label>expected duration</label>
					<input type='number' />
				</p>
				<p>
					<label>duration</label>
					<input type='number' />
				</p>
			</div>
		</section>
	)
}
