import { useUploadResume } from "../hooks/useUploadResume";

export const ResumeForm = () => {
  const { isUploading, getRootProps, getInputProps, isDragActive } = useUploadResume();

  return (
    <section className="bg-gray-100 p-6 rounded-lg h-64">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md h-full flex flex-col items-center justify-center cursor-pointer transition-colors ${
          isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"
        } ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <input {...getInputProps()} />

        {isUploading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Uploading...</p>
          </div>
        ) : isDragActive ? (
          <div className="text-center">
            <p className="text-blue-600 font-medium">Drop the PDF file here</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-2">Drop PDF files here or click to browse</p>
            <p className="text-sm text-gray-400">Maximum file size: 10MB</p>
          </div>
        )}
      </div>
    </section>
  );
};