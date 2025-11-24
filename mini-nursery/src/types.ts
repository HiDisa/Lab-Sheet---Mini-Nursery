export type Difficulty = "Easy" | "Medium" | "Hard";
export type Light = "Low" | "Medium" | "Bright";
export type Water = "Low" | "Moderate" | "Frequent";
export type Rarity = "Common" | "Uncommon" | "Rare";

export interface Plant {
    id: number;
    name: string;
    scientific?: string;
    difficulty: Difficulty;
    light: Light;
    water: Water;
    rarity?: Rarity;
    description: string;
}

export interface UserAddress {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: Rarity;
    [key: string]: any;
}

export interface UserCompany {
    name?: string;
    catchPhrase?: string;
    bs?: string;
    [key: string]: any;
}

export interface User {
    id: number;
    name: string;
    username?: string;
    email?: string;
    phone?: string;
    website?: string;
    address?: UserAddress;
    company?: UserCompany;
}