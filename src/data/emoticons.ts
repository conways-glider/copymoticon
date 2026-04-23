export interface Emoticon {
  name: string;
  symbol: string;
  tags?: string[];
}

export const StaticEmoticons: Emoticon[] = [
  // Happy / joy
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
    name: "Determined",
    symbol: "(•̀ᴗ•́)و",
    tags: ["happy", "cool"],
  },
  // Celebration
  {
    name: "Cheers",
    symbol: "\\o/",
    tags: ["happy", "joy"],
  },
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
  // Sad / disappointed
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
    name: "Disappointed Sigh",
    symbol: "(ーー;)",
    tags: ["sad", "disappointed"],
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
  // Angry / frustrated
  {
    name: "Angry",
    symbol: "ಠ_ಠ",
    tags: ["angry", "frustrated"],
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
  // Confused / indifferent
  {
    name: "Shrug",
    symbol: "¯\\_(ツ)_/¯",
    tags: ["confused", "indifferent"],
  },
  {
    name: "Confused",
    symbol: "o_O",
    tags: ["confused", "indifferent"],
  },
  {
    name: "Embarrassed",
    symbol: "(⌒_⌒;)",
    tags: ["confused", "sad"],
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
  // Cool / mischievous
  {
    name: "Lenny Face",
    symbol: "( ͡° ͜ʖ ͡°)",
    tags: ["cool", "mischievous"],
  },
  {
    name: "Cheeky",
    symbol: "(•‿•)",
    tags: ["mischievous", "happy"],
  },
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
  // Love / affection
  {
    name: "Hug",
    symbol: "(づ｡◕‿‿◕｡)づ",
    tags: ["love", "affection"],
  },
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
  // Cute / animals
  {
    name: "Cat Smile",
    symbol: "ฅ^•ﻌ•^ฅ",
    tags: ["cute", "cat"],
  },
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
  {
    name: "Innocent",
    symbol: "(◕‿◕✿)",
    tags: ["cute", "happy"],
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
];
