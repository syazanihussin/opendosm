import { BaseRecord, DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface PopulationRecord {
  sex: string
  age: string
  ethnicity: string
  population: number
}

export type Population = BaseRecord & PopulationRecord
export type PopulationState = StateRecord & PopulationRecord
export type PopulationDistrict = DistrictRecord & PopulationRecord
