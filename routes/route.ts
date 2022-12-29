import { Router } from "express"

function route(resources: any[]) {
    const router = Router()

    router.get("/", (_req, res) => {
        res.status(200).json(resources)
    })

    router.post("/", (_req, res) => {
        res.status(201).send({ id: resources.length + 1 })
    })

    router.put("/", (_req, res) => {
        res.sendStatus(204)
    })

    router.patch("/", (_req, res) => {
        res.sendStatus(204)
    })

    router.delete("/", (_req, res) => {
        res.sendStatus(204)
    })

    return router
}

export default route
