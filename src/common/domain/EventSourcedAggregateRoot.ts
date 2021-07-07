import { DomainEvent } from "./DomainEvent";

export abstract class EventSourcedAggregateRoot {
  abstract id: number | null;
  abstract domainEvents: DomainEvent[];

  protected occur(domainEvent: DomainEvent): void {
    this.domainEvents = [...this.domainEvents, domainEvent]
  }
}