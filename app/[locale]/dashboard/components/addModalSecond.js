"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Files from "react-files";
import {
  Input,
  Row,
  CardFooter,
  FormFeedback,
  Button,
  Spinner,
  Col,
  Card,
  CardBody,
  CardImg,
  Badge,
} from "reactstrap";
import { useDropzone } from "react-dropzone";

const FileInputDropzone = ({ index, files, onDrop, removeFile }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, index),
    accept: {
      "image/jpeg": [".jpeg", ".png", "jpg"],
    },
    maxFiles: 1,
    multiple: false,
    noClick: files.length > 0, // Prevent the dropzone from opening the file dialog on click if there's already a file
    noKeyboard: true, // Optional: prevent opening the file dialog with keyboard interaction
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {files.length === 0 && (
        <div>
          <div
            className="p-1"
            style={{
              border: "1px solid",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          >
            <p
              style={{
                marginBottom: "3px",
              }}
            >
              Müraciəçi {index + 1} passport şəkil
            </p>
            <img
              style={{
                width: 100,
                height: 100,
              }}
              src={"https://www.freeiconspng.com/uploads/upload-icon-30.png"}
            />
          </div>
        </div>
      )}
      <aside>
        {files?.map((file, fileIndex) => (
          <div
            key={file.name}
            className="p-1"
            style={{
              border: "1px solid",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          >
            <p
              style={{
                marginBottom: "3px",
              }}
            >
              Müraciəçi {index + 1} passport şəkil
            </p>
            <div className="d-flex align-items-center  gap-2">
              <img
                src={URL.createObjectURL(file)}
                style={{
                  width: 120,
                  height: 100,
                  objectFit: "cover",
                }}
                alt={`Preview ${file.name}`}
                onLoad={() => {
                  URL.revokeObjectURL(file);
                }}
              />
              <Button
                type="button"
                color="danger"
                size=""
                style={{
                  height: "45px",
                  width: "45px",
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the dropzone from triggering
                  removeFile(index);
                }}
              >
                Sil
              </Button>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};

const AddModalSecond = ({
  setShouldOpenTab,
  setActiveTab,
  globalSetter,
  setExtractData,
  globalWatch,
}) => {
  const t = useTranslations();
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [fileInputs, setFileInputs] = useState([
    {
      files: [],
      preview: [],
    },
  ]);
  const onDrop = useCallback((acceptedFiles, index) => {
    // No need to create preview URLs here. Just store the files directly.
    setFileInputs((current) =>
      current.map((input, i) =>
        i === index ? { ...input, files: acceptedFiles } : input
      )
    );
  }, []);

  const addFileInput = () => {
    setFileInputs((current) => [...current, { files: [] }]);
  };
  const removeFile = (index) => {
    setFileInputs((current) =>
      current.map((input, i) => {
        if (i === index) {
          // Remove the file from the input
          return { ...input, files: [] };
        }
        return input;
      })
    );
  };

  const onSubmit = async (event) => {
    const token = session?.data?.user?.data?.token;
    event.preventDefault();
    if (fileInputs?.some((z) => z?.files?.length === 0)) {
      toast.error("Ən azı 1 şəkil yükləyin");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("DepartureDate", globalWatch("DepartureDate"));
    formData.append("ReturnDate", globalWatch("ReturnDate"));
    formData.append("VisaType", globalWatch("VisaType"));
    formData.append("EntryCountry", globalWatch("EntryCountry")?.value);
    formData.append(
      "DestinationCountryId",
      globalWatch("DestinationCountryId")?.value
    );
    fileInputs.forEach((input, index) => {
      if (input.files.length > 0) {
        formData.append(`Documents`, input.files[0]);
      }
    });
    try {
      // Replace 'your_api_endpoint' with your actual API endpoint
      const response = await axios.post(
        "https://ivisavmlinux.azurewebsites.net/api/v1/visa/document/extract",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const extractedData = response?.data?.data;
      setExtractData(extractedData);
      toast.success("Files uploaded successfully");
      setActiveTab("3");
    } catch (error) {
      console.error(error);
      toast.error("Error uploading files");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <Card
        style={{
          border: "2px solid red",
        }}
        className="p-3"
      >
        <div className="d-flex justify-content-center align-items-center">
          <Badge
            style={{
              fontSize: "16px",
            }}
            color="danger"
          >
            {t("passportPhotos")}
          </Badge>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <Button
            style={{
              fontSize: "16px",
            }}
            onClick={addFileInput}
            color="primary"
          >
            +
          </Button>
        </div>
        <br />

        {fileInputs.map((input, index) => (
          <FileInputDropzone
            key={index}
            index={index}
            files={input.files}
            onDrop={onDrop}
            removeFile={() => removeFile(index)} // Pass the removeFile function to the child component
          />
        ))}
      </Card>

      <br />
      <div className="mb-3 mb-3 d-flex justify-content-end">
        <Button
          disabled={loading}
          type="submit"
          className="theme-btn me-1 border-0 rounded-0 btn-style-one"
        >
          <span className="btn-title text-white">
            {loading ? (
              <Spinner
                style={{ width: "0.7rem", height: "0.7rem" }}
                type="grow"
                color="light"
              />
            ) : (
              t("next")
            )}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default AddModalSecond;
