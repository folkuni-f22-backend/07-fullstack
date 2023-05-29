import { useState } from 'react'
import './App.css'

function App() {
	const [movies, setMovies] = useState(null)
	const [errorMessage, setErrorMessage] = useState('')

	const getMovies = async () => {
		// Ta bort eventuellt felmeddelande
		setErrorMessage('')

		// Hur skriver man URL?
		// "/api/movies"
		try {
			const response = await fetch('/api/movies')
			const data = await response.json()
			setMovies(data)
		} catch(error) {
			setErrorMessage(error.message)
		}
	}

	return (
		<div>
			<button onClick={getMovies}> Give me some movies! </button>
			{movies
				? (
					<ul>
						{movies.map(movie => (
							<li key={movie.id}> {movie.title} </li>
						))}
					</ul>
				)
				: <p> No movies yet... </p>}
			
			{errorMessage !== '' ? <p> Ett fel har inträffat! {errorMessage} </p> : null}
		</div>

	)
}

export default App
