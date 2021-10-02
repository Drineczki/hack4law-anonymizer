import { ModalType, IModalArgs } from './../../components/Modal/types';

export interface UiStore {
  openedModal: ModalType | null;
  modalArgs: IModalArgs;

  openModal: (modal: ModalType, args?: IModalArgs) => void;
  modifyModalArgs: (args: IModalArgs) => void;
  closeModal: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createUiStore = (set, _): UiStore => ({
  openedModal: null,
  modalArgs: {},

  openModal: (modal, args) => set(() => ({ openedModal: modal, args })),
  modifyModalArgs: (args) => set(() => ({ args })),
  closeModal: () => set(() => ({ openedModal: null, args: {} })),
});
