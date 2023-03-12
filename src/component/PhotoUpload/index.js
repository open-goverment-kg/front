import { useDropzone } from "react-dropzone";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useCallback } from "react";

const PhotoUploader = ({ getImages }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        getImages(reader.result);
      };
      reader.readAsDataURL(file);
      // Set the first accepted file as the selected file
    },
    [getImages]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: false,
    onDrop,
  });

  return (
    <Card
      sx={{
        background: "#444",
        color: "#ccc",
        width: "360px",
      }}
      {...getRootProps()}
    >
      <CardHeader
        title={
          <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
            загрузить изображение
          </Typography>
        }
      />
      <CardContent>
        <input {...getInputProps()} />
      </CardContent>
    </Card>
  );
};

export default PhotoUploader;
