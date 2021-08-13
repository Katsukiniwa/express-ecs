import { DomainEvent } from './DomainEvent';
import { Entity } from './Entity';

export abstract class AggregateRoot<T> extends Entity<T> {
  abstract id: string;
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  public clearEvents(): void {
    this._domainEvents = [];
  }
}
