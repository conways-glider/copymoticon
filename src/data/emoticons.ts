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
    tags: ["frustration", "anger"],
  },
  {
    name: "Put Table Back",
    symbol: "┬─┬ ノ( ゜-゜ノ)",
    tags: ["frustration", "anger"],
  },
  {
    name: "Double Table Flip",
    symbol: "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻",
    tags: ["frustration", "anger"],
  },
  {
    name: "Put Double Table Back",
    symbol: "┬─┬ ︵ヽ(ಠ_ಠ)ﾉ︵ ┬─┬",
    tags: ["frustration", "anger"],
  },
  {
    name: "Cat Smile",
    symbol: "ฅ^•ﻌ•^ฅ",
    tags: ["cute", "cat"],
  },
];
