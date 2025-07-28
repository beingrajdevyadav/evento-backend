// console.log("Jai Shree Shyam!");

import { app } from "./src/app.js";

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`server is serving at http://localhost:${port}`)
});
