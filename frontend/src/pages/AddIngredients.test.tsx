import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import axios from 'axios'
import AddIngredients from './AddIngredients'

vi.mock('axios')

describe(AddIngredients, () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    vi.mocked(axios.get).mockResolvedValue({
      data: [{ name: 'Tomato', quantity: '1', unit: 'kg' }],
    })
  })

  it('removes an ingredient from the UI without writing to localStorage', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

    render(
      <MemoryRouter>
        <AddIngredients />
      </MemoryRouter>
    )

    expect(await screen.findByText('Tomato')).toBeInTheDocument()

    await userEvent.click(
      screen.getByRole('button', { name: 'Remove Tomato' })
    )

    expect(screen.queryByText('Tomato')).not.toBeInTheDocument()
    expect(setItemSpy).not.toHaveBeenCalled()
  })
})
