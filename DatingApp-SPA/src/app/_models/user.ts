import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    city: string;
    country: string;
    interest?: string;
    introduction?: string;
    lookingFor?: string;
    photoUrl?: string;
    photos?: Photo[];
}
