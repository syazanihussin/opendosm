import { BaseRecord } from '@/types/dataset.types'

export interface ArrivalRecord {
  country: string
  arrivals: number
  arrivals_male: number
  arrivals_female: number
}

export interface ArrivalStateRecord extends ArrivalRecord {
  soe: string //state
}

export type Arrival = BaseRecord & ArrivalRecord
export type ArrivalState = BaseRecord & ArrivalStateRecord
