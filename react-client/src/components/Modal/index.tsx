import React from 'react';
import { useStore } from '~/global-store/hooks';
import AddFileModal from './AddFileModal';
import AddRuleModal from './AddRuleModal';
import { ModalType } from './types';

export const ModalsContainer: React.FC = () => {
  const { openedModal, closeModal } = useStore((state) => state);

  const getCurrModal = () => {
    if (!openedModal && openedModal !== 0) return null;

    switch (openedModal) {
      case ModalType.uploadFile:
        return <AddFileModal onClose={() => closeModal()} />;
      case ModalType.addRule:
        return <AddRuleModal onClose={() => closeModal()} />;

      default:
        throw new Error('No such modal!');
    }
  };

  if (openedModal === null) return null;

  return getCurrModal();
};

export default ModalsContainer;
