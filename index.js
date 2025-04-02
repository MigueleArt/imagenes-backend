const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express(); 
const PORT = 4000
; 

app.use(cors()); 
app.use(express.json()); 
routes(app);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
