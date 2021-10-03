import { RuleDTO } from './../dtos/rule-dto';
import { ProcessDTO } from './../dtos/process-dto';
import RequestService from './RequestService';

const PATH = '/files/process';

export const uploadDocument = async (pdf: File): Promise<ProcessDTO> => {
  const formData = new FormData();
  formData.append('file', pdf);

  const response = await RequestService.client.post(PATH, formData);

  return response.data;
};

export const uploadChanges = async (
  fileName: string,
  replacements: RuleDTO[],
  accept?: boolean
): Promise<ProcessDTO> => {
  const response = await RequestService.client.put(PATH, {
    fileName,
    replacementList: replacements,
    accept,
  });

  return response.data;
};
