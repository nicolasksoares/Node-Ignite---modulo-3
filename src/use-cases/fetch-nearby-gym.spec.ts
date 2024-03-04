import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-respository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let GymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    GymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(GymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await GymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -19.9206729,
      longitude: -43.9789885,
    })

    await GymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -27.0610928,
      longitude: -49.6401091,
    })

    const { gyms } = await sut.execute({
      userLatitude: -19.9206729,
      userLongitude: -43.9789885,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
