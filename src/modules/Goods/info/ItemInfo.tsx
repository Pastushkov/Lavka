import { Form, Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomInput from "components/inputs";
import { CustomTextArea } from "components/inputs/textArea/TextArea";
import LoaderWrapper from "hoc/LoaderWrapper";
import { RootState } from "redux/reducers/rootReducer";
import { Button } from "style/general";
import { resize } from "utils/ImageResize";
import { fetchItemByIdAction, fetchUpdateTranslationAction } from "../store/actions";
import { ImageContainer, ImageWrap, InformationBlock, MainImage, Wrapper } from "./style";

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
        <div
          style={{
            display: "flex"
          }}
        >
          <div>
            <Formik
              enableReinitialize
              onSubmit={(values) => {
                if (selectedItem)
                  dispatch(
                    fetchUpdateTranslationAction({
                      product_id: selectedItem.id.toString(),
                      lang: "uk",
                      name: values.nameUA,
                      keywords: selectedItem.keywords ?? "",
                      description: values.descriptionUA
                    })
                  );
              }}
              initialValues={{
                nameUA: selectedItem?.nameMultilang.uk ?? "",
                descriptionUA: selectedItem?.descriptionMultilang.uk ?? "",
                price: selectedItem?.price ?? "",
                keywords: selectedItem?.keywords ?? ""
              }}
            >
              {({ values, handleChange, dirty }) => {
                return (
                  <Form>
                    <InformationBlock>
                      <div>
                        {" "}
                        <CustomInput
                          onChange={handleChange}
                          value={values.nameUA}
                          name="nameUA"
                          placeholder="name UA"
                        />
                      </div>

                      <div>
                        <CustomTextArea
                          onChange={handleChange}
                          value={values.descriptionUA}
                          placeholder="description UA"
                          name="descriptionUA"
                        />
                      </div>

                      <Button type="submit" disabled={!dirty}>
                        Save
                      </Button>
                    </InformationBlock>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div>
            <Formik
              enableReinitialize
              onSubmit={(values) => {
                if (selectedItem)
                  dispatch(
                    fetchUpdateTranslationAction({
                      product_id: selectedItem.id.toString(),
                      lang: "ru",
                      name: values.name,
                      keywords: selectedItem.keywords ?? "",
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

                      <Button type="submit" disabled={!dirty}>
                        Save
                      </Button>
                    </InformationBlock>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Wrapper>
    </LoaderWrapper>
  );
};

export default ItemInfo;
