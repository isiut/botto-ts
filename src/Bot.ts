import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import config from "./config.json";

const token: string = config.tkn;

console.log("Starting ...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(token);
