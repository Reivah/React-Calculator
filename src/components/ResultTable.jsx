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
					const totalInterest = information.valueEndOfYear - information.annualInvestment * information.year
					return (
						<tr key={index}>
							<td>{information.year}</td>
							<td>{formatter.format(information.valueEndOfYear)}</td>
							<td>{formatter.format(information.interest)}</td>
							<td></td>
							<td></td>
						</tr>
					)
				})}
				
			</tbody>
		</table>
	)
}
