import { CommandHandler } from "../../common/use_case/CommandHandler";
import { UserAccountRepository } from "../../domain/model/user_account/UserAccountRepository";
import { SignUpCommand } from "./SignUpCommand";

export class SignUpCommandHandler implements CommandHandler<SignUpCommand> {
  constructor(
    private userRepository: UserAccountRepository
  ) {}

  public handle(command: SignUpCommand) {
  }
}
