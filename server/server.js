import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;
const allowedOrigins = [process.env.FRONTEND_URL];

app.use(cors({
  origin: allowedOrigins
}));


app.get("/api/hello", (req,res) =>{
    res.json({
        message : `hello from Node.js backend running on PORT: ${PORT}`
    });
});

app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`);
});