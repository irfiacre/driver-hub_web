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
import Image from "next/image";

interface CreateCourseMaterialState {
  fileMetadata: any;
}
const UpdateThumbnail = ({
  handleUpdateThumbnail,
  thumbnail,
}: {
  handleUpdateThumbnail: (data: any) => void;
  thumbnail: any;
}) => {
  const [state, setState] = useState<CreateCourseMaterialState>({
    fileMetadata: null,
  });

  const [file, setFile] = useState<any>(null);
  const [progress, setProgress] = useState<boolean>(false);

  const handleImageChange = (e: any) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleGotDownloadUrl = (metaData: any) => {
    setState((prevState: any) => ({
      ...prevState,
      fileMetadata: metaData,
    }));
    handleUpdateThumbnail(metaData);
  };

  const handleUploadFile = async () => {
    if (!file) {
      return;
    }
    setProgress(true);
    const FILE_NAME = `${generateId(file.name)}`;

    await uploadFile(
      file,
      "image",
      handleGotDownloadUrl,
      FILE_NAME.toLowerCase()
    );
    setProgress(false);
  };

  return (
    <div>
      <div
        className="w-full md:px-3.5 max-md:pt-10 bg-primary/10 rounded-lg"
        style={{
          backgroundImage: `url(${thumbnail?.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "15vh",
        }}
      ></div>
      <div className="text-center">
        {file && !state.fileMetadata ? (
          <div className="inline-block py-1.5">
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
        ) : (
          <div className="inline-block py-1.5">
            <label
              htmlFor="file-upload"
              className="w-fit items-center cursor-pointer m-1.5 flex gap-2 text-textLightColor bg-white hover:bg-primary hover:text-white hover:border-primary focus:outline-none rounded-full text-sm text-center p-2 border border-borderColorLight"
            >
              {progress ? (
                <Icon icon="line-md:loading-loop" fontSize={20} />
              ) : (
                <Icon icon="line-md:cloud-upload-loop" fontSize={20} />
              )}{" "}
              {"Change Thumbnail"}
            </label>

            <input
              type="file"
              name="file"
              id="file-upload"
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
              disabled={!!state.fileMetadata}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateThumbnail;
