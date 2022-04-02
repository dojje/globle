import { Country } from "../lib/country";
import { today } from "./dates";

const countryData: Country[] = require("../data/country_data.json").features;

countryData.sort((a, b) => {
  return a.properties.FLAG[1].localeCompare(b.properties.FLAG[1]);
});

// This function gets a country from some sort of coutry array
// This was made to generate a new number for every day
// I made it so it will generate a new country every time it gets run
// function generateKeyNew(list: any[], day: string) {
//   const [year, month, date] = day.split("-"); // Gets the date and splits it into an array
//   const dayCode = Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(date)); // gets the unix time for that day
//   const SHUFFLE_KEY = process.env.REACT_APP_SHUFFLE_KEY || "1"; // some sort of random thing idk
//   console.log(SHUFFLE_KEY)
//   // const seed_key = Math.floor(dayCode / parseInt(SHUFFLE_KEY + "5")); // The seed to the key
//   const seed_key = Math.floor(Math.random() * 12345)
//   const key =  seed_key % list.length;
//   return key;
// }

export function getCountry(seed: number) {
  const seed_key = Math.floor(seed * 12345)
  const key =  seed_key % countryData.length;

  return countryData[key]
}

// const key = generateKeyNew(countryData, today);

// export const answerCountry = countryData[key]; 
// export const answerName = answerCountry.properties.NAME; // This should be unused
// When hacking this it's better to only use this
