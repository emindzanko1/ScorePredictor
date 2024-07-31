export interface Prediction {
    id: number;
    userId: number;
    outcomes: string[];
    results: string[]; 
    scorer: string;
    points: number
}
