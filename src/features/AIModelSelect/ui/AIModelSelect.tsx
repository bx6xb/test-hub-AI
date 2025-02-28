import { Arrow, Dropdown } from '@/shared'
import { useState } from 'react'
import styled from 'styled-components'
import { AI_MODELS } from '../model'

export const AIModelSelect = () => {
  const [selected, setSelected] = useState('ChatGPT')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onOptionChange = (id: string) => setSelected(id)

  const mappedAIModels = AI_MODELS.map(model => ({
    id: model,
    label: (
      <Model key={model}>
        <img src={`/images/${model}.svg`} alt={model} />
        {model}
      </Model>
    ),
  }))

  return (
    <Dropdown
      top="-150px"
      options={mappedAIModels}
      onOptionChange={onOptionChange}
      selected={selected}
      getModalState={setIsModalOpen}
    >
      <Select>
        <img src={`/images/${selected}.svg`} alt={selected} />
        {selected}
        <Arrow isArrowUp={isModalOpen} />
      </Select>
    </Dropdown>
  )
}

const Select = styled.div`
  min-width: 147px;
  height: 40px;
  padding: 10px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
`
const Model = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;
`
