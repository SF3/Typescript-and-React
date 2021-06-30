

type Suit =
  "Hearts" | "Diamonds" |
  "Clubs" | "Spades";

type Rank =
  "Ace" | "Two" | "Three" | "Four" | "Five" |
  "Six" | "Seven" | "Eight" | "Nine" | "Ten" |
  "Jack" | "Queen" | "King";

type Card = `${Rank} of ${Suit}`;

const validCard: Card = "Three of Hearts";
// const invalidCard: Card = "Three of Heart"; // Compiler Error

// ------------------

interface UserData {
  name: string;
  age: number;
  registered: boolean;
}

// Generates: "getName" | "getAge" | "getRegistered"
type UserDataAccessorNames = `get${Capitalize<keyof UserData>}`;

type UserDataAccessors = {
  [K in keyof UserData as `get${Capitalize<K>}`]: () => UserData[K];
}
