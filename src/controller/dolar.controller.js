import  prices  from "../global/prices.js";

class DollarController {
    getDollar(req, res){
        return res.json({
            data: prices.data
        })
    }
}


export default new DollarController