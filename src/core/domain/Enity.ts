import crypto from "crypto";

export class Entity<T> {
  public id: string;
  public props: T;

  constructor(props: T, id?: string) {
    !!id ? (this.id = id) : (this.id = crypto.randomUUID());
    this.props = props;
  }
}
