import chalk from 'chalk'

const colours = {
  '0': '#f5e0dc',
  '1': '#f2cdcd',
  '2': '#f5c2e7',
  '3': '#cba6f7',
  '4': '#f38ba8',
  '5': '#eba0ac',
  '6': '#fab387',
  '7': '#f9e2af',
  '8': '#a6e3a1',
  '9': '#94e2d5',
  'a': '#89dceb',
  'b': '#74c7ec',
  'c': '#89b4fa',
  'd': '#b4befe',
  'e': '#cdd6f4',
  'f': '#1e1e2e'
}

const chars = {
  '0': '█',
  '1': '█',
  '2': '█',
  '3': '█',
  '4': '█',
  '5': '█',
  '6': '█',
  '7': '█',
  '8': '█',
  '9': '█',
  'a': '█',
  'b': '█',
  'c': '█',
  'd': '█',
  'e': '█',
  'f': '█'
}

const chars2 = {
  '0': '░',
  '1': '▒',
  '2': '▓',
  '3': '█',
  '4': '▄',
  '5': '▌',
  '6': '▐',
  '7': '▀',
  '8': '░',
  '9': '▒',
  'a': '▓',
  'b': '█',
  'c': '▄',
  'd': '▌',
  'e': '▐',
  'f': '▀',
}

const chars3 = {
  '0': '░',
  '1': '▒',
  '2': '▓',
  '3': '█',
  '4': '▄',
  '5': '▌',
  '6': '▐',
  '7': '▀',
  '8': '┤',
  '9': '┐',
  'a': '└',
  'b': '┴',
  'c': '┬',
  'd': '├',
  'e': '┘',
  'f': '┌'
}

export function toPairs(string) {
  const charList = string.split('')
  function toPair(charList) {
    if (charList.length === 0) {
      return []
    }
    // const base = charList[0]
    // const contrast = (!charList[1] === base) ? charList[1] : charList[2];

    // const colour1 = colours(base)
    // const colour2 = colours(contrast)

    return [charList[0] + charList[1], ...toPair(charList.slice(2))]
  }
  return toPair(charList)
}

export function pairsToLines(pairs) {
  const line = pairs.slice(0, 7)

  if (pairs.length === 0) {
    return []
  }
  return [mapColours(line), ...pairsToLines(pairs.slice(7))]
}

export function mapColours(line) {
  // for (let i = 0; i < line.length; i++) {
  //   const pair = [colours[line[i][0]], chars[line[i][1]]]
  //   return pair
  //   console.log(chalk.hex(pair[0])(pair[1]))
  // }
  console.log(`${chalk.hex(colours[line[0][0]])(chars2[line[0][1]])}${chalk.hex(colours[line[1][0]])(chars2[line[1][1]])}${chalk.hex(colours[line[2][0]])(chars2[line[2][1]])}${chalk.hex(colours[line[3][0]])(chars2[line[3][1]])}${chalk.hex(colours[line[4][0]])(chars2[line[4][1]])}${chalk.hex(colours[line[5][0]])(chars2[line[5][1]])}${chalk.hex(colours[line[6][0]])(chars2[line[6][1]])} `)
  
  return 
}

export function makePrint(list) {
  const pairs = toPairs(list)


  const lines = pairsToLines(pairs)
  
  // function print(line) { 
  //   var mappedLine = []
  //   console.log(mappedLine)
  //   if (mappedLine.length === 4) {
  //     console.log(chalk.hex(mappedLine[0][0])(mappedLine[0][1]) + chalk.hex(mappedLine[1][0])(mappedLine[1][1]) + chalk.hex(mappedLine[2][0])(mappedLine[2][1]) + chalk.hex(mappedLine[3][0])(mappedLine[3][1]))
  //     return mappedLine
  //   }
  //   console.log(mappedLine)
  // }

  // function printAll(lines) {
  //   for (let i = 0; i < lines.length; i++) {
  //     print(lines[i])
  //   }
  // }

  // return printAll(lines)
  return lines
}

export function main() {
  const string1 = '00112233445566778899aabbccddeeff00112233445566778899aabb'
  const pkh = '3f765f0eeb5b081a764f10efb376d14aaa1a4d37a7853e4a98b987a0'
  makePrint(pkh)
}

main()