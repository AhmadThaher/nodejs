
const axios = require("axios");


async function makeRequest() {
  // Configure request
  const config = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/pikachu", // API link
  };
  const config1 = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/ditto", // API link
  };const config2 = {
    method: "get", // request method (get, post, ...)
    url: "https://pokeapi.co/api/v2/pokemon/eevee", // API link
  };

  let pok1 = await axios(config);
  let pok2 = await axios(config1);
  let pok3 = await axios(config2);
  const express = require("express");
  const app = express();
  const path = require("path");


 
  app.set("view engine", "ejs")
  app.set('views', path.join(__dirname, '/pages'))
  app.use(express.static(path.join(__dirname, '/public')));
  app.use( express.static( "public" ) );
    app.get('/', (req, res) => {
      res.render("home",{
          name1:pok1.data.name,
          order1:pok1.data.order,
          name2:pok2.data.name,
          order2:pok2.data.order,
          name3:pok3.data.name,
          order3:pok3.data.order
    });

  })

  
 app.listen(3000);
}

makeRequest();
