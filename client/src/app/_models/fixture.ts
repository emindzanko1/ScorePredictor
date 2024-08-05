import { Match } from "./match";

export interface Fixture {
    id: number;
    name: string;
    matches: Match[]; 
}
