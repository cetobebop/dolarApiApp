import app from "./app.js";
import {executeCronJob} from "./cron.js";

executeCronJob()

app.listen(3000)
console.log("server running")