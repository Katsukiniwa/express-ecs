import { PrismaClient } from '@prisma/client'
import { AuthenticationService } from '../src/module/authentication/domain/service/authentication/AuthenticationService'

const prisma = new PrismaClient();

const authenticationService = new AuthenticationService();

async function main() {
  const bob = await prisma.users.create({
    data: {
      account: {
        create: {
          email: 'bob@example.com',
          hashed_password: authenticationService.generateHashedPassword('bob'),
        }
      },
      author: {
        create: {
          name: 'bob',
          description: 'My name is bob',
          icon: 'https://example.com',
          novels: {
            create: {
              title: 'sample novel',
            }
          }
        }
      }
    },
  })
  console.log({ bob })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
