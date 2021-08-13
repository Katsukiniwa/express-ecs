import '@/module/novel/infrastructure/subscriber/SampleSubscriber';
import { DomainEvent } from "./DomainEvent";
import { Constructor, GetImplementations } from "./DomainEventRegister";
import { DomainEventSubscriber } from "./DomainEventSubscriber";

export class DomainEventPublisher {
  private subscribers: Constructor<DomainEventSubscriber>[];

  constructor() {
    this.subscribers = GetImplementations();
  }

  public publish(domainEvent: DomainEvent): void {
    const eventType = domainEvent.eventType;

    this.subscribers.forEach(subscriberConstructor => {
      const subscriber = new subscriberConstructor();
      if (subscriber.targetEventType === eventType) {
        subscriber.handleEvent(domainEvent);
      }
    })
  }

  public publishAll(domainEvents: Array<DomainEvent>): void {
    domainEvents.forEach(domainEvent => {
      this.publish(domainEvent)
    })
  }
}
