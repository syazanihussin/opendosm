import { BaseRecord, StateRecord } from '@/types/dataset.types'

export interface MarriageRecord {
  sex: string
  abs: number
  rate: number
}

export interface MarriageAgeRecord extends MarriageRecord {
  age: string
}

export type Marriage = BaseRecord & MarriageRecord
export type MarriageState = StateRecord & MarriageRecord

export type MarriageAge = BaseRecord & MarriageAgeRecord
export type MarriageAgeState = StateRecord & MarriageAgeRecord
