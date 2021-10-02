import { RuleType } from '~/services/types';

export interface RuleDTO {
  entity: string;
  anonymization: string;
  anon_type: RuleType;
}
