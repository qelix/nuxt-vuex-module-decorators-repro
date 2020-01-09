import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'test', stateFactory: true, namespaced: true })
export class TestStore extends VuexModule {
  private _testState: string = 'test';

  get test() {
    return this._testState;
  }

  @Mutation
  setTest(value: string) {
    this._testState = value;
  }
}
