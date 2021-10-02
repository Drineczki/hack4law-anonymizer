import { RuleDTO } from './rule-dto';

export interface ProcessDTO {
  fileDownloadUri: string;
  fileName: string;
  replacements: RuleDTO[];
}
