import { calculateInvestmentResults } from '../util/investment'
export default function ResultTable({ initial, annual, expReturn, duration }) {
	
    const inputInformation = {
        initial,
        annual,
        expReturn,
        duration
    }

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
