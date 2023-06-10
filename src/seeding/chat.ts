import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const chat =[
        {
            user_id: 1,
            message: 'Hello',
        },
        {
            user_id:1,
            message: 'World',
        }
    ]
  await Promise.all(
	chat.map((cr)=>{
		return prisma.chat.create({
		  data:  cr
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