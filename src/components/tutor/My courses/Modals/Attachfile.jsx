import  { useState } from "react";

function FileUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg w-96">
      <div className="text-lg font-semibold mb-4">Attach File</div>
      <div className="w-full border-2 border-dashed border-gray-300 rounded-lg h-32 flex flex-col items-center justify-center mb-4 bg-gray-50">
        {fileName ? (
          <p className="text-gray-600">{fileName}</p>
        ) : (
          <p className="text-gray-400">
            Drag and drop a file or{" "}
            <label
              htmlFor="fileInput"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              browse file
            </label>
          </p>
        )}
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <button className="bg-blue text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
        Attach File
      </button>
    </div>
  );
}

export default FileUpload;
