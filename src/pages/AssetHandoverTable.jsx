import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const AssetHandoverTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, "asset-datas")
        );
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 text-center uppercase">
        Asset Handover List
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-center">
              <th className="p-4 border-b border-gray-300 ">#</th>
              <th className="p-4 border-b border-gray-300 ">
                Name of Employee
              </th>
              <th className="p-4 border-b border-gray-300 ">
                Asset Transfer Number
              </th>
              <th className="p-4 border-b border-gray-300 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors odd:bg-white text-center even:bg-gray-50"
              >
                <td className="p-4 border-b border-gray-200 ">{index + 1}</td>
                <td className="p-4 border-b border-gray-200">
                  {item.employeeName}
                </td>
                <td className="p-4 border-b border-gray-200">
                  {item.assetTransferNo}
                </td>
                <td className="p-4 border-b border-gray-200 ">
                  <button
                    className="px-3 py-2 transition-all hover:scale-105 duration-300 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => {
                      navigate("/form", { state: { data: item } });
                    }}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default AssetHandoverTable;
