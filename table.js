const prompt = require("prompt-sync")();

/*afficher la table de multiplication*/

let valeur = +prompt("saisir votre valeur:");

for(let i = 0; i <= 10; i++ ){
    console.log(valeur+"*"+i+"="+(valeur*i));
}