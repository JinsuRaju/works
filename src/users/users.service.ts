import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const customer = await User.create({
      username: createUserDto.username,
      email: createUserDto.email
    })
    return customer;
  }

  async findAll() {
    const customers = await User.findAll({})
    return customers;

  }

  async findOne(id: any) {
    const user = await User.findByPk(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const customer = await User.findByPk(id);
    if(!customer){
      throw new NotFoundException('User not found');
    }
    else{
      const data=await customer.update({
        username:updateUserDto.username,
        email:updateUserDto.email
      })
      return data;
    }

  }

  async remove(id: any) {
    const user = await User.findByPk(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    else{
      const customer= await User.destroy({where:{id:id}})
      return 'user delete successfully';
    }
   
  }
}
