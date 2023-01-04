export interface Country {
  name: Name; //---
  tld: string[]; //---
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independant: Boolean
  status: string;
  unMember: Boolean;
  currencies: Currency[]; //---
  idd: Idd;
  capital: string[]; //---
  altSpellings: string[];
  region: string;
  subregion: string; //---
  languages: any; //---
  translations: any;
  latlng: number[];
  landlocked: Boolean;
  borders: string[]; //---
  area: number;
  demonyms: any;
  flag: string;
  maps: Maps;
  population: number; //---
  gini: any;
  fifa: string;
  car: any;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: COA;
  startOfWeek: string;
  capitalInfo: Capital;
  postalCode: Postal;
  // nativeName: string;
  // numericCode: string;
  // regionalBlocs: RegionalBloc[];
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Postal {
  format: string;
  regex: string;
}

export interface Capital {
  latlng: number[]
}

export interface COA {
  png: string;
  svg: string;
}
export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
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