import React, { useEffect } from "react";
import "./LocationC.css";
import {Link} from 'react-router-dom';
import { useFormik } from "formik";
import Select from "react-select";
import csc from "country-state-city";


export default function LocationC() {
  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null
    },
    onSubmit: (values) => console.log(JSON.stringify(values))
  });


  const countries = csc.getAllCountries();


  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country
  }));
  const updatedStates = (countryId) =>
    csc
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }));
  const updatedCities = (stateId) =>
    csc
      .getCitiesOfState(stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }));


  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;


  useEffect(() => {}, [values]);


  return (
    <div className="LocationC">
      <form onSubmit={handleSubmit}>
      <Link to="/page2">Back</Link> {/* Back button */}
      <div className="dropdown">
          <p >Select your country</p>
        <Select
          id="country"
          name="country"
          label="country"
          options={updatedCountries}
          value={values.country}
          // onChange={value => {
          //   setFieldValue("country", value);
          //   setFieldValue("state", null);
          //   setFieldValue("city", null);
          // }}
          onChange={(value) => {
            setValues({ country: value, state: null, city: null }, false);
          }}
        />
         </div>
        <div className="dropdown">
          <p >Select your Province/Region/State</p>
        <Select
          id="state"
          name="state"
          options={updatedStates(values.country ? values.country.value : null)}
          value={values.state}
          onChange={(value) => {
            setValues({ state: value, city: null }, false);
          }}
        />
         </div>
        <div className="dropdown">
          <p >Select your city</p>
        <Select
          id="city"
          name="city"
          options={updatedCities(values.state ? values.state.value : null)}
          value={values.city}
          onChange={(value) => setFieldValue("city", value)}
        />
        </div>
        <Link to="/customer-info" className="custom-link"> <button type="submit"className="next-button">Next</button></Link>
     
        <p>{JSON.stringify(csc.get)}</p>
        
      </form>
    </div>
  );
}


