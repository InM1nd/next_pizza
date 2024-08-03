import React from 'react'
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
      <Title text='Filter' size='sm' className='mb-5 font-bold'/>

      {/* Top Checkboxes */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text="Can be build" value="1"/>
        <FilterCheckbox text="New" value="2"/>
      </div>

      {/* Price Filter */}
      <div className='mt-5 border-y border-y-neutral-100 by-6 pb-7'>
        <p className='font-bold mb-3'>Price From to To</p>
          <div className='flex gap-3 mb-5'>
            <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
            <Input type='number' placeholder='1000' min={100} max={1000} />
          </div>

          <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      {/* Ingredients Filter */}
      <CheckboxFiltersGroup 
        title='Ingredients'
        className='mt-5'
        limit={6}
        defaultItems={[
          {
            text: "Cheese sauce",
            value: "1",
          },
          {
            text: "Mozarrella",
            value: "2",
          },
          {
            text: "BBQ",
            value: "3",
          },
          {
            text: "Onion",
            value: "4",
          },
          {
            text: "Bacon",
            value: "5",
          },
        ]}
        items={[
          {
            text: "Cheese sauce",
            value: "1",
          },
          {
            text: "Mozarrella",
            value: "2",
          },
          {
            text: "BBQ",
            value: "3",
          },
          {
            text: "Onion",
            value: "4",
          },
          {
            text: "Bacon",
            value: "5",
          }
        ]}
      />
    </div>
  )
}

