import * as Yup from "yup";

export const articleSchema = Yup.object({
    coverImage: Yup.mixed().required("Please upload cover image"),
    title: Yup.string().min(3).required("Please enter your article title"),
    body: Yup.string(9).required("Please enter your article description"),
});
