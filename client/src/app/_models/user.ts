export interface User {
    Id: number;
    Username: string;
    Email: string;
    PasswordHash: string;
    Points: number;
    LastLogin?: Date;
    CreatedAt: Date;
    UpdatedAt: Date;
    Picture?: string; 
}
