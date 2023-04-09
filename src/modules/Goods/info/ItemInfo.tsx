/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Form, Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomInput from "components/inputs";
import { CustomTextArea } from "components/inputs/textArea/TextArea";
import LoaderWrapper from "hoc/LoaderWrapper";
import { RootState } from "redux/reducers/rootReducer";
import { Button, ButtonWrapper, Flex, Input } from "style/general";
import { resize } from "utils/ImageResize";
import { Label } from "components/inputs/style";
import CustomSelect from "components/select/Select";
import { fetchItemByIdAction, fetchUpdateProductAction, fetchUpdateTranslationAction } from "../store/actions";
import { FormWrapper, ImageContainer, ImageWrap, InformationBlock, MainImage, Wrapper } from "./style";
import { presenceOptions, statusOptions } from "./ItemInfo.config";

// 1771742406

const ItemInfo: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { selectedItem, isLoading } = useSelector(({ goods }: RootState) => ({
    selectedItem: goods.selectedItem,
    isLoading: goods.isLoadingSelectedItem
  }));

  const [image, setImage] = useState("");

  useEffect(() => {
    const id = location.pathname.split("/")[2];

    if (id) {
      dispatch(
        fetchItemByIdAction({
          id
        })
      );
    }
  }, [location]);

  useEffect(() => {
    if (selectedItem) {
      setImage(resize(selectedItem.mainImage, 800, 800));
    }
  }, [selectedItem]);

  return (
    <LoaderWrapper loading={isLoading}>
      <Wrapper>
        <div>
          <MainImage>
            <img src={image} alt="" />
          </MainImage>

          <ImageContainer>
            {selectedItem?.images.map(({ url, id }) => {
              return (
                <ImageWrap onClick={() => setImage(resize(url, 800, 800))}>
                  <img src={url} key={id} alt="img" />
                </ImageWrap>
              );
            })}
          </ImageContainer>
        </div>

        <FormWrapper>
          <div className="form">
            <Formik
              enableReinitialize
              onSubmit={(values) => {
                if (selectedItem) {
                  dispatch(fetchUpdateProductAction({
                    id: +(selectedItem?.id.toString()),
                    presence: values.presence,
                    in_stock: +values.quantity > 0,
                    regions: [], // selectedItem?.regions,
                    price: +values.price,
                    status: values.status,
                    discount: null,
                    name: values.name,
                    keywords: values.keywords,
                    description: values.description,
                    quantity_in_stock: +values.quantity
                  }))                 
                }
                // dispatch(
                //   fetchUpdateTranslationAction({
                //     product_id: selectedItem.id.toString(),
                //     lang: "uk",
                //     name: values.name,
                //     keywords: values.keywords,
                //     description: values.description
                //   })
                // );
              }}
              initialValues={{
                name: selectedItem?.nameMultilang.uk ?? "",
                description: selectedItem?.descriptionMultilang.uk ?? "",
                price: selectedItem?.price ?? "",
                keywords: selectedItem?.keywords ?? "",
                quantity: selectedItem?.quantity_in_stock ?? "",
                status: selectedItem?.status ?? "",
                presence: selectedItem?.presence ?? ""
              }}
            >
              {({ values, handleChange, dirty, setFieldValue }) => {
                return (
                  <Form>
                    <InformationBlock width={500}>
                      <div>
                        <CustomInput onChange={handleChange} value={values.name} name="name" placeholder="name" />
                      </div>

                      <div>
                        <CustomTextArea
                          onChange={handleChange}
                          value={values.description}
                          placeholder="description"
                          name="description"
                        />
                      </div>

                      <div>
                        <CustomInput
                          onChange={handleChange}
                          value={values.keywords}
                          name="keywords"
                          placeholder="keywords"
                        />
                      </div>

                      <Flex gap={40}>
                        <CustomInput onChange={handleChange} value={values.price} name="price" placeholder="price" />
                        <div> {selectedItem?.currency}</div>
                      </Flex>
                      <CustomInput
                        onChange={handleChange}
                        value={values.quantity}
                        name="quantity"
                        placeholder="quantity in stock"
                      />
                      <CustomSelect
                        label="Status"
                        name="status"
                        setFieldValue={setFieldValue}
                        value={values.status}
                        options={statusOptions}
                      />

                      <CustomSelect
                        label="Presence"
                        name="presence"
                        setFieldValue={setFieldValue}
                        value={values.presence}
                        options={presenceOptions}
                      />

                      <ButtonWrapper>
                        <Button type="submit" disabled={!dirty}>
                          Save
                        </Button>
                      </ButtonWrapper>
                    </InformationBlock>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </FormWrapper>
      </Wrapper>
    </LoaderWrapper>
  );
};

export default ItemInfo;

/*
 <div className="form">
            <Formik
              enableReinitialize
              onSubmit={(values) => {
                if (selectedItem)
                  dispatch(
                    fetchUpdateTranslationAction({
                      product_id: selectedItem.id.toString(),
                      lang: "ru",
                      name: values.name,
                      keywords: values.keywords,
                      description: values.description
                    })
                  );
              }}
              initialValues={{
                name: selectedItem?.nameMultilang.ru ?? "",
                description: selectedItem?.descriptionMultilang.ru ?? "",
                price: selectedItem?.price ?? "",
                keywords: selectedItem?.keywords ?? ""
              }}
            >
              {({ values, handleChange, dirty }) => {
                return (
                  <Form>
                    <InformationBlock>
                      <div>
                        <CustomInput onChange={handleChange} value={values.name} name="name" placeholder="name RU" />
                      </div>

                      <div>
                        <CustomTextArea
                          onChange={handleChange}
                          value={values.description}
                          placeholder="description RU"
                          name="description"
                        />
                      </div>

                      <div>
                        <CustomInput
                          onChange={handleChange}
                          value={values.keywords}
                          name="keywords"
                          placeholder="keywords"
                        />
                      </div>
                      <ButtonWrapper>
                        <Button type="submit" disabled={!dirty}>
                          Save
                        </Button>
                      </ButtonWrapper>
                    </InformationBlock>
                  </Form>
                );
              }}
            </Formik>
          </div>
*/
