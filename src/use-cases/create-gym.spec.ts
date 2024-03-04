import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-respository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should to register', async () => {
    const { gym } = await sut.execute({
      title: 'Js Gym',
      description: null,
      phone: null,
      latitude: -19.9206729,
      longitude: -43.9789885,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
