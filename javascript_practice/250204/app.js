const pokemon = require("pokemon");

pokemon.all("ko");
//=> ['Bulbasaur', …]

pokemon.random();
//=> 'Snorlax'

pokemon.getName(147);
//=> 'Dratini'

pokemon.getId("");
//=> 147
