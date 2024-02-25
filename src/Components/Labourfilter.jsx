import React, { useState } from 'react';
import Select from 'react-select';
import './Labourfilter.css';
import { useTranslation } from 'react-i18next';
export default function Labourfilter() {
  const [jobType, setJobType] = useState(null);
  const [searchText, setSearchText] = useState('');
  const { t } = useTranslation();
  const jobTypeOptions = [
  
    { value: 'photography', label: 'Welding' },
    { value: 'video editing', label: 'carpentary' },
    { value: 'logo making', label: 'Painting' },
    { value: 'building website', label: 'Construction' },
    { value: 'making stickers', label: 'Electrical' },
  ];

  const resetAllValues = () => {
    setJobType(null);
    setSearchText('');
  };

  return (
    <div style={{ margin: 20 }}>
      <h1 className="text-4xl font-bold mb-4">{t("Available Labour Jobs.4")}</h1>
      <div className="search-container">
        <div className="select-wrapper">
          <label>{t("JobType.4")}</label>
          <Select
            options={jobTypeOptions}
            value={jobType}
            onChange={setJobType}
            isMulti
            isSearchable
            noOptionsMessage={() => 'No Job found'}
            styles={{
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                color: 'gray',
              }),
              clearIndicator: (baseStyles) => ({
                ...baseStyles,
                color: 'red',
              }),
              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                color: 'black',
              }),
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: 'red',
              }),
              multiValueRemove: (baseStyles, state) => ({
                ...baseStyles,
                color: state.isFocused ? 'red' : 'gray',
                backgroundColor: state.isFocused ? 'black' : 'lightgreen',
              }),
            }}
          />
        </div>

        <div className="text-input-wrapper">
          <label>{t("Pincode.4")}</label>
          <input
            type="number"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={t("EnterPincode.4")}
          />
        </div>
      </div>

      <div id="button-container5">
        <button id="search-button5">{t("Search.4")}</button>
        <button id="reset-button5" onClick={resetAllValues}>
        {t("Reset.4")}
        </button>
      </div>
    </div>
  );
}
