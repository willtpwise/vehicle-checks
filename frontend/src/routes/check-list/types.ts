export interface FormContent {
  code: string
  sections: FormContentSection[]
}
export interface FormContentSection {
  label: string
  fields: FormContentField[]
}
export interface FormContentField {
  label: string
  type?: FieldType
  helpText?: string
}

export interface Submission {
  formCode: string
  vehicleType: VehicleType
  recipientEmail: string
  callSign: string
  bfoNumber: string
  odometer: number
  engineHours: number
  pumpHours: number
  sections: FormSectionSubmission[]
  createdAt: Date
}
export interface FormSectionSubmission {
  label: string
  fields: FormFieldSubmission[]
}
export interface FormFieldSubmission {
  label: string
  value: PassOrFailValue | string | number | Date | any
}

export type FieldType = 'text' | 'number' | 'passOrFail'
export type VehicleType = 'pc' | 'cat1' | 'other'
export type PassOrFailValue = 'pass' | 'fail' | 'n/a'

