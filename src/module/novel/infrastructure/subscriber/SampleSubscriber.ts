import { register } from "../../../../common/domain/DomainEventRegister";

@register
export class SampleSubscriber {
  constructor(public readonly targetEventType: string) {
    this.targetEventType = 'JoinCompany';
  }

  public handleEvent(): void {
    return console.log('foo');
  }
}
