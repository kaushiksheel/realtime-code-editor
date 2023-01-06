import React from 'react';
import Select from "react-select";

import { languageOptions } from '../helpers/languages';



export const LanguageDropdown = ({onSelectChange}) => {

  return (
    <Select
    placeholder={`Filter By Category`}
    options={languageOptions}
    className="language-dropdown"
    defaultValue={languageOptions[0]}
    onChange={(selectedOption) => onSelectChange(selectedOption)}
  />
  )
}
