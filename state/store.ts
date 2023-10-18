import { BehaviorSubject, distinctUntilChanged, map, Observable } from "rxjs";

export class Store<T> {

  private state$: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  /**
   * This method provides an observable representing a part of the state.
   * @param selectFn defines a method that select a subpart U the state T
   */
  public select<U>(selectFn: (state: T) => U): Observable<U> {
    return this.state$.asObservable().pipe(
      map(selectFn),
      distinctUntilChanged(),
    );
  }

  /**
   * This method provides a snapshot object representing a part of the state.
   * Used when working synchronously.
   * @param selectFn defines a method that select a subpart U the state T
   */
  public get<U>(selectFn: (state: T) => U): U {
    return selectFn(this.state$.getValue());
  }

  /**
   * This method is used to update the state
   * @param reduceFn defines a method that transform the state to another state
   */
  public update(reduceFn: (state: T) => T): void {
    this.state$.next(reduceFn(this.state$.getValue()));
  }
}
