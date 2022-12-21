import express from "express"
import routerApi from "./routes"
import { saucers } from "./mocks/response/saucers"

const app = express()

app.use(express.json())
routerApi({ resources: saucers })(app)

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000")
})