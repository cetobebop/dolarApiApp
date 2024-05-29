import { Router } from "express";
import dolarController from "../controller/dolar.controller.js";

const router = Router()

router.get("/dollar",(req,res)=>{
    dolarController.getDollar(req, res)
})


export default router