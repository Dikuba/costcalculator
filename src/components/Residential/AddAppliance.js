import React, { useState } from "react";
import appliancesData from "./appliances.json";

const AddAppliance = ({ onAddAppliance }) => {
  const [selectedAppliance, setSelectedAppliance] = useState("");
  const [newApplianceName, setNewApplianceName] = useState("");
  const [powerRating, setPowerRating] = useState(0);
  const [usage, setUsage] = useState(0);

  const handleApplianceChange = (e) => {
    const selected = e.target.value;
    setSelectedAppliance(selected);
    if (selected === "Others") {
      setPowerRating(0); // Set powerRating to 0 when Others is selected
      setUsage(0); // Set usage to 0 when Others is selected
    } else {
      const selectedApplianceData = appliancesData.find(
        (appliance) => appliance.name === selected
      );
      if (selectedApplianceData) {
        setPowerRating(selectedApplianceData.powerRating);
        setUsage(selectedApplianceData.usage);
      } else {
        setPowerRating(0);
        setUsage(0);
      }
    }
  };

  const handleNewApplianceNameChange = (e) => {
    setNewApplianceName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const applianceToAdd =
      selectedAppliance === "Others" ? newApplianceName : selectedAppliance;
    if (!applianceToAdd || !powerRating || !usage) {
      alert("Appliance name, power rating, and usage are required");
      return;
    }
    onAddAppliance({
      name: applianceToAdd,
      powerRating: parseFloat(powerRating),
      usage: parseInt(usage),
    });
    setSelectedAppliance("");
    setNewApplianceName("");
    setPowerRating(0);
    setUsage(0);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="block">
        <span className="text-gray-700">Appliance:</span>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={selectedAppliance}
          onChange={handleApplianceChange}
        >
          <option value="">Select Appliance</option>
          {appliancesData.map((appliance) => (
            <option key={appliance.name} value={appliance.name}>
              {appliance.name}
            </option>
          ))}
          <option value="Others">Others</option>
        </select>
        {selectedAppliance === "Others" && (
          <>
            <input
              className="mt-2 block w-full md:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              value={newApplianceName}
              onChange={handleNewApplianceNameChange}
              placeholder="Enter new appliance name"
            />
          </>
        )}
        {selectedAppliance !== "" && (
          <>
            <label className="block mt-4">
              <span className="text-gray-700">Power Rating (in Kilo Watts):</span>
              <input
                className="mt-1 block w-full md:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="number"
                step="0.01"
                value={powerRating}
                onChange={(e) => setPowerRating(parseFloat(e.target.value))}
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Usage (in hours):</span>
              <input
                className="mt-1 block w-full md:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="number"
                step="1"
                value={usage}
                onChange={(e) => setUsage(parseInt(e.target.value))}
              />
            </label>
          </>
        )}
      </label>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" type="submit">
        Add Appliance
      </button>
    </form>
  );
};

export default AddAppliance;
