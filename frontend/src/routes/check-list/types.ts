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
  required?: boolean
}

export interface Submission {
  formCode: string
  vehicleType: VehicleType
  recipients: string[]
  sections: FormSectionSubmission[]
  createdAt: Date
  createdBy: string
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

