import { useState } from 'react'
import './App.css'
import CardButton from './components/CardButton/CardButton'
import Header from './components/Header/Header'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import JournalItem from './components/JournalItem/JournalItem'
import INITIAL_DATA from './components/JournalItem/JournalItem_data'
import JournalList from './components/JournalList/JournalList'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'

function App() {
	const [item, setItem] = useState(INITIAL_DATA)

	const addItem = item => {
		setItem(oldItem => [
			...oldItem,
			{
				text: item.text,
				title: item.title,
				date: new Date(item.date),
				id: Math.max(...oldItem.map(i => i.id)) + 1,
			},
		])
	}
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	}

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{item.length === 0 && <div>Нет записей, добавьте новое</div>}
					{item.length > 0 &&
						item.sort(sortItems).map(el => (
							<CardButton key={el.id}>
								<JournalItem title={el.title} text={el.text} date={el.date} />
							</CardButton>
						))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	)
}

export default App
