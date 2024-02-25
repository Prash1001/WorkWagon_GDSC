import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import "./Labourfilter.css";
import { useTranslation } from "react-i18next";

export default function Labourfilter() {
  const [sitename, setSitename] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [jobsFound, setJobsFound] = useState(null); // Change initial state to null
  const { t } = useTranslation();

  const sitenameOptions = [
    { value: "Welding", label: "Welding" },
    { value: "Carpentry", label: "Carpentry" },
    { value: "Painting", label: "Painting" },
    { value: "Construction", label: "Construction" },
    { value: "Electrical", label: "Electrical" },
  ];

  const resetAllValues = () => {
    setSitename(null);
    setSearchText("");
    setJobsFound(null); // Reset jobsFound to null
  };

  const handleSearch = async () => {
    try {
      let params = {};

      if (sitename) {
        params.sitename = sitename.value;
      }

      if (searchText) {
        params.jobPincode = searchText;
      }

      const response = await axios.get("/api/v1/Job", {
        params: params,
      });

      const found = Array.isArray(response.data) && response.data.length > 0;

      setJobsFound(found);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobsFound(false);
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <h1 className="text-4xl font-bold mb-4">
        {t("Available Labour Jobs.4")}
      </h1>
      <div className="search-container">
        <div className="select-wrapper">
          <label>{t("JobType.4")}</label>
          <Select
            options={sitenameOptions}
            value={sitename}
            onChange={setSitename}
            isMulti
            isSearchable
            noOptionsMessage={() => "No Job found"}
            styles={{
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                color: "gray",
              }),
              clearIndicator: (baseStyles) => ({
                ...baseStyles,
                color: "red",
              }),
              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                color: "black",
              }),
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: "red",
              }),
              multiValueRemove: (baseStyles, state) => ({
                ...baseStyles,
                color: state.isFocused ? "red" : "gray",
                backgroundColor: state.isFocused ? "black" : "lightgreen",
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
        <button id="search-button5" onClick={handleSearch}>
          {t("Search.4")}
        </button>
        <button id="reset-button5" onClick={resetAllValues}>
          {t("Reset.4")}
        </button>
      </div>

      {jobsFound !== null && (
        <p>{jobsFound ? `${sitename?.label || ""} jobs found` : "No jobs found"}</p>
      )}
    </div>
  );
}
