import { StateRecord } from '@root/types/dataset.types'

export interface WaterConsumptionRecord {
  sector: string
  value: number
}

export interface WaterProductionRecord {
  value: number
}

export interface WaterAccessRecord {
  strata: string
  proportion: number
}

export type WaterConsumptionState = StateRecord & WaterConsumptionRecord
export type WaterProductionState = StateRecord & WaterProductionRecord
export type WaterAccessState = StateRecord & WaterAccessRecord
