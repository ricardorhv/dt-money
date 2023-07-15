import { CaretLeft, CaretRight } from 'phosphor-react'
import { PageList, PaginationContainer } from './styles'

export function Pagination() {
  return (
    <PaginationContainer>
      <button>
        <CaretLeft size={24} />
      </button>
      <PageList>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </PageList>
      <button>
        <CaretRight size={24} />
      </button>
    </PaginationContainer>
  )
}
