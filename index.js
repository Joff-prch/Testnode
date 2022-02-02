import express from "express";


const app = express();
app.use(express.static('public/assets'));


app.listen(8080, () => {
    console.log('Le serveur fonctionne');
})

let pokemons = ['Pikachu', 'Carapuce', 'Salameche'];

app.get('/', (req, res) => {
    res.render('home.twig', {
        pokemons: pokemons
    });
})