import express from "express"
import { Express } from "express"

import saucersRouter from "./saucers.router"

function routerApi(app: Express) {
  const router = express.Router()
  app.use("/api/v1", router)

  router.use("/saucers", saucersRouter)
}

export default routerApi