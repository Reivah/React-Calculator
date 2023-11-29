import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'



function App() {

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
		<>
			<Header />
			<UserInput  onHandleInitial={handleInitial} onHandleAnnual={handleAnnual} onHandleReturn={handleReturn} onHandleDuration={handleDuration} onValueInvestment={initialInvestment} onValueAnnual={annualInvestment} onValueReturn={expectedReturn} onValueDuration={duration}/>
		</>
	)
}

export default App
