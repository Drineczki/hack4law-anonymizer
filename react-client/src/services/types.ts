export enum RuleType {
  Internet = 'internet',
  Numerical = 'numerical',
  Place = 'place',
  GeoLoc = 'geoloc',
  Personal = 'pers',
}

const RuleToStringMap = {
  [RuleType.Internet]: 'Internet',
  [RuleType.Numerical]: 'Dane Numeryczne',
  [RuleType.Place]: 'Dane Administracyjne',
  [RuleType.GeoLoc]: 'Dane Administracyjne',
  [RuleType.Personal]: 'Dane Osobiste',
};

export const mapRuleTypeToString = (type: RuleType) => {
  return RuleToStringMap[type];
};
