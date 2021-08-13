import { DomainEventSubscriber } from "./DomainEventSubscriber";

export type Constructor<T> = {
  new(...args: any[]): T;
  readonly prototype: T;
};
export const implementations: Constructor<DomainEventSubscriber>[] = [];

export function GetImplementations(): Constructor<DomainEventSubscriber>[] {
  return implementations;
}

export function register<T extends Constructor<DomainEventSubscriber>>(ctor: T): T {
  implementations.push(ctor);
  return ctor;
}
