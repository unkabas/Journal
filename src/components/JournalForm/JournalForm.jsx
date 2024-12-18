import { useState } from 'react'
import Button from '../Button/Button'
import './JournalForm.css'

const JournalForm = () => {
	const [inputData, setInputData] = useState('')
	const InputChange = event => {
		setInputData(event.target.value)
	}

	const addJournalItem = e => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const formProps = Object.fromEntries(formData)
		console.log(formProps)
	}

	return (
		<form className='form' onSubmit={addJournalItem}>
			<input type='text' name='title' />
			<input type='date' name='date' />
			<input type='text' name='tag' value={inputData} onChange={InputChange} />
			<textarea name='post' id=''></textarea>
			<Button
				text='Сохранить'
				onClick={() => {
					console.log('click')
				}}
			/>
		</form>
	)
}

export default JournalForm
