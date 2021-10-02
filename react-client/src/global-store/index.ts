import { UiStore, createUiStore } from './ui/index';
import create from 'zustand';

type GlobalStore = UiStore;

const globalStore = create<GlobalStore>((set, get) => ({
  ...createUiStore(set, get),
}));

export default globalStore;
