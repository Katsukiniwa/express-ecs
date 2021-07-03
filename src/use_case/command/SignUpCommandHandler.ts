import { CommandHandler } from "../../common/use_case/CommandHandler";
import { SignUpCommand } from "./SignUpCommand";

export interface SignUpCommandHandler extends CommandHandler<SignUpCommand> {
  handle(c: SignUpCommand): void;
}