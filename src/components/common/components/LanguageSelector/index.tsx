import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContainer } from './styledComponent';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <LanguageContainer>
      <select onChange={handleChange} value={i18n.language}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="hi">Hindi</option>
      </select>
    </LanguageContainer>
  );
}

export default LanguageSelector;
