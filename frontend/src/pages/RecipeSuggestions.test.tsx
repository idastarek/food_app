import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import RecipeSuggestions from './RecipeSuggestions'

vi.mock('axios')

const mockedAxios = vi.mocked(axios)

describe(RecipeSuggestions, () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    const mockIngredients = [
      { name: 'potato', quantity: '3', unit: 'pcs' },
      { name: 'onion', quantity: '1', unit: 'pcs' },
      { name: 'eggs', quantity: '4', unit: 'pcs' },
      { name: 'olive oil', quantity: '3', unit: 'tbsp' },
      { name: 'salt', quantity: '1', unit: 'tsp' },
    ]
    vi.mocked(axios.get).mockResolvedValue({ data: mockIngredients })

    render(<RecipeSuggestions />)
  })

  it('fetches ingredients from the API', async () => {
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'http://localhost:3000/api/ingredients'
      )
    })
  })

  it('shows matched recipes', async () => {
    expect(await screen.findByText('Tortilla de Papas')).toBeInTheDocument()
  })
})
