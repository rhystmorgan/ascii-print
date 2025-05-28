import { subscriptions, TESTNET_URL } from '@vechain/sdk-network';
import WebSocket from 'isomorphic-ws';
import { printExpandedBlock } from './print.js'

export async function subscribe() {
  // The URL for subscribing to the block
  const wsURL = subscriptions.getBlockSubscriptionUrl(TESTNET_URL);

  // Any websocket library can be used to connect to the websocket
  const ws = new WebSocket(wsURL);

  // Error handling
  ws.on('error', console.error);

  // Connection opened
  ws.on('open', () => {
    console.log('connected');
  });

  // Message received
  ws.on('message', (data) => {
    const block = JSON.parse(data)

    printExpandedBlock(block)
  });
}

subscribe()