const express=require("express");
const cors = require("cors");
const db= require("./models")
const candidateRouter =require("./routes/Candidates");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/candidates", candidateRouter);

db.sequelize.sync().then(()=>{
    app.listen("3001", ()=>{
        console.log("Running Express Server on port 3001...")
    });
});

