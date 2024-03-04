import { CreateGymUseCase } from '../create-gym'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeCreateGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const usecase = new CreateGymUseCase(gymsRepository)

  return usecase
}
