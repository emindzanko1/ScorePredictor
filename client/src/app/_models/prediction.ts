export interface Prediction {
    id: number;
    userId: number;
    outcomes: string[];
    result: string;
    scorer: string;
}
