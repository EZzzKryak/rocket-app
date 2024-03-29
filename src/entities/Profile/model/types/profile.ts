import { Country, Currency } from 'shared/const/common';

export interface Profile {
    name: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    readonly: boolean;
    isLoading: boolean;
    error?: string;
}
