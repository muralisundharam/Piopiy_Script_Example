let express = require("express");

let app = express();

let bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.post('/webhook/cdr' , (req,res) =>{

    console.log(req.body)


    res.send(

    {
        "code": 200,
        "loop": 2,
        "welcome_music": "1609133greeting_music.wav",
        "waiting_music": "1655548829270TeamWaiting@9024409_2224015.wav",
        "result": [
            {
                "agent_id": "101_2224179",
                "phone": "919677551930"
            }
        ]
    }

    )
    
})

app.listen(8082);