import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import BaseInput from "../inputs/BaseInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "@/styles/reactquil.css";
import { Icon } from "@iconify/react";
import ProgressBar from "../ProgressBar";
import { uploadFile } from "@/services/firebase/storage";
import { generateFileName, generateId } from "@/util/helpers";

interface CreateCourseMaterialState {
  title: string;
  notes: string;
  fileMetadata: any;
  duration?: any;
}
const AddMaterial = ({
  handleSubmitMaterial,
  courseId,
  selectedMaterial,
  loading,
}: {
  handleSubmitMaterial: (data: any) => void;
  courseId: string;
  selectedMaterial: any;
  loading?: boolean;
}) => {
  const [state, setState] = useState<CreateCourseMaterialState>({
    title: "",
    notes: "",
    fileMetadata: null,
  });

  useEffect(() => {
    setState(selectedMaterial);
  }, [selectedMaterial]);

  const [file, setFile] = useState<any>(null);
  const [progress, setProgress] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setState((prevState: any) => ({
      ...prevState,
      title: e.target.value,
    }));
  };
  const handleNotesChange = (notesText: any) =>
    setState((prevState: any) => ({ ...prevState, notes: notesText }));

  const handleImageChange = (e: any) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    handleSubmitMaterial({
      ...state,
      duration: state.duration
        ? state.duration
        : Math.round((Math.random() * 10) / 2),
      completed: false,
    });
  };
  const handleGotDownloadUrl = (metaData: any) => {
    setState((prevState: any) => ({
      ...prevState,
      fileMetadata: metaData,
    }));
  };

  const handleUploadFile = async () => {
    setProgress(true);
    const formData = new FormData();
    formData.append("file", file);
    const FILE_NAME = `${courseId}-${generateFileName(file.name)}`;

    await uploadFile(
      formData,
      file.type.includes("image") ? "image" : "document",
      handleGotDownloadUrl,
      FILE_NAME.toLowerCase()
    );
    setProgress(false);
  };

  return (
    <div>
      <div className="w-full md:px-3.5 max-md:pt-10">
        <div className="flex justify-between">
          <h1 className="text-xl font-normal text-textLightColor pb-1">
            Add Material
          </h1>
          <button
            type="button"
            onClick={() =>
              setState({
                title: "",
                notes: "",
                fileMetadata: null,
              })
            }
            className="m-1.5 flex gap-2 text-textLightColor bg-white hover:bg-borderColorLight hover:text-white hover:border-borderColorLight focus:outline-none rounded-full text-sm text-center py-1 px-6 border border-borderColorLight"
            disabled={loading}
          >
            Reset
          </button>
        </div>
      </div>
      <form className="w-full">
        <div>
          <BaseInput
            label=""
            value={state.title}
            placeholder="Title"
            onInputChange={handleInputChange}
          />
          <div className="px-3.5">
            <ReactQuill
              theme="snow"
              value={state.notes}
              onChange={handleNotesChange}
              placeholder="Add Notes"
              className="block max-h-96 w-full h-fit text-md rounded-md focus:outline-none bg-backgroundColor"
            />
          </div>
          <div className="m-3.5">
            <div
              className={`py-1.5 px-2.5 ${
                state.fileMetadata ? "bg-backgroundColor" : "bg-primary/5 "
              } border border-borderColorLight rounded-md`}
            >
              <input
                type="file"
                name="file"
                onChange={handleImageChange}
                className="border-none text-textDarkColor pt-1 pb-1.5"
                accept="image/*,video/*,.pdf"
                disabled={!!state.fileMetadata}
              />
              <br />
              {/* <br /> */}
              <span
                className={`text-xs font-normal ${
                  state.fileMetadata
                    ? "text-successGreen"
                    : "text-textLightColor"
                } py-1.5`}
              >
                {state.fileMetadata
                  ? "File uploaded successfully"
                  : "! Upload (pdf/image/video) only"}
              </span>
            </div>
          </div>
          {file && !state.fileMetadata && (
            <div className="px-10 flex items-center gap-2">
              <button
                className="m-1.5 flex gap-2 text-textLightColor bg-white hover:bg-primary hover:text-white hover:border-primary focus:outline-none rounded-full text-sm text-center p-2 border border-borderColorLight"
                type="button"
                onClick={handleUploadFile}
                disabled={progress}
              >
                {progress ? (
                  <Icon icon="line-md:loading-loop" fontSize={20} />
                ) : (
                  <Icon icon="line-md:cloud-upload-loop" fontSize={20} />
                )}{" "}
                Upload
              </button>
            </div>
          )}
        </div>

        <div className="p-3.5">
          <button
            type="submit"
            onClick={handleSubmitForm}
            className="w-full h-16 text-white bg-primary hover:bg-primaryDark focus:outline-none  font-medium rounded-md text-md text-center py-3 disabled:bg-borderColorLight"
            disabled={loading}
          >
            {loading ? (
              <PulseLoader
                color={"#ffffff"}
                loading={loading}
                size={10}
                cssOverride={{ width: "100%" }}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={0.5}
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMaterial;
