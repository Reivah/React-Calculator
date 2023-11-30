import { calculateInvestmentResults, formatter } from '../util/investment'
export default function ResultTable({ initialInvestment,  annualInvestment, expectedReturn, duration }) {
	
    const inputValues = {
	  initialInvestment,
	  annualInvestment,
	  expectedReturn,
	  duration,
    }

 const inputInformations = calculateInvestmentResults(inputValues)

	

	return (
		<table id='result'>
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{inputInformations.map((information, index) => {
					return (
						<tr key={index}>
							<td></td>
						</tr>
					)
				})}
				
			</tbody>
		</table>
	)
}
