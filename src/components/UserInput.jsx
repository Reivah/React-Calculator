export default function UserInput({}) {
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
