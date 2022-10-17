import express, { request, response } from 'express'
const app = express() // we have a web application

//need rules to come in. by defulte no1 comes in from this portal/door. putting a list of what allowed

//request to only test the portal and what to do when some1 request it
app.get('/test', (request, response) => {
    response.send("It's all good man!")// or makeing it json by putting {}response.send({"It's all good man!"})
})
// dont need {} if writing it on 1 line. '/'-get into app
app.get('/', (request, response) => response.send('Welcom to our API'))
app.get('/error', (request, response) => {
response
    .status(500)
    .send({ message: 'Somehting went wrong', success: false})
})
 //telling the api to open a certine port. command goes on forever...
//app.listen(3030, () => console.log('Listening on port 3030...'))
app.listen(3030, () => console.log('Listening on http://localhost:3030...'))



