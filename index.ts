import express from "express"
import routerApi from "./routes"

const app = express()

app.use(express.json())
routerApi(app)

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000")
})