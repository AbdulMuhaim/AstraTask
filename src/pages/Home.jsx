import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {firestore} from "../firebase";
import { addDoc,collection } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {

  const navigate = useNavigate();
  const ref = collection(firestore, "asset-datas");


  const [formData, setFormData] = useState(() => {
    const date = new Date();
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  
    return {
      employeeName: "",
      employeeCode: "",
      department: "",
      assetTransferNo: Math.floor(Math.random() * 9000) + 1000,
      date: formattedDate,
      particulars: [{ particulars: "", assetCode: "", qty: "", remarks: "" }],
    };
  });

  const handleChange = (e, index, field) => {
    if (field) {
      const updatedParticulars = [...formData.particulars];
      updatedParticulars[index][field] = e.target.value;
      setFormData({ ...formData, particulars: updatedParticulars });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const addParticular = () => {
    setFormData({
      ...formData,
      particulars: [
        ...formData.particulars,
        { particulars: "", assetCode: "", qty: "", remarks: "" },
      ],
    });
  };

  const removeParticular = (index) => {
    const updatedParticulars = formData.particulars.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, particulars: updatedParticulars });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {      
        addDoc(ref, formData);
        navigate("/form", { state: { data: formData } });
        toast("Form successfully submitted!");
    } catch (error) {
      console.error("Error uploading or saving the form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <ToastContainer />
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-2xl"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mt-2">Asset Handover Form</h2>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Name of Employee:</label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Employee Code:</label>
          <input
            type="text"
            name="employeeCode"
            value={formData.employeeCode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {formData.particulars.map((item, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Particulars:</label>
                <input
                  type="text"
                  value={item.particulars}
                  onChange={(e) => handleChange(e, index, "particulars")}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Asset Code:</label>
                <input
                  type="text"
                  value={item.assetCode}
                  onChange={(e) => handleChange(e, index, "assetCode")}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Quantity:</label>
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => handleChange(e, index, "qty")}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Remarks:</label>
                <input
                  type="text"
                  value={item.remarks}
                  onChange={(e) => handleChange(e, index, "remarks")}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeParticular(index)}
              className="text-red-500 text-sm hover:underline mt-2 block"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addParticular}
          className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Particular
        </button>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
