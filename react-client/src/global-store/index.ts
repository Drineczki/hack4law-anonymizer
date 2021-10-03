import { FilesStore } from './files';
import { UiStore, createUiStore } from './ui';
import create from 'zustand';
import { createFilesStore } from './files';

type GlobalStore = UiStore & FilesStore;

const globalStore = create<GlobalStore>((set, get) => ({
  ...createUiStore(set, get),
  ...createFilesStore(set, get),
}));

export default globalStore;
