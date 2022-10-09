import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Rng: Command = {
    name: "rng",
    description: "Returns a random number 0-100",
    run: async (client: Client, interaction: CommandInteraction) => {
        const randNum: number = Math.round(Math.random() * 100);

        const content = String(randNum);

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}