import { FormContent } from '../types';

export const other = (): FormContent => ({
  code: 'other',
  sections: [
    {
      label: 'General Info',
      fields: [
        { label: 'BFO Number', type: 'text', helpText: 'Some help text...' },
        { label: 'Odometer', type: 'text', helpText: 'Some help text...' },
      ]
    },
    {
      label: 'Mechanical Checks',
      fields: [
        { label: 'Tyres / Wheels', helpText: 'Some help text...' },
        { label: 'Air Tanks', helpText: 'Some help text...' },
        { label: 'Engine Oil', helpText: 'Some help text...' },
        { label: 'Fuel filter / sedimentor', helpText: 'Some help text...' },
        { label: 'Coolant Level / Radiator', helpText: 'Some help text...' },
        { label: 'Brake fluid', helpText: 'Some help text...' },
        { label: 'Power steering fluid', helpText: 'Some help text...' },
        { label: 'Washer fluid', helpText: 'Some help text...' },
        { label: 'Wipers', helpText: 'Some help text...' },
        { label: 'Tank level', helpText: 'Some help text...' },
      ]
    },
  ],
})
