export interface GetGeoJsonProps {
  filename: string
}

export interface StateProperties {
  GID_1: string // e.g. "MYS.1_1"
  GID_0: string // e.g. "MYS"
  COUNTRY: string // e.g. "Malaysia"
  NAME_1: string // e.g. "Johor"
  VARNAME_1: string // e.g. "JohorDarulTakzim|Johore"
  NL_NAME_1: string // e.g. "NA"
  TYPE_1: string // e.g. "Negeri"
  ENGTYPE_1: string // e.g. "State"
  CC_1: string // e.g. "NA"
  HASC_1: string // e.g. "MY.JH"
  ISO_1: string // e.g. "MY-01"
}

export interface DistrictProperties {
  GID_2: string // e.g. "MYS.1.1_1"
  GID_0: string // e.g. "MYS"
  COUNTRY: string // e.g. "Malaysia"
  GID_1: string // e.g. "MYS.1_1"
  NAME_1: string // e.g. "Johor"
  NL_NAME_1: string // e.g. "NA"
  NAME_2: string // e.g. "BatuPahat"
  VARNAME_2: string // e.g. "NA"
  NL_NAME_2: string // e.g. "NA"
  TYPE_2: string // e.g. "Daerah"
  ENGTYPE_2: string // e.g. "District"
  CC_2: string // e.g. "NA"
  HASC_2: string // e.g. "MY.JH.BP"
}

export type Feature<P extends StateProperties | DistrictProperties> = GeoJSON.Feature<
  GeoJSON.MultiPolygon,
  P
>

export type GetGeoJsonResponse<P extends StateProperties | DistrictProperties> =
  GeoJSON.FeatureCollection<GeoJSON.MultiPolygon, P>
