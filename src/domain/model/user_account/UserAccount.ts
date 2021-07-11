import { DomainEvent } from "../../../common/domain/DomainEvent";
import { EventSourcedAggregateRoot } from "../../../common/domain/EventSourcedAggregateRoot";

export class UserAccount extends EventSourcedAggregateRoot {
  constructor(
    public readonly id: number | null = null,
    public readonly domainEvents: DomainEvent[] = []
  ) {
    super();
  }
}
