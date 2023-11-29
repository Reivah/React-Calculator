
export default function UserInput({...props}) {

 

	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label>initial investment</label>
					<input type='number' required onChange={props.onHandleInitial} value={initialInvestment} />
				</p>
				<p>
					<label>annual investment</label>
					<input type='number' required onChange={props.onHandleAnnual} value={annualInvestment}/>
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
