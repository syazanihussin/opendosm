import { BaseRecord, StateRecord } from '@/types/dataset.types'

export interface ElectricityConsumptionRecord {
  sector: string
  consumption: number
}

export interface ElectricitySupplyRecord {
  sector: string
  supply: number
}

export interface ElectricityAccessRecord {
  households: number
}

export type ElectricityConsumption = BaseRecord & ElectricityConsumptionRecord
export type ElectricitySupply = BaseRecord & ElectricitySupplyRecord
export type ElectricityAccessState = StateRecord & ElectricityAccessRecord
