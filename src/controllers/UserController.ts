import { PrismaClient, User } from "@prisma/client";

class UserController {
    private prisma: PrismaClient

    constructor(){
        this.prisma = new PrismaClient()
    }
    async create(data: Omit<User, 'id'>){
        try{
            return this.prisma.user.create({
                data: {
                    name: data.name,
                    email: data.email
                }
            })
        }catch(e){
            console.log(e)
        }
    }
}

export default UserController;