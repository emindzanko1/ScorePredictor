export interface User {
    id: number;
    username: string;
    email: string;
    token: string;
    points: number;
    lastLogin?: Date;
    createdAt: Date;
    updatedAt: Date;
    picture?: string; 
    fullName: string;
}
