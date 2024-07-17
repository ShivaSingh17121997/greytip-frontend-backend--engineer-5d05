const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const connection = require("./db");
const card = require("./Routes/allroutes")





// Use JSON middleware 
app.use(express.json());

// Allow CORS for all routes
app.use(cors());

const auth = require("./Routes/auth.routes");
const { default: axios } = require("axios");
app.use("/authentication", auth);


app.get("/card", async (req, res) => {
    try {
        let data = await fetch("http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_1/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": "Basic " + btoa("trial:assignment123")
            }
        })
        data = await data.json();
        return res.json(data)
    } catch (error) {
        res.send(error.message)
    }
})




app.get("/login", async (req, res) => {
    try {
        let data = await fetch("http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/login/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username: "trial",
                password: "assignment123",
                email: "string",
                phone_number: "string",
                input_code: 0
            })
        })
        data = await data.json();

        return res.json(data)

    } catch (error) {
        res.send(error.message)
    }
})



// Start server
app.listen(port, async () => {
    try {
        await connection;
        console.log('Server is running at port', port);
    } catch (error) {
        console.error('Failed to start server:', error.message);
    }
});
