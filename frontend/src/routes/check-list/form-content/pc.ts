import { FormContent } from '../types';
import { generalInfo } from './common/generalInfo';

export const other = (): FormContent => ({
  code: 'other',
  sections: [
    generalInfo,
    {
      label: '',
      fields:
        [{
          label: 'Tyres',
          helpText:
            'Tread >3mm, Check for even wear. No Cuts in side wall. Check for damage to steel rim, wheel nuts are tight. Check tyre pressures. Spare tyre likewise'
        },
        {
          label: 'Engine Oil',
          helpText:
            'prior to starting the pc, Check dip stick for correct oil level and observe colour of oil that may indicate oil change is required. Check for oil leaks under the pc.'
        },
        {
          label: 'Coolant Level',
          helpText:
            'Check coolant reservoir level is between Min & Max marks on reservoir. Inspect radiator for debri buildup on fins, and for signs of leaks or damage'
        },
        {
          label: 'Power Steering',
          helpText:
            'Check  power steering fluid level is between Min & Max marks on reservoir'
        },
        {
          label: 'Brake fluid',
          helpText:
            'Check brake fluid level is between Min & Max marks on reservoir'
        },
        {
          label: 'Washer Fluid / Wipers',
          helpText:
            'Check fluid level on Washer Fluid Reservoir is close to full, top up with windscreen washer fluid if needed'
        }]
    },
    {
      label: 'Vehicle warning systems',
      fields:
        [{
          label: 'Indicators/Hazards',
          helpText: 'Check that all bulbs function ok'
        },
        {
          label: 'Lights 1',
          helpText: 'Check that all bulbs function ok'
        },
        {
          label: 'Lights 2',
          helpText: 'Check that all bulbs function ok'
        },
        { label: 'Siren', helpText: 'Check functions ok' },
        {
          label: 'Headlights (all settings, flash also)',
          helpText: 'Check that all bulbs function ok'
        },
        {
          label: 'Brake / Reverse Lights',
          helpText: 'Check that all bulbs function ok'
        },
        { label: 'Horn', helpText: 'Check functions ok' },
        {
          label: 'First Aid Kit(s), Defibrillator',
          helpText: 'Check First Aid Kit is complete and nothing out of date.'
        }]
    }
  ],
})
