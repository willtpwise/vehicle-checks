import { FormContentSection } from "../../types";

export const generalInfo: FormContentSection = {
  label: 'General Info',
  fields: [
    { label: 'Call Sign', type: 'text', helpText: "The vehicle's call sign. For example, Hornsby Heights 1.", required: true },
    { label: 'Roof Number', type: 'text', helpText: "The vehicle's aerial identification number, also known as the BFO number.", required: true },
    { label: 'Odometer', type: 'text', helpText: "The total number of kilometres the vehicle has travelled.", required: true },
  ]
}