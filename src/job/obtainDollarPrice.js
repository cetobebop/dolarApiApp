import { getMonitor } from "consulta-dolar-venezuela";
import  prices  from "../global/prices.js";

export async function getDollarPrice() {

    prices.data = await getMonitor("null")
    
}

export const getDollarPricetime = "*/5 * * * *"