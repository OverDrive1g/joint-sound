export interface BaseUseCase<C, R> {
  execute(command: C): Promise<R>;
}
