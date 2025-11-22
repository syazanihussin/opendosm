import { DistrictRecord, StateRecord } from '@/types/dataset.types'

export interface SchoolRecord {
  schools: number
  stage: string
  type: string
}

export interface TeacherRecord {
  teachers: number
  stage: string
  sex: string
}

export interface LecturerRecord {
  university: string
  citizenship: string
  staff: number
  sex: string
}

export type SchoolsDistrict = DistrictRecord & SchoolRecord
export type TeachersDistrict = DistrictRecord & TeacherRecord
export type LecturersUni = StateRecord & LecturerRecord
