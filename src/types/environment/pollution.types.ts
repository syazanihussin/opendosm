import { BaseRecord } from '@root/types/dataset.types'

export interface AirPollutionRecord {
  pollutant: string
  concentration: number
}

export interface GHGEmissionRecord {
  source: string
  emissions: number
}

export interface WaterPollutionBasinRecord {
  basins_monitored: string
  measure: string
  status: string
  n_basins: number
  proportion: number
}

export type AirPollution = BaseRecord & AirPollutionRecord
export type GHGEmission = BaseRecord & GHGEmissionRecord
export type WaterPollutionBasin = BaseRecord & WaterPollutionBasinRecord
