import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const foundByEmail = this.usersRepository.findByEmail(email);

    if (foundByEmail) {
      throw new Error("An User with this Email Already Exist!");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
