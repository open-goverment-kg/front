import { useDropzone } from "react-dropzone";
import { Card, CardContent, CardHeader } from "@mui/material";

const PhotoUploader = ({ getImages }) => {
  const onDrop = (acceptedFiles) => {
    // Set the first accepted file as the selected file
    getImages(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop,
  });

  return (
    <Card
      sx={{ background: "#444", color: "#ccc", width: "360px" }}
      {...getRootProps()}
    >
      <CardHeader title="Upload a Photo" />
      <CardContent>
        <input {...getInputProps()} />
      </CardContent>
    </Card>
  );
};

export default PhotoUploader;
