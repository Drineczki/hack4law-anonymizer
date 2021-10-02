export enum ModalType {
  uploadFile,
}

export interface IModalArgs {
  title?: string;
  message?: string;
  isActionLoading?: boolean;
  error?: string;

  onConfirm?: () => void;
  onDismiss?: () => void;
}
