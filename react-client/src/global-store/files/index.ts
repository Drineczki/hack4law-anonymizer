import { uploadDocument } from './../../services/DocumentService';
import { RuleDTO } from './../../dtos/rule-dto';

export interface FilesStore {
  documentUrl: string | null;
  documentName: string | null;
  rules: RuleDTO[] | null;

  processFile: (file: File) => Promise<void>;
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
});
