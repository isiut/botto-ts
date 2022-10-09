import { Command } from "./Command";
import { Ping } from "./commands/Ping";
import { Rng } from "./commands/Rng";

export const Commands: Command[] = [
    Ping,
    Rng
];

