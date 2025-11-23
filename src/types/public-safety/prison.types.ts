import { StateRecord } from '@root/types/dataset.types'

export interface PrisonerRecord {
  sex: string
  prisoners: number
}

export interface PrisonerPrisonRecord extends PrisonerRecord {
  prison: string
}

export type PrisonerState = StateRecord & PrisonerRecord
export type PrisonerPrisonState = StateRecord & PrisonerPrisonRecord
