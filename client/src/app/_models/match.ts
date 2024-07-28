export interface Match {
    date: string;
    time: string;
    home: string;
    away: string;
    result: string;
    prediction: {
        outcome: '1' | 'X' | '2' | '-';  
        correctResult?: string;    
        scorer?: string;          
    };
}
