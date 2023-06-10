import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const users =[
        {
            email: 'test@gmail.com',
            password: '312312',
        },
        {
            email:'sample@sample.com',
            password: 'password',
        }
    ]
  await Promise.all(
	users.map((user)=>{
		return prisma.user.create({
		  data:  user 
		})  
	  })  
  )
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })