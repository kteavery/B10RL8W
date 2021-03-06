type LogBase = {
  agentType:
    | 'contextless'
    | 'card-counting'
    | 'rule-tracking'
    | 'card-shark'
    | 'guru'
  simplified: boolean
}
type LogDataAttributes = {
  sessionName: string
  epochsTrained: number
  creationTime: number
  lastUpdate: number
  serializedContent: string
  snapshots: {
    meanScore: number
    meanPerformance: number
    stdDevPerformance: number
    stdDevScore: number
    epoch: number
  }[]
}
type LogHeaderAttributes = {
  sessionName: string
  epochsTrained: number
  lastUpdate: number
}
type LogUpdateAttributes = {
  additionalEpochsTrained: number
  serializedContent: string
  snapshots: {
    meanScore: number
    meanPerformance: number
    stdDevPerformance: number
    stdDevScore: number
    epoch: number
  }[]
}

export type LogData = LogBase & LogDataAttributes
export type LogHeader = LogBase & LogHeaderAttributes
export type LogRequest = {
  sessionName: string
}
export type LogUpdate = LogBase & LogUpdateAttributes

export type DefaultResponse = {
  message: string
}
export type ErrorResponse = {
  error: string
}
export type GETLogsResponse = {
  logs: LogHeader[]
}
export type GETLogResponse = {
  log: LogData
}
export type POSTLogResponse = DefaultResponse
export type DELETELogResponse = DefaultResponse
