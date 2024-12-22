import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
import logo from "../assets/logo.jpg";


const AssetHandoverForm = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const downloadForm = () => {
    alert("hiii")
    const element = document.querySelector("#printable-content");
    html2pdf(element)
      .from(element)
      .set({
        margin: 0,
        filename: "asset-handover-form.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "portrait" },
      })
      .save();
  };

  const printForm = () => {
    window.print();
  };

  return (
    <div>
      {/* Printable Content */}
      <div
        id="printable-content"
        className="max-w-4xl border mt-2 mx-auto p-6 bg-white"
      >
        {/* Header */}
        <div className="border-2 border-gray-300  p-4 mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-lg">Arab Supply & Trading Co.</h2>
            <p className="text-sm">Construction Branch</p>
          </div>
          <div>
            <img src={logo} alt="" className="h-10 w-12" />
          </div>
          <div className="text-right">
            <p className="text-lg">الشركة العربية للتموين والتجارة</p>
            <p className="text-sm">فرع الانشاءات</p>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          ASSET HANDOVER FORM
        </h1>

        {/* Employee Info Grid */}
        <div className="grid grid-cols-2 sm:gap-10 lg:gap-96 mb-6">
          <div>
            <p>
              <span className="font-semibold">Name of Employee:</span>{" "}
              {data?.employeeName}
            </p>
            <p>
              <span className="font-semibold">Employee Code No:</span>{" "}
              {data?.employeeCode}
            </p>
            <p>
              <span className="font-semibold">Department:</span>{" "}
              {data?.department}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Asset Transfer No:</span>{" "}
              {data?.assetTransferNo}
            </p>
            <p>
              <span className="font-semibold">Handover Date:</span> {data?.date}
            </p>
            <p>
              <span className="font-semibold">Handover By:</span> SHOAIB HAIDER
            </p>
          </div>
        </div>

        {/* Instructions */}
        <p className="mb-6 text-gray-600">
          Dear Sir / Madam,
          <br />
          Please find the below the assets handed over to you, to support you in
          carrying out your assignment/work in a most Proficient manner. Please
          sign also the attached picture.
        </p>

        {/* Assets Table */}
        <table className="w-full mb-6 border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Sr.No.</th>
              <th className="border border-gray-300 p-2 text-left">
                Particulars
              </th>
              <th className="border border-gray-300 p-2 text-left">
                Asset Code
              </th>
              <th className="border border-gray-300 p-2 text-left">Qty.</th>
              <th className="border border-gray-300 p-2 text-left">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {data?.particulars.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">
                  {item?.particulars}
                </td>
                <td className="border border-gray-300 p-2">
                  {item?.assetCode}
                </td>
                <td className="border border-gray-300 p-2">{item?.qty}</td>
                <td className="border border-gray-300 p-2">{item?.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Signatures */}
        <div className="flex justify-between mb-6 border-b border-gray-300">
          <div className="w-1/3">
            <p className="font-semibold mb-2">Authorized Signatory</p>
            <p className="text-sm">(Person Requesting)</p>
            <p className="text-xs">(Person responsible for hand-over)</p>
            <div className="h-6  mt-2"></div>
          </div>
          <div className="w-1/3 text-right">
            <p className="font-semibold mb-2">Authorized Signatory</p>
            <p className="text-sm">(Approver)</p>
            <div className="h-6  mt-2"></div>
          </div>
        </div>

        {/* Declaration */}
        <div className="mb-6">
          <h2 className="font-bold mb-2">
            ACKNOWLEDGEMENT AND DECLARATION BY EMPLOYEE:
          </h2>
          <p className="text-sm">
            I, Ms./Mr.{" "}
            <span className="font-semibold">{data?.employeeName}</span> hereby
            acknowledge that I have Received the above mentioned assets. I
            understand that this asset belong to company name and is under my
            possession for carrying out my work. I hereby assure that I will
            take care of the assets of the company to the best possible extend
            and will handover/Transfer or Return back to the company before my
            vacation or end of contract clearance (termination/Resignation).
          </p>
        </div>

        {/* Employee Signature */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Employee Signature:</p>
          <div className="h-16 border-b border-gray-300">
            {data?.employeeName}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>ISSUE 01</span>
          <span>REV 01</span>
          <span>F-12-08</span>
          <span>{data?.date}</span>
        </div>
      </div>

      {/* Print Button */}
      <div className="text-center my-6 flex justify-center gap-5">
        <button
          onClick={downloadForm}
          className="px-4 pdf-button py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Download
        </button>
        <button
          onClick={printForm}
          className="px-4 py-2 pdf-button bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default AssetHandoverForm;
