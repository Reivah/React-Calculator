import { calculateInvestmentResults } from '../util/investment'
export default function ResultTable({ initialInvestment,  annualInvestment, expectedReturn, duration }) {
	
    const inputInformation = {
	  initialInvestment,
	  annualInvestment,
	  expectedReturn,
	  duration
    }

 const inputInfo = calculateInvestmentResults(inputInformation)
 console.log(inputInfo);
   

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
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	)
}
