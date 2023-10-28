import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { reverseString } from "./utils/reverseString";
import { countOcurrencies } from "./utils/countOcurrencies";

function App() {

  const [formData, setFormData] = useState({ stringInput: "", countInput: 0 });
  const [formInputNumber, setFormInputNumber] = useState([{ id: 1, num: "" }]);
  const [resultCount, setResultCount] = useState();
  const [resultString, setResultString] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,  [name]: value });
  };

  const addFormField = () => {
    const lastId = formInputNumber[formInputNumber.length - 1]?.id || 0;
    setFormInputNumber([...formInputNumber, { id: lastId + 1, num: "" }]);
  };

  const handleFieldChange = (id, value) => {
    setFormInputNumber((prevFormFields) => {
      return prevFormFields.map((field) =>
        field.id === id ? { ...field, num: value } : field
      );
    });
  };

  const removeFormField = (id) => {
    const updatedFormFields = formInputNumber.filter((field) => field.id !== id);
    setFormInputNumber(updatedFormFields);
  };

  const sendForm = (e) => {
    e.preventDefault()
    const result = formInputNumber.map(item => parseInt(item.num));
    setResultCount(countOcurrencies(result, formData.countInput))
    setResultString(reverseString(formData.stringInput))
  }

  return (
    <main>
      <form>

        <div className="flex-wrapper-column align-items-start">
          <Input
            label="Enter string to reverse"
            name="stringInput"
            value={formData.stringInput}
            type="text"
            placeholder="Type string to reverse"
            onChange={onChangeInput}
          />

          <p>Reversed string: {resultString}</p>
        </div>
        

        <Input
          label="Enter number for count"
          name="countInput"
          value={formData.countInput}
          type="text"
          placeholder="Type number to count"
          onChange={onChangeInput}
        />


        {formInputNumber.map((formFields) => (
          <div className="flex-wrapper align-items-start">
            <Input
              label="Enter number"
              name="stringInput"
              value={formFields.num}
              type="text"
              placeholder="Type string number"
              onChange={(e) => handleFieldChange(formFields.id, e.target.value)}
            />
            <button type="button" onClick={() => removeFormField(formFields.id)}>delete</button>
          </div>
        ))}

        <button type="button" onClick={addFormField}>
          Add another number
        </button>

        <button type="submit" onClick={sendForm}>
          Calculate ocurrencies
        </button>

        <p>{resultCount}</p>
      </form>
    </main>
  );
}

export default App;
