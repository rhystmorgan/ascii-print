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
  const reversed = list.split('').reverse()
  const base = reversed[0]
  const contrast = (!reversed[2] === base) ? reversed[2] : reversed[4];

  const colour1 = colours[base]
  const colour2 = colours[contrast]

  console.log(`ColourScheme: ${chalk.hex(colour1)(chars[base])} ${chalk.hex(colour2)(chars[contrast])}`)
  return [colour1, colour2]
}

export function mapColours(list, colourScheme) {
  const mapped = []
  for (let i = 0; i < list.length; i++) {
    const pickColour = (list[i] % 2 === 0) ? colourScheme[0] : colourScheme[1]
    const pair = [pickColour, chars[list[i]]]
    mapped.push(pair)
  }
  return mapped
}

export function listToLines(list, blockData, colourScheme) {
  const line = list.slice(0, 8)
  if (line.length === 0) {
    return []
  }
  return [printLine(line, [blockData[0], blockData[1]], colourScheme), ...listToLines(list.slice(8), blockData.slice(2), colourScheme)]
}

export function printLine(line, pair, colourScheme) {
    
  console.log(`${chalk.hex(line[0][0])(line[0][1])}${chalk.hex(line[1][0])(line[1][1])}${chalk.hex(line[2][0])(line[2][1])}${chalk.hex(line[3][0])(line[3][1])}${chalk.hex(line[4][0])(line[4][1])}${chalk.hex(line[5][0])(line[5][1])}${chalk.hex(line[6][0])(line[6][1])}${chalk.hex(line[7][0])(line[7][1])}  ${chalk.hex(colourScheme[0])(pair[0])}${chalk.hex(colourScheme[1])(pair[1])}`)
  
  return
}

export function makeMappedBlock(list, colourScheme) {
  
  const mapped = mapColours(list, colourScheme)
  console.log(``)
  
  return mapped
}

export function printExpandedBlock(block) {
  const blockNo = block.number
  const blockId = block.id
  const blockTimestamp = block.timestamp
  const blockTxs = block.transactions.length
  const blockGas = block.gasUsed
  const blockBeneficiary = block.beneficiary
  const blockSize = block.size
  const blockSigner = block.signer
  
  const blockData = ['Block Number: ', blockNo, 'Block ID: ', blockId, 'Timestamp: ', blockTimestamp, 'Transactions: ', blockTxs, 'Gas Used: ', blockGas, 'Block Size: ', blockSize, 'Beneficiary: ', blockBeneficiary, 'Signer: ', blockSigner]
  const colourScheme = makeColourScheme(block.id.slice(2,66))
  
  const mapped = makeMappedBlock(block.id.slice(2,66), colourScheme)
  
  const lines = listToLines(mapped, blockData, colourScheme)
  
  return lines

}

export async function main() {
  const thor = ThorClient.at("https://testnet.vechain.org");
  
  const genesis = await thor.blocks.getBlockExpanded(0);
  const best = await thor.blocks.getBestBlockExpanded();
  const max = best.number
  
  const qty = 10
  printExpandedBlock(genesis)

  for (let i = 0; i < qty; i++) {
    const int = Math.floor(Math.random() * max)
    console.log(`Block ${int}`)
    const block = await thor.blocks.getBlockExpanded(int);
    printExpandedBlock(block)
    console.log(``)
  }
  
}

main()