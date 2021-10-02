import React from 'react';
import { Slider, Switch, Input } from './parts';

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}
export const ToggleSwitch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Switch>
      <Input
        type='checkbox'
        defaultChecked={value}
        onChange={() => onChange(!value)}
      />
      <Slider></Slider>
    </Switch>
  );
};

export default ToggleSwitch;
