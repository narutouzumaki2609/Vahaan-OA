import express from "express";
import cors from "cors";
import mysql from "mysql";

const app=express();
app.use(express.json());

app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

app.get("/",(req,res)=>{
    const sql="SELECT * FROM student";
    db.query(sql, (err, data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
});

app.post('/create', (req, res)=>{
    const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
    ]
    db.query(sql, [values], (err, res)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(3000, ()=>{
    console.log("app is running on port no 3000")
});
