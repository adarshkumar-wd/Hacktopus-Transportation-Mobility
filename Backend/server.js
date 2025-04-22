import { app } from "./app.js";
import http from 'http';
import { dbConnect } from "./src/dbConnection/dbConnection.js";

const server = http.createServer(app);

const port = process.env.PORT || 8000;

dbConnect()
.then(() => {
    server.listen(port , () => {
        console.log(`Server is Running on port ${port}`);
    })
}).catch((error) => {
    console.log(error);
})
