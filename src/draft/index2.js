import chalk from 'chalk'
import { ThorClient } from '@vechain/sdk-network'

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
  'f': '#11111b'
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

export function makeColourScheme(list) {
  const base = list[0]
  const contrast = (!list[1] === base) ? list[1] : list[2];

  const colour1 = colours[base]
  const colour2 = colours[contrast]

  console.log(`ColourScheme: ${chalk.hex(colour1)(chars[base])} ${chalk.hex(colour2)(chars[contrast])}`)
  return [colour1, colour2]
}

export function mapColours(list, colourScheme) {
  const mapped = []
  for (let i = 0; i < list.length; i++) {
    const pickColour = (list[i] % 2 === 0) ? colourScheme[0] : colourScheme[1]
    const pair = [pickColour, chars3[list[i]]]
    mapped.push(pair)
  }
  return mapped
}

export function listToLines(list) {
  const line = list.slice(0, 8)
  if (line.length === 0) {
    return []
  }
  return [printLine(line), ...listToLines(list.slice(8))]
}

export function printLine(line) {
    
  console.log(`${chalk.hex(line[0][0])(line[0][1])}${chalk.hex(line[1][0])(line[1][1])}${chalk.hex(line[2][0])(line[2][1])}${chalk.hex(line[3][0])(line[3][1])}${chalk.hex(line[4][0])(line[4][1])}${chalk.hex(line[5][0])(line[5][1])}${chalk.hex(line[6][0])(line[6][1])}${chalk.hex(line[7][0])(line[7][1])}`)
  
  return
}


export function makePrint(list) {
  const colourScheme = makeColourScheme(list)

  const mapped = mapColours(list, colourScheme)
  console.log(``)

  const lines = listToLines(mapped)
  
  return lines
}

export function main() {
  const string1 = '00112233445566778899aabbccddeeff00112233445566778899aabb'
  const pkh1 = '3f765f0eeb5b081a764f10efb376d14aaa1a4d37a7853e4a98b987a0'
  const pkh2 = '97411CF2C12FC71C7C0F01CB1A54801D55811483197D9A1A9302575B'
  const pkh3 = '75E18E274772E7CE475FA30120E4B1D82557904ED8AF6F624CD849A3'
  const pkh4 = 'D83215996014D13CB7C792AAB4D12B4B6B0BFF0F964715C55A8209FC'
  const pkh5 = 'B2B47913FBB59163C29CF7A8D337B073596CD103F0B87C98D2717235'
  const pkh6 = '83E52D2F5A767207FB28F6539B92B34ED92BF174B72C1E167EDB24CA'
  const pkh7 = '4AD848D6B1BA96E166C04576DE2D034EF9516C716F3E61EDBB097614'
  const pkh8 = '203AD89731F708519A8826D9BBB95C1DFB2CB0C27045D63C3EA66ADF'
  const pkh9 = '4DD096B16C6003297D6CA5192EC291EFBEA2C073CBA78C0716BE1AA2'
  const pkh10 = '1004FBAF7E6683C5CB86FC6F839FCF42F8AC4887B931DE6F1293B6E9'
  const pkh11 = 'FB3C92B3CCB0FD70C76B3CA741BD468CFE65993A4CAA71D9B0412D21'
  const pkh12 = '8302A629023848DF9DE0AEDFE2A1204B2E9D27D7ED7AF84795EEA715'
  const pkh13 = 'A2D6E09DF703BF21192D64520A267CA2991ED9523B3F51CBC0AFC4F8'
  const pkh14 = '036E7FDF2D355C91B4E258DC37BABDF0F95087ED5094B8B4378443B4'
  const pkh15 = '4FE2B1004FBE8414850A5E1FA6D3D047EA42AF6791F5518098A2438C'
  const pkh16 = 'E4EA38947063F10B10C8441416B8E593E4FE7C9009CCFD70A3996B16'
  const pkh17 = '7273D6FA899B7D603778FABA321364D37F75F923FCC6652C206F40DE'
  const pkh18 = '1ADE33A0CE8F70924008807DCD0B56022DC1211DA48D192A51B3AD73'
  const pkh19 = 'FC457D271F626442509C2329691A7826956D765A0F1E71635DB1D40E'

  makePrint(pkh1)
  console.log(``)
  makePrint(pkh2.toLowerCase())
  console.log(``)
  makePrint(pkh3.toLowerCase())
  console.log(``)
  makePrint(pkh4.toLowerCase())
  console.log(``)
  makePrint(pkh5.toLowerCase())
  console.log(``)
  makePrint(pkh6.toLowerCase())
  console.log(``)
  makePrint(pkh7.toLowerCase())
  console.log(``)
  makePrint(pkh8.toLowerCase())
  console.log(``)
  makePrint(pkh9.toLowerCase())
  console.log(``)
  makePrint(pkh10.toLowerCase())
  console.log(``)
  makePrint(pkh11.toLowerCase())
  console.log(``)
  makePrint(pkh12.toLowerCase())
  console.log(``)
  makePrint(pkh13.toLowerCase())
  console.log(``)
  makePrint(pkh14.toLowerCase())
  console.log(``)
  makePrint(pkh15.toLowerCase())
  console.log(``)
  makePrint(pkh16.toLowerCase())
  console.log(``)
  makePrint(pkh17.toLowerCase())
  console.log(``)
  makePrint(pkh18.toLowerCase())
  console.log(``)
  makePrint(pkh19.toLowerCase())
}

main()