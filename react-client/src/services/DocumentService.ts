import { ProcessDTO } from './../dtos/process-dto';
import RequestService from './RequestService';

export const uploadDocument = async (pdf: File): Promise<ProcessDTO> => {
  const formData = new FormData();
  formData.append('file', pdf);

  const response = await RequestService.client.post('/files/process', formData);

  return response.data;
};
