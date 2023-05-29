import express from 'express'
import cors from 'cors'

const app = express()
const port = 9548

// Middleware
// Logger - skriv ut information om inkommande request på terminalen
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url}`, req.body)
	next()
})
// CORS - måste finnas för att servern ska lägga till CORS headers. Det krävs för att en frontend ska kunna skicka request med "fetch" till en backend på en annan webbserver.
app.use( cors() )
// Express.statis - Alla filer inuti den statiska mappen (i detta fallet kallad "static") servas automatiskt, utan att man behöver lägga till en route.
app.use( express.static('static') )




app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})
