import { Router } from "express"

const route: (router: any[]) => Router = (resources) => {
  const router = Router()

  router.get("/", (req, res) => {
    res.status(200).json(resources)
  })
  
  router.post("/", (req, res) => {
    res.status(201).send({ id: resources.length + 1 })
  })
  
  router.put("/", (req, res) => {
    res.sendStatus(204)
  })
  
  router.patch("/", (req, res) => {
    res.sendStatus(204)
  })
  
  router.delete("/", (req, res) => {
    res.sendStatus(204)
  })

  return router
}

export default route