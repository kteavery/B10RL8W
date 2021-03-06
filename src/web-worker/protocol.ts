export type TrainCommand = {
  command: 'train-agent'
  agentName: string
  epochs: number
  simplified: boolean
  agentType:
    | 'contextless'
    | 'card-counting'
    | 'rule-tracking'
    | 'card-shark'
    | 'guru'
}

export type CancelCommand = {
  command: 'cancel-work'
  data: null
}

export type EvaluateCommand = {
  command: 'evaluate-agents'
  agents: string[]
  simplified: boolean
}

export type Command = TrainCommand | CancelCommand | EvaluateCommand

export type AgentEvaluation = {
  meanScore: number
  stdDevScore: number
  meanPerformance: number
  stdDevPerformance: number
}

export type TrainingProgressMessage = {
  type: 'training-progress'
  epoch: number
  random: AgentEvaluation
  agent: AgentEvaluation
  heuristic: AgentEvaluation
  agentLoss: number
}

export type DoneMessage = {
  type: 'done'
}

export type Message = TrainingProgressMessage | DoneMessage

export function postMessage(message: Message) {
  ;(self as any).postMessage(JSON.stringify(message))
}
