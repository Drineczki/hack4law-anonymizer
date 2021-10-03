export enum ModalType {
  uploadFile,
  addRule,
}

export interface IModalArgs {
  title?: string;
  message?: string;
  isActionLoading?: boolean;
  error?: string;

  onConfirm?: () => void;
  onDismiss?: () => void;
}
