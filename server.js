import express, { response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import avocadoSalesData from './data/avocado-sales.json'

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/avocados', (request, response) => {
  const { region } = request.query
  if( region ) {
    const regionList = avocadoSalesData.filter(avocado => avocado.region.includes(region))
    response.json(regionList)
  }
  response.json(avocadoSalesData)
})

app.get('/avocados/:id', (request, response) => {
  const { id } = request.params
  const avocado = avocadoSalesData.find(avocado => avocado.id === +id)
  if (avocado) {
    response.json(avocado)
    } 
    response.status(404).send(`The requested resource could not be found`)
})


app.put('/avocados/:totalBagsSold', (request, response) => {
  const { totalBagsSoldList } = request.params
  const totalBags = avocadoSalesData.find(totalBags = totalBags.totalBagsSold === +totalBagsSoldList)
  response.json(totalBags)
}) 



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
