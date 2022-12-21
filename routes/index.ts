import express from "express"
import { Express } from "express"

import route from "./route"

interface routerApiParams<T> {
  resources: T[]
}

function routerApi<T>({ resources }: routerApiParams<T>) {
  return (app: Express) => {
    const router = express.Router()

    app.use("/api/v1", router)
    router.use("/saucers", route(resources))
  }
}

export default routerApi