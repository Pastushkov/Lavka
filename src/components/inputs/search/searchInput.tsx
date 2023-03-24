import React, { FC } from "react";
import { Form, Formik } from "formik";
import CustomInput from "..";
import { CloseIcon, SearchIcon } from "../../../assets/images/svgs";

const initValues = {
  search: ""
};

export const SearchInput: FC<{ callback: (search: string) => void }> = ({ callback }) => (
  <Formik initialValues={initValues} onSubmit={({ search }) => callback(search)}>
    {({ handleSubmit, handleChange, setFieldValue, values }) => {
      const handleCross = () => {
        setFieldValue("search", "");
        handleSubmit();
      };
      return (
        <Form>
          <CustomInput
            name="search"
            placeholder="Search"
            suffix={{
              icon: values.search ? CloseIcon : SearchIcon,
              callback: values.search ? handleCross : handleSubmit
            }}
            value={values.search}
            onChange={handleChange}
          />
        </Form>
      );
    }}
  </Formik>
);
