export interface DomainEvent {
  occurredAt: Date;
  version: number;
  eventType: string;
}
