import { Container } from 'inversify';
import { ClassConstructor, IocAdapter } from 'routing-controllers';

export class InversifyAdapter implements IocAdapter {
  public constructor(private readonly container: Container) {}

  public get<T>(someClass: ClassConstructor<T>): T {
    return this.container.resolve<T>(someClass);
  }
}
