import * as yup from "yup";

// const amenities = watch("amenities") || [];
export const schema = yup.object({
  Brand: yup.string().required("Brand is required"),
  Model: yup.string().required("Model is required"),
  BodyShape: yup.string().required("Select Body Shape"),
  Year: yup.string().required("Year is required"),

  // checkbox
//   terms: yup.boolean().oneOf([true], "Accept terms is required"),

  // multiple checkboxes (array case)
  amenities: yup.array().min(1, "Select at least one"),
});