import express from "express"
import routerApi from "./routes"
import data from "./mocks/response"

const app = express()

app.use(express.json())
routerApi(data)(app)

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000")
})