const express = require ('express')
const app =express()
const port =3000
const cors = require('cors')
app.use (cors())
app.use (express.json())

app. get ('./',(req, res)=>{
    res.send ('disi beckend')
})


app.listen (port,()=>{
    console.log(`LIstening the port${port}`)
})