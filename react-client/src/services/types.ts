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

export const mapStringToRule= (value: any) => {
  switch(value) {
    case 'internet':
      return RuleType.Internet;
    case 'numerical':
      return RuleType.Numerical;
    case 'place':
      return RuleType.Place;
    case 'geoloc':
      return RuleType.GeoLoc;
    case 'pers':
      return RuleType.Personal;
  }
};
