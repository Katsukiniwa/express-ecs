import { DomainEvent } from "./DomainEvent";

export interface DomainEventSubscriber {
  handleEvent(T: DomainEvent): void;
  targetEventType: string;
}
