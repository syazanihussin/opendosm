import { DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface StageSexRecord {
  stage: string
  sex: string
}

export interface EnrolmentRecord extends StageSexRecord {
  students: number
}

export interface CompletionRecord extends StageSexRecord {
  completion: number
}

export type EnrolmentSchoolDistrict = DistrictRecord & EnrolmentRecord
export type CompletionSchoolState = StateRecord & CompletionRecord
