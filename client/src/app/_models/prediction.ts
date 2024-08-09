import { Player } from "./player";

export interface Prediction {
    // id: number;
    userId: number;
    outcomes: string[];
    results: string[]; 
    // scorer?: Player;
    // scorer: string;
    points: number,
    fixtureId: number,
    playerId: number,
}
