import { Round } from "./round";
import { User } from "./user";

export const SCHEDULE_DATA: Round[] = [
    {
        round: '1. KOLO',
        matches: [
            { date: '03.08.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Igman', result: '- : -' },
            { date: '03.08.24.', time: '15:00', home: 'NK Gošk', away: 'FK Radnik B.', result: '- : -' },
            { date: '03.08.24.', time: '15:00', home: 'FK Borac', away: 'FK Velež', result: '- : -' },
            { date: '03.08.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Sloga D.', result: '- : -' },
            { date: '03.08.24.', time: '15:00', home: 'FK Sarajevo', away: 'FK Sloboda', result: '- : -' },
            { date: '03.08.24.', time: '15:00', home: 'FK Željezničar', away: 'NK Široki B.', result: '- : -' }
        ]
    },
    {
        round: '2. KOLO',
        matches: [
            { date: '10.08.24.', time: '15:00', home: 'FK Igman', away: 'FK Borac', result: '- : -' },
            { date: '10.08.24.', time: '15:00', home: 'FK Sloboda', away: 'HŠK Posušje', result: '- : -' },
            { date: '10.08.24.', time: '15:00', home: 'NK Gošk', away: 'HŠK Zrinjski', result: '- : -' },
            { date: '10.08.24.', time: '15:00', home: 'FK Sloga D.', away: 'FK Sarajevo', result: '- : -' },
            { date: '10.08.24.', time: '15:00', home: 'FK Velež', away: 'FK Željezničar', result: '- : -' },
            { date: '10.08.24.', time: '15:00', home: 'FK Radnik B.', away: 'NK Široki B.', result: '- : -' }
        ]
    },
    {
        round: '3. KOLO',
        matches: [
            { date: '17.08.24.', time: '15:00', home: 'NK Široki B.', away: 'FK Velež', result: '- : -' },
            { date: '17.08.24.', time: '15:00', home: 'FK Borac', away: 'FK Sloboda', result: '- : -' },
            { date: '17.08.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Radnik B.', result: '- : -' },
            { date: '17.08.24.', time: '15:00', home: 'FK Željezničar', away: 'FK Igman', result: '- : -' },
            { date: '17.08.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Sloga D.', result: '- : -' },
            { date: '17.08.24.', time: '15:00', home: 'FK Sarajevo', away: 'NK Gošk', result: '- : -' }
        ]
    },
    {
        round: '4. KOLO',
        matches: [
            { date: '24.08.24.', time: '15:00', home: 'NK Gošk', away: 'HŠK Posušje', result: '- : -' },
            { date: '24.08.24.', time: '15:00', home: 'FK Igman', away: 'NK Široki B.', result: '- : -' },
            { date: '24.08.24.', time: '15:00', home: 'FK Sloga D.', away: 'FK Borac', result: '- : -' },
            { date: '24.08.24.', time: '15:00', home: 'FK Sloboda', away: 'FK Željezničar', result: '- : -' },
            { date: '24.08.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Sarajevo', result: '- : -' },
            { date: '24.08.24.', time: '15:00', home: 'FK Velež', away: 'FK Radnik B.', result: '- : -' }
        ]
    },
    {
        round: '5. KOLO',
        matches: [
            { date: '31.08.24.', time: '15:00', home: 'FK Željezničar', away: 'HŠK Zrinjski', result: '- : -' },
            { date: '31.08.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Velež', result: '- : -' },
            { date: '31.08.24.', time: '15:00', home: 'NK Široki B.', away: 'FK Sloga D.', result: '- : -' },
            { date: '31.08.24.', time: '15:00', home: 'FK Borac', away: 'NK Gošk', result: '- : -' },
            { date: '31.08.24.', time: '15:00', home: 'FK Radnik B.', away: 'FK Sloboda', result: '- : -' },
            { date: '31.08.24.', time: '15:00', home: 'FK Sarajevo', away: 'FK Igman', result: '- : -' }
        ]
    },
    {
        round: '6. KOLO',
        matches: [
            { date: '14.09.24.', time: '15:00', home: 'NK Široki B.', away: 'FK Sarajevo', result: '- : -' },
            { date: '14.09.24.', time: '15:00', home: 'FK Igman', away: 'FK Radnik B.', result: '- : -' },
            { date: '14.09.24.', time: '15:00', home: 'FK Sloga D.', away: 'FK Željezničar', result: '- : -' },
            { date: '14.09.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'HŠK Posušje', result: '- : -' },
            { date: '14.09.24.', time: '15:00', home: 'FK Sloboda', away: 'NK Gošk', result: '- : -' },
            { date: '14.09.24.', time: '15:00', home: 'FK Velež', away: 'FK Borac', result: '- : -' }
        ]
    },
    {
        round: '7. KOLO',
        matches: [
            { date: '21.09.24.', time: '15:00', home: 'FK Sloga D.', away: 'NK Široki B.', result: '- : -' },
            { date: '21.09.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Sloboda', result: '- : -' },
            { date: '21.09.24.', time: '15:00', home: 'FK Borac', away: 'HŠK Zrinjski', result: '- : -' },
            { date: '21.09.24.', time: '15:00', home: 'FK Sarajevo', away: 'FK Velež', result: '- : -' },
            { date: '21.09.24.', time: '15:00', home: 'FK Radnik B.', away: 'FK Sloga D.', result: '- : -' },
            { date: '21.09.24.', time: '15:00', home: 'FK Željezničar', away: 'FK Igman', result: '- : -' }
        ]
    },
    {
        round: '8. KOLO',
        matches: [
            { date: '28.09.24.', time: '15:00', home: 'FK Sarajevo', away: 'HŠK Posušje', result: '- : -' },
            { date: '28.09.24.', time: '15:00', home: 'FK Sloboda', away: 'FK Igman', result: '- : -' },
            { date: '28.09.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'NK Široki B.', result: '- : -' },
            { date: '28.09.24.', time: '15:00', home: 'FK Velež', away: 'NK Gošk', result: '- : -' },
            { date: '28.09.24.', time: '15:00', home: 'FK Radnik B.', away: 'FK Borac', result: '- : -' },
            { date: '28.09.24.', time: '15:00', home: 'FK Sloga D.', away: 'FK Željezničar', result: '- : -' }
        ]
    },
    {
        round: '9. KOLO',
        matches: [
            { date: '05.10.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Igman', result: '- : -' },
            { date: '05.10.24.', time: '15:00', home: 'NK Gošk', away: 'FK Radnik B.', result: '- : -' },
            { date: '05.10.24.', time: '15:00', home: 'FK Borac', away: 'FK Velež', result: '- : -' },
            { date: '05.10.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Sloga D.', result: '- : -' },
            { date: '05.10.24.', time: '15:00', home: 'FK Sarajevo', away: 'FK Sloboda', result: '- : -' },
            { date: '05.10.24.', time: '15:00', home: 'FK Željezničar', away: 'NK Široki B.', result: '- : -' }
        ]
    },
    {
        round: '10. KOLO',
        matches: [
            { date: '12.10.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Željezničar', result: '- : -' },
            { date: '12.10.24.', time: '15:00', home: 'NK Gošk', away: 'NK Široki B.', result: '- : -' },
            { date: '12.10.24.', time: '15:00', home: 'FK Sloboda', away: 'FK Igman', result: '- : -' },
            { date: '12.10.24.', time: '15:00', home: 'FK Borac', away: 'FK Radnik B.', result: '- : -' },
            { date: '12.10.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Velež', result: '- : -' },
            { date: '12.10.24.', time: '15:00', home: 'FK Sarajevo', away: 'FK Sloga D.', result: '- : -' }
        ]
    },
    {
        round: '11. KOLO',
        matches: [
            { date: '19.10.24.', time: '15:00', home: 'FK Željezničar', away: 'FK Borac', result: '- : -' },
            { date: '19.10.24.', time: '15:00', home: 'NK Široki B.', away: 'HŠK Zrinjski', result: '- : -' },
            { date: '19.10.24.', time: '15:00', home: 'FK Velež', away: 'FK Sloboda', result: '- : -' },
            { date: '19.10.24.', time: '15:00', home: 'FK Radnik B.', away: 'FK Sarajevo', result: '- : -' },
            { date: '19.10.24.', time: '15:00', home: 'FK Igman', away: 'NK Gošk', result: '- : -' },
            { date: '19.10.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Sloga D.', result: '- : -' }
        ]
    },
    {
        round: '12. KOLO',
        matches: [
            { date: '26.10.24.', time: '15:00', home: 'FK Borac', away: 'FK Igman', result: '- : -' },
            { date: '26.10.24.', time: '15:00', home: 'FK Sloga D.', away: 'HŠK Posušje', result: '- : -' },
            { date: '26.10.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'NK Gošk', result: '- : -' },
            { date: '26.10.24.', time: '15:00', home: 'FK Sloboda', away: 'FK Radnik B.', result: '- : -' },
            { date: '26.10.24.', time: '15:00', home: 'FK Željezničar', away: 'NK Široki B.', result: '- : -' },
            { date: '26.10.24.', time: '15:00', home: 'FK Velež', away: 'FK Sarajevo', result: '- : -' }
        ]
    },
    {
        round: '13. KOLO',
        matches: [
            { date: '02.11.24.', time: '15:00', home: 'NK Široki B.', away: 'FK Sloboda', result: '- : -' },
            { date: '02.11.24.', time: '15:00', home: 'FK Sarajevo', away: 'HŠK Zrinjski', result: '- : -' },
            { date: '02.11.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Velež', result: '- : -' },
            { date: '02.11.24.', time: '15:00', home: 'FK Radnik B.', away: 'FK Željezničar', result: '- : -' },
            { date: '02.11.24.', time: '15:00', home: 'NK Gošk', away: 'FK Borac', result: '- : -' },
            { date: '02.11.24.', time: '15:00', home: 'FK Igman', away: 'FK Sloga D.', result: '- : -' }
        ]
    },
    {
        round: '14. KOLO',
        matches: [
            { date: '09.11.24.', time: '15:00', home: 'FK Željezničar', away: 'NK Gošk', result: '- : -' },
            { date: '09.11.24.', time: '15:00', home: 'FK Sloboda', away: 'FK Sarajevo', result: '- : -' },
            { date: '09.11.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Radnik B.', result: '- : -' },
            { date: '09.11.24.', time: '15:00', home: 'FK Velež', away: 'NK Široki B.', result: '- : -' },
            { date: '09.11.24.', time: '15:00', home: 'FK Igman', away: 'HŠK Posušje', result: '- : -' },
            { date: '09.11.24.', time: '15:00', home: 'FK Sloga D.', away: 'FK Borac', result: '- : -' }
        ]
    },
    {
        round: '15. KOLO',
        matches: [
            { date: '16.11.24.', time: '15:00', home: 'FK Borac', away: 'FK Velež', result: '- : -' },
            { date: '16.11.24.', time: '15:00', home: 'NK Široki B.', away: 'FK Željezničar', result: '- : -' },
            { date: '16.11.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Sloboda', result: '- : -' },
            { date: '16.11.24.', time: '15:00', home: 'FK Sarajevo', away: 'FK Igman', result: '- : -' },
            { date: '16.11.24.', time: '15:00', home: 'FK Radnik B.', away: 'NK Gošk', result: '- : -' },
            { date: '16.11.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Sloga D.', result: '- : -' }
        ]
    },
    {
        round: '16. KOLO',
        matches: [
            { date: '23.11.24.', time: '15:00', home: 'FK Igman', away: 'NK Široki B.', result: '- : -' },
            { date: '23.11.24.', time: '15:00', home: 'FK Željezničar', away: 'FK Sarajevo', result: '- : -' },
            { date: '23.11.24.', time: '15:00', home: 'FK Velež', away: 'FK Borac', result: '- : -' },
            { date: '23.11.24.', time: '15:00', home: 'FK Sloboda', away: 'HŠK Zrinjski', result: '- : -' },
            { date: '23.11.24.', time: '15:00', home: 'NK Gošk', away: 'FK Radnik B.', result: '- : -' },
            { date: '23.11.24.', time: '15:00', home: 'FK Sloga D.', away: 'HŠK Posušje', result: '- : -' }
        ]
    },
    {
        round: '17. KOLO',
        matches: [
            { date: '30.11.24.', time: '15:00', home: 'FK Sarajevo', away: 'FK Sloga D.', result: '- : -' },
            { date: '30.11.24.', time: '15:00', home: 'FK Velež', away: 'NK Gošk', result: '- : -' },
            { date: '30.11.24.', time: '15:00', home: 'FK Željezničar', away: 'FK Sloboda', result: '- : -' },
            { date: '30.11.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Radnik B.', result: '- : -' },
            { date: '30.11.24.', time: '15:00', home: 'NK Široki B.', away: 'FK Igman', result: '- : -' },
            { date: '30.11.24.', time: '15:00', home: 'HŠK Posušje', away: 'FK Borac', result: '- : -' }
        ]
    },
    {
        round: '18. KOLO',
        matches: [
            { date: '07.12.24.', time: '15:00', home: 'FK Radnik B.', away: 'HŠK Posušje', result: '- : -' },
            { date: '07.12.24.', time: '15:00', home: 'NK Gošk', away: 'FK Željezničar', result: '- : -' },
            { date: '07.12.24.', time: '15:00', home: 'FK Sloboda', away: 'NK Široki B.', result: '- : -' },
            { date: '07.12.24.', time: '15:00', home: 'FK Igman', away: 'FK Velež', result: '- : -' },
            { date: '07.12.24.', time: '15:00', home: 'FK Borac', away: 'HŠK Zrinjski', result: '- : -' },
            { date: '07.12.24.', time: '15:00', home: 'FK Sarajevo', away: 'FK Sloga D.', result: '- : -' }
        ]
    },
    {
        round: '19. KOLO',
        matches: [
            { date: '14.12.24.', time: '15:00', home: 'FK Željezničar', away: 'FK Igman', result: '- : -' },
            { date: '14.12.24.', time: '15:00', home: 'HŠK Posušje', away: 'NK Gošk', result: '- : -' },
            { date: '14.12.24.', time: '15:00', home: 'FK Velež', away: 'HŠK Zrinjski', result: '- : -' },
            { date: '14.12.24.', time: '15:00', home: 'FK Sloboda', away: 'FK Sarajevo', result: '- : -' },
            { date: '14.12.24.', time: '15:00', home: 'NK Široki B.', away: 'FK Radnik B.', result: '- : -' },
            { date: '14.12.24.', time: '15:00', home: 'FK Borac', away: 'FK Sloga D.', result: '- : -' }
        ]
    },
    {
        round: '20. KOLO',
        matches: [
            { date: '21.12.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Željezničar', result: '- : -' },
            { date: '21.12.24.', time: '15:00', home: 'FK Sarajevo', away: 'FK Borac', result: '- : -' },
            { date: '21.12.24.', time: '15:00', home: 'FK Radnik B.', away: 'FK Sloboda', result: '- : -' },
            { date: '21.12.24.', time: '15:00', home: 'NK Gošk', away: 'NK Široki B.', result: '- : -' },
            { date: '21.12.24.', time: '15:00', home: 'FK Sloga D.', away: 'FK Velež', result: '- : -' },
            { date: '21.12.24.', time: '15:00', home: 'FK Igman', away: 'HŠK Posušje', result: '- : -' }
        ]
    },
    {
        round: '21. KOLO',
        matches: [
            { date: '28.12.24.', time: '15:00', home: 'FK Borac', away: 'HŠK Posušje', result: '- : -' },
            { date: '28.12.24.', time: '15:00', home: 'FK Igman', away: 'NK Široki B.', result: '- : -' },
            { date: '28.12.24.', time: '15:00', home: 'FK Velež', away: 'FK Željezničar', result: '- : -' },
            { date: '28.12.24.', time: '15:00', home: 'FK Sloboda', away: 'FK Sarajevo', result: '- : -' },
            { date: '28.12.24.', time: '15:00', home: 'NK Gošk', away: 'FK Radnik B.', result: '- : -' },
            { date: '28.12.24.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Sloga D.', result: '- : -' }
        ]
    },
    {
        round: '22. KOLO',
        matches: [
            { date: '04.01.25.', time: '15:00', home: 'NK Široki B.', away: 'FK Velež', result: '- : -' },
            { date: '04.01.25.', time: '15:00', home: 'FK Željezničar', away: 'NK Gošk', result: '- : -' },
            { date: '04.01.25.', time: '15:00', home: 'FK Sarajevo', away: 'FK Sloboda', result: '- : -' },
            { date: '04.01.25.', time: '15:00', home: 'HŠK Zrinjski', away: 'FK Igman', result: '- : -' },
            { date: '04.01.25.', time: '15:00', home: 'HŠK Posušje', away: 'FK Borac', result: '- : -' },
            { date: '04.01.25.', time: '15:00', home: 'FK Radnik B.', away: 'NK Široki B.', result: '- : -' }
        ]
    }
];

export const USERS: User[] = [
    {
        Id: 1,
        Username: 'emin_dzanko',
        Email: 'emin.dzanko@example.com',
        PasswordHash: 'hashed_password_1',
        Points: 25,
        LastLogin: new Date('2024-07-25T10:00:00Z'),
        CreatedAt: new Date('2024-01-01T12:00:00Z'),
        UpdatedAt: new Date('2024-07-25T10:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Emin Džanko'
    },
    {
        Id: 2,
        Username: 'kerim_dogaz',
        Email: 'kerim.dogaz@example.com',
        PasswordHash: 'hashed_password_2',
        Points: 30,
        LastLogin: new Date('2024-07-24T15:00:00Z'),
        CreatedAt: new Date('2024-02-01T09:30:00Z'),
        UpdatedAt: new Date('2024-07-24T15:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Kerim Đogaz'
    },
    {
        Id: 3,
        Username: 'haris_dzogaz',
        Email: 'haris.dzogaz@example.com',
        PasswordHash: 'hashed_password_3',
        Points: 20,
        LastLogin: new Date('2024-07-20T11:00:00Z'),
        CreatedAt: new Date('2024-03-01T14:00:00Z'),
        UpdatedAt: new Date('2024-07-20T11:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Haris Džogaz'
    },
    {
        Id: 4,
        Username: 'nedim_hasanbegovic',
        Email: 'nedim.hasanbegovic@example.com',
        PasswordHash: 'hashed_password_4',
        Points: 15,
        LastLogin: new Date('2024-07-22T09:00:00Z'),
        CreatedAt: new Date('2024-04-01T08:00:00Z'),
        UpdatedAt: new Date('2024-07-22T09:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Nedim Hasanbegović'
    },
    {
        Id: 5,
        Username: 'benjamin_azman',
        Email: 'benjamin.azman@example.com',
        PasswordHash: 'hashed_password_5',
        Points: 35,
        LastLogin: new Date('2024-07-23T12:00:00Z'),
        CreatedAt: new Date('2024-05-01T07:00:00Z'),
        UpdatedAt: new Date('2024-07-23T12:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Benjamin Ažman'
    },
    {
        Id: 6,
        Username: 'adi_lagumdzija',
        Email: 'adi.lagumdzija@example.com',
        PasswordHash: 'hashed_password_6',
        Points: 10,
        LastLogin: new Date('2024-07-21T13:00:00Z'),
        CreatedAt: new Date('2024-06-01T11:00:00Z'),
        UpdatedAt: new Date('2024-07-21T13:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Adi Lagumdžija'
    },
    {
        Id: 7,
        Username: 'matey_stanic',
        Email: 'matey.stanic@example.com',
        PasswordHash: 'hashed_password_7',
        Points: 40,
        LastLogin: new Date('2024-07-18T16:00:00Z'),
        CreatedAt: new Date('2024-07-01T10:00:00Z'),
        UpdatedAt: new Date('2024-07-18T16:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Matey Stanić'
    },
    {
        Id: 8,
        Username: 'haris_hasagic',
        Email: 'haris.hasagic@example.com',
        PasswordHash: 'hashed_password_8',
        Points: 50,
        LastLogin: new Date('2024-07-19T17:00:00Z'),
        CreatedAt: new Date('2024-08-01T12:00:00Z'),
        UpdatedAt: new Date('2024-07-19T17:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Haris Hasagić'
    },
    {
        Id: 9,
        Username: 'vedad_adzovic',
        Email: 'vedad.adzovic@example.com',
        PasswordHash: 'hashed_password_9',
        Points: 45,
        LastLogin: new Date('2024-07-26T18:00:00Z'),
        CreatedAt: new Date('2024-09-01T13:00:00Z'),
        UpdatedAt: new Date('2024-07-26T18:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Vedad Adžović'
    },
    {
        Id: 10,
        Username: 'muamer_hadzihasanovic',
        Email: 'muamer.hadzihasanovic@example.com',
        PasswordHash: 'hashed_password_10',
        Points: 5,
        LastLogin: new Date('2024-07-25T19:00:00Z'),
        CreatedAt: new Date('2024-10-01T14:00:00Z'),
        UpdatedAt: new Date('2024-07-25T19:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Muamer Hadžihasanović'
    },
    {
        Id: 11,
        Username: 'tarik_povlakic',
        Email: 'tarik.povlakic@example.com',
        PasswordHash: 'hashed_password_11',
        Points: 0,
        LastLogin: new Date('2024-07-27T20:00:00Z'),
        CreatedAt: new Date('2024-11-01T15:00:00Z'),
        UpdatedAt: new Date('2024-07-27T20:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Tarik Povlakić'
    },
    {
        Id: 12,
        Username: 'edo_gojak',
        Email: 'edo.gojak@example.com',
        PasswordHash: 'hashed_password_12',
        Points: 0,
        LastLogin: new Date('2024-07-28T20:00:00Z'),
        CreatedAt: new Date('2024-12-01T16:00:00Z'),
        UpdatedAt: new Date('2024-07-28T20:00:00Z'),
        Picture: 'https://xsgames.co/randomusers/assets/avatars/male/20.jpg',
        FullName: 'Edo Gojak'
    }
];

