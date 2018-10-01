import { Player, State, Card } from '../simulator'
import { Agent } from '.'

// TODO: make an actual prng (or import)
function seededRandom(seed: number) {
  return Math.random
}

export function createRandomAgent(seed: number): Agent<null> {
  const random = seededRandom(seed)
  return {
    policy(state: State, player: Player, actions: Card[]) {
      return actions.map(action => ({
        action,
        quality: random(),
        trace: null,
      }))
    },
    train(feedBack: any) {
      return {
        meanLoss: 0,
        stdDevLoss: 1,
      }
    },
    serialize() {
      return 'null'
    },
  }
}
