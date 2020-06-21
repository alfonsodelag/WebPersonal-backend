const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const portDb = 27017;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
//const IP_SERVER = "233.77.5.1";

mongoose.set("useFindAndModify", false);

mongoose.connect(
    //mongodb+srv://alfonso:alfonso123@cluster0-bxdvq.mongodb.net/test?retryWrites=true&w=majority
    // tu tienes que hacerte una db local con compass no una remota con atlas
    `mongodb+srv://alfonso:Panama11@webpersonal.bxdvq.mongodb.net/alfonsodb?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("La conexión a la base de datos es correcta.");

            app.listen(port, () => {
                console.log("##############");
                console.log("###API REST###");
                console.log("##############");
                console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);

            })
        }
    }
);