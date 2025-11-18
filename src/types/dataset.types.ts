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
