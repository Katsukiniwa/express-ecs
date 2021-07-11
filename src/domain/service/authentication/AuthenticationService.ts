import bcrypt from "bcryptjs";

export class AuthenticationService {
  public generateHashedPassword(rawPassword: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(rawPassword, salt);

    return hash;
  }
}
