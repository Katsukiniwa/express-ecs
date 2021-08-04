export abstract class Entity<T> {
  abstract id: string;

  public equals(that: Entity<T>): boolean {
    return this.id === that.id;
  }
}
