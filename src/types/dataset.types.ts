export type DatasetId =
  // Income datasets
  | 'hh_income'
  | 'hh_income_state'
  | 'hh_income_district'
  // Poverty datasets
  | 'hh_poverty'
  | 'hh_poverty_state'
  | 'hh_poverty_district'
  // Future datasets (extendable)
  | (string & {})

export interface GetDatasetProps {
  id: DatasetId
  date?: string
  state?: string
  district?: string
}

export type GetDatasetResponse<T> = T[]

export interface BaseRecord {
  date: string
}

export interface StateRecord extends BaseRecord {
  state: string
}

export interface DistrictRecord extends StateRecord {
  district: string
}
