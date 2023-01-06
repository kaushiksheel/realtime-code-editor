import React from 'react';
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";

export const ThemeDropdown = ({theme,handleThemeChange}) => {

  return (
    <Select
    className='theme-dropdown'
    placeholder={`Select Theme`}
    
    options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
      label: themeName,
      value: themeId,
      key: themeId,
    }))}
    value={theme}
    onChange={handleThemeChange}
  />
  )
}
