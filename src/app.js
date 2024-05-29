import express from "express"
import cors from "cors"

import router from "./router/index.js"

const app = express()

app.use(cors())

app.use("/api/dollars", router.dolarRouter)

export default app