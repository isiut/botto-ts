import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Ping: Command = {
    name: "ping",
    description: "Returns the latency",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Pong";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}