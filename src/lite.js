import Peernet from './../node_modules/@leofcoin/peernet/dist/module/peernet.js'

export default class {
  constructor() {
    return this._init()
  }

  async _init() {
    await new Peernet({lite: true})

    peernet.subscribe('new-block', this._onNewBlock)
  }

  _onNewBlock(data) {
    pubsub.publish('new-block', data)
  }

  send({ from, to, amount, message }) {
    peernet.getUnspentForAddress(from)

    const data = {
      from,
      to,
      amount,
      signature
    }
    let message = await peernet.prepareMessage(peernet.peerId, peer.id, data.encoded)
    pubsub.publish()
  }
}
