export type Variant = 'primary' | 'secondary' | 'danger'

export interface ButtonProps {
  label: string
  variant?: Variant
}
