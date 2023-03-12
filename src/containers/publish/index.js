import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Container,
  FormControl,
  FormLabel,
  Grid,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import PhotoUploader from "../../component/PhotoUpload";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ActionSlice } from "../../redux/slice";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required(),
  tags: yup.array().of(yup.string()),
  content: yup.string().required(),
  likes: yup.number().integer().min(0),
  rating: yup.number().min(0).max(5),
  images: yup.array().min(2).of(yup.string()), // add images field here
});

const menuItem = [
  { id: 1, title: "Выберите cоциальное положение" },
  { id: 2, title: "Пенсионер" },
  { id: 3, title: "Пенсионер силовых структур" },
  { id: 4, title: "Рабочий" },
  { id: 5, title: "Беженец" },
  { id: 6, title: "Служащий" },
  { id: 7, title: "Учащийся, студент" },
  { id: 63, title: "Имам, священник" },
  { id: 64, title: "Военнослужащий" },
  { id: 46, title: "Фермер" },
  { id: 63, title: "Безработный" },
  { id: 643, title: "Предприниматель" },
  { id: 6233, title: "Домохозяйка" },
  { id: 686, title: "Творческая и научная интеллигенция" },
  { id: 9776, title: "Общественно-политический деятель" },
  { id: 9776, title: "Госслужащий" },
  { id: 977346, title: "Мигрант" },
  { id: 977343446, title: "Другое" },
];

const menuItem2 = [
  {
    id: 1,
    title:
      "'Инновационный центр' при Государственном агентстве интеллектуальной собственности и инноваций при Кабинете Министров Кыргызской Республики",
  },
  { id: 2, title: "Центр по стандартизации и метрологии при МЭиК КР " },
  { id: 3, title: "Социальный фонд Кыргызской Республики" },
  { id: 4, title: "Министерство экономики и коммерции Кыргызской Республики " },
  { id: 5, title: "Министерство обороны Кыргызской Республики" },
  {
    id: 5,
    title: "Центр подготовки и переподготовки специалистов гражданской защиты",
  },
  {
    id: 6,
    title:
      "Государственное агентство интеллектуальной собственности и инноваций при Кабинете Министров Кыргызской Республики",
  },
];

const Publish = () => {
  const [value, setValue] = useState("");
  const [socialPosition, setSocialPosition] = useState("");
  const [recipient, setRecipient] = useState("");

  const postData = async (data) => {
    try {
      await axios.post("http://localhost:3001/cards", data);
      getData();
    } catch (erro) {
      console.log(erro);
    }
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getData = async (data) => {
    try {
      const response = await axios.get("http://localhost:3001/cards");
      dispatch(ActionSlice.getData(response.data));
    } catch (erro) {
      console.log(erro);
    }
  };

  const onSubmit = (values, action) => {
    postData(values);
    navigate("/");
    action.resetForm();
  };

  const { handleSubmit, handleChange, values, setFieldValue, setValues } =
    useFormik({
      initialValues: {
        title: "",
        tags: [],
        content: "",
        likes: 0,
        rating: 0,
        images: [],
        isLike: false,
      },
      onSubmit,
      validationSchema: schema,
    });

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && value.trim() !== "") {
      if (!values.tags.includes(value.trim())) {
        setFieldValue("tags", [...values.tags, value.trim()]);
        setValue("");
      }
    }
  };

  const handleDelete = (chipToDelete) => {
    setValues((prevState) => prevState.tags((tag) => tag !== chipToDelete));
  };

  const getImages = (image) => {
    setFieldValue("images", [...values.images, image]);
  };

  return (
    <StyledPublish>
      <Container>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xl={4} lg={4}>
              <FormControl>
                <FormLabel className="formLabel" htmlFor="title" required>
                  Заголовок публикации
                </FormLabel>
                <InputBase
                  name="title"
                  placeholder="Заголовок публикации"
                  className="inputBase"
                  value={values.title}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xl={7} lg={7}>
              <FormControl>
                <FormLabel className="formLabel" htmlFor="content" required>
                  Содержимое публикации
                </FormLabel>
                <InputBase
                  name="content"
                  placeholder="Содержимое публикации"
                  className="inputBase"
                  value={values.content}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                sx={{ m: 1, minWidth: 360, color: "#ccc" }}
                size="small"
              >
                <FormLabel className="formLabel" id="demo-select-small">
                  Социальное положение
                </FormLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  className="inputBase"
                  value={socialPosition}
                  name="socialPosition"
                  onChange={(e) => setSocialPosition(e.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {menuItem.map((item) => (
                    <MenuItem value={item.title} key={item.id}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                sx={{ m: 1, minWidth: 360, color: "#ccc" }}
                size="small"
              >
                <FormLabel className="formLabel" id="demo-select-small">
                  Добавить получателя
                </FormLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  className="inputBase"
                  value={recipient}
                  name="recipient"
                  onChange={(e) => setRecipient(e.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {menuItem2.map((item) => (
                    <MenuItem value={item.title} key={item.id}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xl={12} lg={12}>
              <FormControl>
                <FormLabel className="formLabel" htmlFor="tags">
                  Теги
                </FormLabel>
                <Box className="chips">
                  {values.tags.map((chip) => (
                    <Chip
                      key={chip}
                      label={chip}
                      onDelete={() => handleDelete(chip)}
                      className="purpleChip"
                    />
                  ))}
                </Box>
                <InputBase
                  name="tags"
                  placeholder="Type and press enter"
                  className="inputBase"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </FormControl>
            </Grid>
            <Grid item xl={12} lg={12}>
              <FormControl>
                <FormLabel className="formLabel">Изображение</FormLabel>
                <PhotoUploader getImages={getImages} />
              </FormControl>
            </Grid>
            {values.images.map((image, i) => (
              <Grid item xl={2.5} lg={2.5} display="flex" key={i}>
                <Card>
                  <CardMedia
                    image={image}
                    component="img"
                    height="140"
                    alt="Image"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid item xl={6} lg={6} style={{ paddingTop: "20px" }}>
            <Button type="submit" style={{ color: "white", width: "360px" }}>
              Опубликовать
            </Button>
          </Grid>
        </Box>
      </Container>
    </StyledPublish>
  );
};

export default Publish;
const StyledPublish = styled(Box)(() => ({
  padding: "120px 0",
  height: "100vh",
  overflow: "auto",
  "& .inputBase": {
    width: "360px",
    backgroundColor: "#444",
    color: "#fff",
    borderRadius: "4px",
    padding: "8px 12px",
  },

  "& .inputBase::placeholder": {
    color: "#ccc",
  },

  "& .inputBase:focus": {
    outline: "none",
    backgroundColor: "#555",
  },
  "& .formLabel": {
    color: "#ccc",
    padding: "3px 0",
  },
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
  "& .purpleChip": {
    backgroundColor: "#5aff3d",
    color: "#333",
  },
  "& .chips": {
    padding: "8px 0",
    width: "80vw",
    overflow: "auto",
    display: "flex",
    gap: 8,
  },
  "& .MuiFormControl-root": {
    margin: 0,
  },
}));
