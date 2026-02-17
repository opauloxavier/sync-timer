const adjectives = [
  "happy", "sunny", "cozy", "fluffy", "gentle", "sweet", "soft", "calm",
  "bright", "warm", "kind", "lucky", "jolly", "merry", "rosy", "breezy",
  "dreamy", "lovely", "peachy", "golden", "tiny", "bubbly", "sparkly", "snowy",
  "cloudy", "starry", "dainty", "fuzzy", "cuddly", "sleepy", "peppy", "zippy",
];

const nouns = [
  "cloud", "star", "moon", "bunny", "kitty", "puppy", "panda", "cookie",
  "muffin", "berry", "peach", "cherry", "daisy", "tulip", "robin", "dove",
  "lemon", "maple", "coral", "pearl", "honey", "sugar", "cocoa", "mocha",
  "frost", "breeze", "bloom", "spark", "candy", "plum", "mint", "sage",
];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDigits(n: number): string {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}

export function generateFriendlyId(): string {
  return `${randomFrom(adjectives)}-${randomFrom(nouns)}-${randomDigits(4)}`;
}
