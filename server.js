import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import axios from "axios"

dotenv.config();

const app = express();

app.use(cors());


app.get("/api/weather", (req, res) => {
    const city = req.query.city;
    const options = {
        method: "GET",
        url: `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=no`,
        headers: {
            "Content-Type": "application/json",
        },
    }

    axios
        .request(options)
        .then(response => {
            res.json(response.data)
        })
        .catch(err => {
            console.log(err)
        })
})
app.get("/api/forcast", (req, res) => {
    const city = req.query.city;
    const options = {
        method: "GET",
        url: `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=7&aqi=no&alerts=no`,
        headers: {
            "Content-Type": "application/json",
        },
    }

    axios
        .request(options)
        .then(response => {
            res.json(response.data)
        })
        .catch(err => {
            console.log(err)
        })
})

app.listen(5000, () => console.log('Server running on port 5000'));