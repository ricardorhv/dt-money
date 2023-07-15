import styled from 'styled-components'

export const PaginationContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  button {
    background: transparent;
    border: none;
  }
`

export const PageList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 6px;

  li {
    background: ${(props) => props.theme['gray-600']};
    padding: 0.8rem 1rem;
    border-radius: 6px;
    cursor: pointer;

    font-weight: bold;
  }
`
