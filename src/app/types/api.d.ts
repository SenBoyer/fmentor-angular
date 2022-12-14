export interface Country {
  name: Name; //---
  tld: string[]; //---
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string; //---
  altSpellings: string[];
  region: string;
  subregion: string; //---
  population: number; //---
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[]; //---
  nativeName: string;
  numericCode: string;
  currencies: Currency[]; //---
  languages: Language[]; //---
  translations: Translations;
  flags: Flags;
  regionalBlocs: RegionalBloc[]; //---
  cioc: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Name {
  common: string
  official: string
  nativeName: {
    common: string;
    official: string;
  }
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
}