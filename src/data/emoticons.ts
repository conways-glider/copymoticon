export interface Emoticon {
  name: string;
  symbol: string;
  tags?: string[];
}

export const StaticEmoticons: Emoticon[] = [
  {
    name: "Smile",
    symbol: ":)",
    tags: ["happy", "joy"],
  },
  {
    name: "Laughing",
    symbol: "xD",
    tags: ["happy", "joy"],
  },
  {
    name: "Grinning",
    symbol: "^_^",
    tags: ["happy", "joy"],
  },
  {
    name: "Grinning",
    symbol: "^-^",
    tags: ["happy", "joy"],
  },
  {
    name: "Winking",
    symbol: ";)",
    tags: ["happy", "joy"],
  },
  {
    name: "Cheers",
    symbol: "\\o/",
    tags: ["happy", "joy"],
  },
  {
    name: "Frowning",
    symbol: ":(",
    tags: ["sad", "disappointed"],
  },
  {
    name: "Crying",
    symbol: ":'(",
    tags: ["sad", "disappointed"],
  },
  {
    name: "Crying",
    symbol: ";-;",
    tags: ["sad", "disappointed"],
  },
  {
    name: "Shrug",
    symbol: "¯\\_(ツ)_/¯",
    tags: ["confused", "indifferent"],
  },
  {
    name: "Angry",
    symbol: "ಠ_ಠ",
    tags: ["angry", "frustrated"],
  },
  {
    name: "Lenny Face",
    symbol: "( ͡° ͜ʖ ͡°)",
    tags: ["cool", "mischievous"],
  },
  {
    name: "Confused",
    symbol: "o_O",
    tags: ["confused", "indifferent"],
  },
  {
    name: "Hug",
    symbol: "(づ｡◕‿‿◕｡)づ",
    tags: ["love", "affection"],
  },
  {
    name: "Table Flip",
    symbol: "(╯°□°）╯︵ ┻━┻",
    tags: ["frustrated", "angry"],
  },
  {
    name: "Put Table Back",
    symbol: "┬─┬ ノ( ゜-゜ノ)",
    tags: ["frustrated", "angry"],
  },
  {
    name: "Double Table Flip",
    symbol: "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻",
    tags: ["frustrated", "angry"],
  },
  {
    name: "Put Double Table Back",
    symbol: "┬─┬ ︵ヽ(ಠ_ಠ)ﾉ︵ ┬─┬",
    tags: ["frustrated", "angry"],
  },
  {
    name: "Cat Smile",
    symbol: "ฅ^•ﻌ•^ฅ",
    tags: ["cute", "cat"],
  },
  // Surprised / shocked
  {
    name: "Surprised",
    symbol: ":O",
    tags: ["surprised", "shocked"],
  },
  {
    name: "Shocked",
    symbol: "O_O",
    tags: ["surprised", "shocked"],
  },
  {
    name: "Gasping",
    symbol: "(°ロ°)",
    tags: ["surprised", "shocked"],
  },
  {
    name: "Mind Blown",
    symbol: "(⊙_⊙)",
    tags: ["surprised", "shocked"],
  },
  // Sleepy / tired
  {
    name: "Sleepy",
    symbol: "(─.─)..zZ",
    tags: ["sleepy", "tired"],
  },
  {
    name: "Snoozing",
    symbol: "(-_-) zzz",
    tags: ["sleepy", "tired"],
  },
  {
    name: "Yawning",
    symbol: "(o´〰`o)",
    tags: ["sleepy", "tired"],
  },
  // Greeting / wave
  {
    name: "Waving",
    symbol: "( ˘‿˘ )ﾉ",
    tags: ["greeting", "wave"],
  },
  {
    name: "Hi",
    symbol: "(・ノ・)ノ",
    tags: ["greeting", "wave"],
  },
  {
    name: "Salute",
    symbol: "(￣^￣)ゞ",
    tags: ["greeting", "wave"],
  },
  // Animals
  {
    name: "Cat",
    symbol: "=^.^=",
    tags: ["cute", "cat", "animal"],
  },
  {
    name: "Sleepy Cat",
    symbol: "(=^･ω･^=)",
    tags: ["cute", "cat", "animal"],
  },
  {
    name: "Bear",
    symbol: "ʕ•ᴥ•ʔ",
    tags: ["cute", "animal", "bear"],
  },
  {
    name: "Bunny",
    symbol: "(\\(\\",
    tags: ["cute", "animal", "bunny"],
  },
  {
    name: "Fish",
    symbol: "><((°>",
    tags: ["animal", "fish"],
  },
  {
    name: "Bird",
    symbol: "(•ө•)♡",
    tags: ["cute", "animal", "bird"],
  },
  {
    name: "Pig",
    symbol: "(´(ｪ)`)",
    tags: ["cute", "animal", "pig"],
  },
  {
    name: "Dog",
    symbol: "U・ﻌ・U",
    tags: ["cute", "animal", "dog"],
  },
  // Celebration
  {
    name: "Cheering",
    symbol: "\\(^o^)/",
    tags: ["happy", "celebration"],
  },
  {
    name: "Hooray",
    symbol: "ヽ(´▽`)/",
    tags: ["happy", "celebration"],
  },
  {
    name: "Party",
    symbol: "ヽ(o＾▽＾o)ノ",
    tags: ["happy", "celebration", "dance"],
  },
  {
    name: "Excited",
    symbol: "\\(★ω★)/",
    tags: ["happy", "celebration"],
  },
  // Music / dance
  {
    name: "Singing",
    symbol: "♪( ´▽｀)",
    tags: ["music", "happy"],
  },
  {
    name: "Dancing",
    symbol: "ヾ(⌐■_■)ノ♪",
    tags: ["music", "dance", "cool"],
  },
  {
    name: "Listening",
    symbol: "(っ◕‿◕)っ ♬",
    tags: ["music", "happy"],
  },
  // Magic / sparkle
  {
    name: "Sparkle",
    symbol: "✧･ﾟ:*",
    tags: ["magic", "sparkle"],
  },
  {
    name: "Magic",
    symbol: "(✧◡✧)",
    tags: ["magic", "sparkle", "happy"],
  },
  {
    name: "Stars",
    symbol: "☆*:.｡.o(≧▽≦)o.｡.:*☆",
    tags: ["happy", "sparkle"],
  },
  {
    name: "Wink Sparkle",
    symbol: "(^_~)☆",
    tags: ["happy", "sparkle", "love"],
  },
  // More hearts / love
  {
    name: "Heart Eyes",
    symbol: "(♥◡♥)",
    tags: ["love", "affection"],
  },
  {
    name: "Sending Love",
    symbol: "(づ ◕‿◕ )づ ♡",
    tags: ["love", "affection"],
  },
  {
    name: "Heart",
    symbol: "<3",
    tags: ["love", "affection"],
  },
  // Smug / side-eye / mischief
  {
    name: "Smug",
    symbol: "(¬‿¬)",
    tags: ["smug", "mischievous"],
  },
  {
    name: "Side Eye",
    symbol: "¬_¬",
    tags: ["smug", "side-eye"],
  },
  {
    name: "Skeptical",
    symbol: "(￢_￢)",
    tags: ["confused", "side-eye"],
  },
  {
    name: "Cheeky",
    symbol: "(•‿•)",
    tags: ["mischievous", "happy"],
  },
  // Bonus expressions
  {
    name: "Innocent",
    symbol: "(◕‿◕✿)",
    tags: ["cute", "happy"],
  },
  {
    name: "Determined",
    symbol: "(•̀ᴗ•́)و",
    tags: ["happy", "cool"],
  },
  {
    name: "Disappointed Sigh",
    symbol: "(ーー;)",
    tags: ["sad", "disappointed"],
  },
  {
    name: "Embarrassed",
    symbol: "(⌒_⌒;)",
    tags: ["confused", "sad"],
  },
];
