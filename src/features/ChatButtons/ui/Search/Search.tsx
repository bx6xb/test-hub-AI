import { setSearchTerm } from '@/entities'
import { useAppDispatch, useAppSelector } from '@/shared'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

export const Search = () => {
  const searchTerm = useAppSelector(state => state.appSlice.searchTerm)
  const dispatch = useAppDispatch()

  const [isSearching, setIsSearching] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleSearching = () => setIsSearching(!isSearching)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.currentTarget.value))
  }

  useEffect(() => {
    if (isSearching) {
      inputRef.current?.focus()
    } else {
      dispatch(setSearchTerm(''))
    }
  }, [isSearching])

  return (
    <SearchContainer $isSearching={isSearching}>
      <SearchButton onClick={toggleSearching}>
        {isSearching ? (
          'X'
        ) : (
          <img src="/images/search.svg" alt="search chat" width={18} height={18} />
        )}
      </SearchButton>

      <Input
        ref={inputRef}
        value={searchTerm}
        onChange={onInputChange}
        $isSearching={isSearching}
      />
    </SearchContainer>
  )
}

const SearchContainer = styled.div<{ $isSearching: boolean }>`
  width: 40px;
  height: 40px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: 0.6s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  ${({ $isSearching }) =>
    $isSearching &&
    css`
      flex: 1;
      min-width: 40px;
      overflow: visible;
    `}
`
const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--border-color);
  font-weight: 600;
`
const Input = styled.input<{ $isSearching: boolean }>`
  all: unset;
  flex: 1;
  margin-right: 11px;

  ${({ $isSearching }) =>
    !$isSearching &&
    css`
      pointer-events: none;
    `}
`
