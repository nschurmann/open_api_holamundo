import express from "express"
import { Express } from "express"
import route from "./route"


interface routerApiParams {
  resources: any[],
  url: string,
}

function routerApi(routerApis: routerApiParams[]) {
  return (app: Express) => {
    const router = express.Router()

    app.use("/api/v1", router)
    routerApis.forEach(({ url, resources }: routerApiParams) => {
      router.use(url, route(resources))
    })
  }
}

export default routerApi
