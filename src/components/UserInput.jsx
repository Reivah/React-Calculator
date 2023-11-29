
export default function UserInput({...props}) {

 

	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label>initial investment</label>
					<input type='number' required onChange={props.onHandleInitial} value={props.onValueInvestment} />
				</p>
				<p>
					<label>annual investment</label>
					<input type='number' required onChange={props.onHandleAnnual} value={props.onValueAnnual}/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label>expected duration</label>
					<input type='number' required onChange={props.onHandleReturn} value={props.onValueReturn}/>
				</p>
				<p>
					<label>duration</label>
					<input type='number' required onChange={props.onHandleDuration} value={props.onValueDuration}/>
				</p>
			</div>
		</section>
	)
}
