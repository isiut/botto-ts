import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Ping: Command = {
    name: "ping",
    description: "Returns the latency",
    run: async (client: Client, interaction: CommandInteraction) => {

        const content = `The ping is ${client.ws.ping} ms.`;

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}