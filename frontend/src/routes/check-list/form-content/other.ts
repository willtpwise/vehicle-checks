import { FormContent } from '../types';
import { generalInfo } from './common/generalInfo';

export const other = (): FormContent => ({
  code: 'other',
  sections: [
    generalInfo,
    {
      label: 'Mechanical Checks',
      fields: [
        {
          label: 'Tyres / Wheels',
          helpText:
            'Tread >3mm, Check for even wear, no rocks in between rear wheels. No Cuts in side wall. Check for damage to steel rim, wheel nuts are tight. Tyre pressures around 850kPa. Spare tyre likewise'
        },
        {
          label: 'Air Tanks',
          helpText: 'Bleed the air tanks. Check for signs of damage'
        },
        {
          label: 'Engine Oil',
          helpText:
            'prior to starting the truck, Check dip stick for correct oil level and observe colour of oil that may indicate oil change is required. Check for oil leaks under the truck.'
        },
        {
          label: 'Fuel filter / sedimentor',
          helpText:
            'Fuel filter/sedimentor located on passenger side. Check for particles or water trapped within. '
        },
        {
          label: 'Coolant Level / Radiator',
          helpText:
            'Check coolant reservoir level is between Min & Max marks on reservoir. Inspect radiator for debri buildup on fins, and for signs of leaks or damage'
        },
        {
          label: 'Brake fluid',
          helpText:
            'Check brake fluid level is between Min & Max marks on reservoir'
        },
        {
          label: 'Power steering fluid',
          helpText:
            'Check  power steering fluid level is between Min & Max marks on reservoir'
        },
        {
          label: 'Washer fluid',
          helpText:
            'Check fluid level on Washer Fluid Reservoir is close to full, top up with windscreen washer fluid if needed'
        },
        {
          label: 'Wipers',
          helpText:
            'Check condition of rubber blades, clean any muck buildup. Replace worn / dry / cracked blades. Test wiper operation and effectiveness of wipe'
        },
        {
          label: 'Tank level',
          helpText:
            'Check water tank is full. Check both sight tubes are clean and float can be seen clearly. Check fuel tank is at least 3/4 full. Check for exess oil film around tank filler cap.'
        },
      ]
    },
    {
      label: 'Vehicle warning systems',
      fields: [
        {
          label: 'Indicators/Hazards',
          helpText: 'Check that all bulbs function ok'
        },
        {
          label: 'Headlights (all settings Flash also)',
          helpText: 'Check that all bulbs function ok'
        },
        {
          label: 'Emergency Lights 1',
          helpText: 'Check that all bulbs function ok'
        },
        {
          label: 'Lights 2',
          helpText: 'Check that all bulbs function ok'
        },
        {
          label: 'Brake / Reverse Lights',
          helpText: 'Check that all bulbs function ok'
        },
        { label: 'Siren', helpText: 'Check functions ok' },
        { label: 'Horn', helpText: 'Check functions ok' },
      ]
    },
    {
      label: 'Pump',
      fields:
        [{
          label: 'Oil Level',
          helpText:
            'prior to starting the pump, Check dip stick for correct oil level and observe colour of oil that may indicate oil change is required. '
        },
        {
          label: 'Rear Controls',
          helpText:
            'check all rear controls on panel work properly, including pump start and stop, panel lighting'
        },
        {
          label: 'Crew Refuge controls',
          helpText:
            'Check pump can be started and operated from the refuge control panel. Turning off can only be done from rear panel controls'
        },
        {
          label: 'Cab controls',
          helpText:
            'Check pump can be started and operated from within the cab. Turning off can only be done from rear panel controls'
        },
        {
          label: 'Vehicle Emergency sprays',
          helpText:
            'Check for signs of damage. Check for leaks while pump is operating.'
        },
        {
          label: 'Pump Prime',
          helpText: 'Check primer pump runs properly'
        },
        {
          label: 'Portable Pump Onboard',
          helpText:
            'Check portable pump is secured, check oil and fuel levels, check for any signs of damage. Any salt residue may indicate the pump need to be flushed and cleaned. '
        },
        {
          label: 'Gauges operational',
          helpText: 'Check gauges function ok and there is no signs of damage'
        },
        { label: 'Foam Controls / Drums Full', helpText: '' },
        {
          label: 'No leaks',
          helpText:
            'With pump running, check for leaks throughout plumbing, at valves and connection points'
        },
        {
          label: 'Live Reel',
          helpText:
            'Check reels unwind freely, check manual and motorized windings, check locking pin, lubricate bearing bushes if needed, check hose for damage, check nozzles are not leaking.'
        },
        {
          label: 'Outlets',
          helpText:
            'Check for damage. Check caps are present and chained securely. Check shut off valves for leaks.'
        },
        {
          label: 'First Aid Kit(s), Defibrillator',
          helpText:
            'Check first aid kit and Defib are stored on drivers side middle locker. Check First Aid Kit is complete and nothing out of date. Check Defibrilator battery is OK.'
        },
        {
          label: 'Lockers, Suction Hose stowage, Steps',
          helpText: 'Check for damage'
        }]
    },
    {
      label: 'Cabin',
      fields:
        [{
          label: 'Blankets in holder',
          helpText: 'Check all 6 blankets are present and folded neatly'
        },
        {
          label: 'Maps',
          helpText:
            'Check maps are present. Check for damaged or excesively worn maps'
        },
        {
          label: 'Radio(s) (GRN / Fireground)',
          helpText:
            'Check all radios work properly. Check condition of aereals on cabin roof'
        },
        {
          label: 'Spray control free of obstruction',
          helpText:
            'Check spray controls in the cab can be opertated freely, and nothing has been placed that that will impede operation. '
        },
        {
          label: 'Cabin clean',
          helpText:
            'Clean any mud or excessive dirt on the floor mats, no food/water rubish in the blanket holders. '
        },
        {
          label: 'Portable Radios present / tested',
          helpText:
            ' Check all portable radios work properly. Check battery level on all radios and spare batteries too. Check for damage on mic/speaker cables'
        }]
    },
    {
      label: 'Damages',
      fields:
        [{ label: 'Corrosion', helpText: '' },
        { label: 'Dents', helpText: '' },
        { label: 'Windscreen Chips', helpText: '' },
        { label: 'Window Heatshields', helpText: '' }]
    },
  ],

})
