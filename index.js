// console.log("Jai Shree Shyam!");
import { app } from "./src/app.js";
import connectDB from "./src/db/db.js";

const port = process.env.PORT || 8000;

connectDB()
.then(()=>{
app.listen(port, ()=>{
    console.log(`server is serving at http://localhost:${port}`)
});
})
.catch((error)=>{
    console.log("MongoDB Connection Error : ", error);
})



