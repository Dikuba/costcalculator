// ApplianceList.js
import React from "react";

const ApplianceList = ({ appliances, onDeleteAppliance }) => {
  return (
    <ul className="space-y-2">
      {appliances.map((appliance) => (
        <li key={appliance.name} className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm">
          <span>{appliance.name} - {appliance.powerRating} KW - {appliance.usage} hours</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-lg"
            type="button"
            onClick={() => onDeleteAppliance(appliance)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ApplianceList;
