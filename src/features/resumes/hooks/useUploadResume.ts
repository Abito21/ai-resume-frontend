import React from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import api from "../../../utils/api";
import { useQueryClient } from "@tanstack/react-query";

interface FileUploadResponse {
  message: string;
  file_name: string;
  file_id: string;
}

export const useUploadResume = () => {
  const queryClient = useQueryClient();
  const [file, setFile] = React.useState<File | null>(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadError, setUploadError] = React.useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = React.useState<FileUploadResponse | null>(null);

  const uploadFile = async (fileToUpload: File) => {
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const formData = new FormData();
      formData.append("file", fileToUpload);

      const response = await api
        .post("resumes/", {
          body: formData,
        })
        .json<FileUploadResponse>();

      setUploadSuccess(response);
      setFile(null);
      toast.success(response.message);
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
    } catch (error) {
      console.error("Upload error:", error);
      const errorMessage = error instanceof Error ? error.message : "Upload failed";
      setUploadError(errorMessage);
      toast.error(`Upload failed: ${errorMessage}`);
    } finally {
      setIsUploading(false);
    }
  };

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      uploadFile(selectedFile);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
    maxSize: 10 * 1024 * 1024,
  });

  const resetUpload = () => {
    setFile(null);
    setUploadError(null);
    setUploadSuccess(null);
  };

  return {
    file,
    isUploading,
    uploadError,
    uploadSuccess,
    getRootProps,
    getInputProps,
    isDragActive,
    resetUpload,
  };
};