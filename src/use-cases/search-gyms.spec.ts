import { expect, describe, it, beforeEach } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-respository'

let GymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    GymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(GymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await GymsRepository.create({
      title: 'Js Gym',
      description: null,
      phone: null,
      latitude: -19.9206729,
      longitude: -43.9789885,
    })

    await GymsRepository.create({
      title: 'Ts Gym',
      description: null,
      phone: null,
      latitude: -19.9206729,
      longitude: -43.9789885,
    })

    const { gyms } = await sut.execute({
      query: 'Js',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Js Gym' })])
  })

  it('should be able to fetch paginated gym search', async () => {
    for (let i = 1; i <= 22; i++) {
      await GymsRepository.create({
        title: `Js Gym ${i}`,
        description: null,
        phone: null,
        latitude: -19.9206729,
        longitude: -43.9789885,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Js',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Js Gym 21' }),
      expect.objectContaining({ title: 'Js Gym 22' }),
    ])
  })
})
