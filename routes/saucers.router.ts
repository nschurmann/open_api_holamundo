import { Router } from "express"
import { saucers } from "../mocks/response/saucers"

const router = Router()

router.get("/", (req, res) => {
  res.status(200).json(saucers)
})

export default router