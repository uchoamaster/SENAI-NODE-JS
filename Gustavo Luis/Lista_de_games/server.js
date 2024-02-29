import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json())
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`);
})

let games = [
    { title: "Sea of Thieves", studio: "Rare", price: 30 },
    { title: "WOW", studio: "Blizzard", price: 120 },
    { title: "Valorant", studio: "Riot", price: 0 },
    { title: "COD", studio: "Activision", price: 200 },
    { title: "Minecraft", studio: "Mojang", price: 80 },
    { title: "Halo", studio: "Microsoft", price: 90 }
]

let myGames = [
    { title: "The Witcher 3: Wild Hunt", Desenvolvedora: "CD Projekt Red", price: 29.99 },
    { title: "Counter-Strike: Global Offensive", Desenvolvedora: "Valve", price: 0.00 },
    { title: "Among Us", Desenvolvedora: "Innersloth", price: 4.99 },
    { title: "Grand Theft Auto V", Desenvolvedora: "Rockstar North", price: 29.99 },
    { title: "Red Dead Redemption 2", Desenvolvedora: "Rockstar Games", price: 59.99 },
    { title: "PlayerUnknown's Battlegrounds", Desenvolvedora: "PUBG Corporation", price: 29.99 },
    { title: "Fall Guys: Ultimate Knockout", Desenvolvedora: "Mediatonic", price: 19.99 },
    { title: "Sid Meier's Civilization VI", Desenvolvedora: "Firaxis Games", price: 59.99 },
    { title: "Terraria", Desenvolvedora: "Re-Logic", price: 9.99 },
    { title: "Dota 2", Desenvolvedora: "Valve", price: 0.00 }
]

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to My Server",
        description: "Here we have some games",
        games_da_aula: { games },
        meus_games: { myGames }
    })
})