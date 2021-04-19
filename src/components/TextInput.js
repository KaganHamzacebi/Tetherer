import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function TextInput({
  type,
  title,
  description,
  valueChange,
  value,
}) {
  const handleChange = (e) => {
    valueChange(e.target.value);
  };

  const errors = {
    "Template": "",
    "Title": "Title cannot be empty",
    "Description": "",
    "Channel": "Channel can't be empty",
  }

  const [date, setDate] = useState("2021-04-15");
  const [time, setTime] = useState("00:00");
  const [isValid, setIsValid] = useState(true);


  const validate = (e) => {
    switch (title) {
      case "Template":
        break;
      case "Title":
        if (e.target.value.length < 1) {
          setIsValid(false);
        } else {
          setIsValid(true);
        }
        break;
      case "Description":
        break;
      case "Channel":
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-primary mt-6">{title}</h3>
      <span className="text-sm text-primary-light">{description}</span>

      <div className="mt-4">
        <div className="mb-3 pt-0">
          <input
            onBlur={validate}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={"Enter " + title.toLowerCase()}
            className={`px-3 py-3 bg-title text-primary relative rounded text-lg border border-gray-900 outline-none focus:outline-none focus:shadow-outline w-2/5
              ${isValid ? "focus:ring-2 focus:ring-blue-600" : "ring-2 ring-red-600"}`}
          />

        </div>
        <span className={`text-xs font-bold inline-block py-1 px-2 rounded text-red-600 opacity-0 bg-red-300 last:mr-0 mr-1 
            ${isValid ? "transition-opacity duration-800 ease-out opacity-0" : "transition-opacity duration-1000 ease-in opacity-100"}`}>
          <FontAwesomeIcon icon={faExclamationTriangle} size="1x"></FontAwesomeIcon>
          {" " + errors[title]}
        </span>
      </div>
    </div>
  );
}
