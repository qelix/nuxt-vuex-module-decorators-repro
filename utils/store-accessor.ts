/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import { TestStore } from '../store/test';


let testStore: TestStore;

function initializeStores(store: Store<any>): void {
  testStore = getModule(TestStore, store);
}

export {
  initializeStores,
  testStore,
};
