import { uploadDocument } from './../../services/DocumentService';
import { RuleDTO } from './../../dtos/rule-dto';

export interface FilesStore {
  documentUrl: string | null;
  documentName: string | null;
  rules: RuleDTO[] | null;

  processFile: (file: File) => Promise<void>;
  modifyRule: (index: number, newRule: RuleDTO) => void;
  deleteRule: (index: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createFilesStore = (set, _): FilesStore => ({
  documentUrl: null,
  documentName: null,
  rules: null,

  processFile: async (file: File) => {
    const response = await uploadDocument(file);

    set(() => ({
      documentUrl: response.fileDownloadUri,
      documentName: response.fileName,
      rules: response.replacements,
    }));
  },
  modifyRule: (index, newRule) => {
    set((prev) => {
      const newRules = [...prev.rules];
      newRules[index] = { ...newRule };

      return {
        rules: newRules,
      };
    });
  },
  deleteRule: (index) => {
    set((prev) => {
      const newRules = [...prev.rules];
      newRules.splice(index, 1);

      return {
        rules: newRules,
      };
    });
  },
});
