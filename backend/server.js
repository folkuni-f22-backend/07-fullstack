import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = process.env.PORT || 9548
// Obs! .env ska i normala fall INTE följa med i Git-repot

// Middleware
// Logger - skriv ut information om inkommande request på terminalen
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url}`, req.body)
	next()
})
// CORS - måste finnas för att servern ska lägga till CORS headers. Det krävs för att en frontend ska kunna skicka request med "fetch" till en backend på en annan webbserver.
app.use( cors() )
// Express.statis - Alla filer inuti den statiska mappen (i detta fallet kallad "static") servas automatiskt, utan att man behöver lägga till en route.
// __dirname blir sökvägen till backend-mappen
const __dirname = dirname(fileURLToPath(import.meta.url))
const pathToStaticFolder = join(__dirname, '../dist')
app.use( express.static(pathToStaticFolder) )


// API
app.get('/api/movies', (req, res) => {
	// Obs! I en mer komplett app hämtar vi datan från databasen
	res.send([
		{ id: 'a', title: 'Inception' },
		{ id: 'b', title: 'The Shawshank Redemption' },
		{ id: 'c', title: 'The Drak Knight' },
		{ id: 'd', title: 'The Grand Budapest Hotel' },
	])
})



app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})
