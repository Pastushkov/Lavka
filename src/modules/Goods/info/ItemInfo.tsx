import { Form, Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomInput from "../../../components/inputs";
import { CustomTextArea } from "../../../components/inputs/textArea/TextArea";
import LoaderWrapper from "../../../hoc/LoaderWrapper";
import { RootState } from "../../../redux/reducers/rootReducer";
import { Button } from "../../../style/general";
import { resize } from "../../../utils/ImageResize";
import { fetchItemByIdAction } from "../store/actions";
import { ImageContainer, ImageWrap, InformationBlock, Line, MainImage, Wrapper } from "./style";

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

        <Formik
          enableReinitialize
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={{
            nameUA: selectedItem?.nameMultilang.uk,
            nameRU: selectedItem?.nameMultilang.ru,
            descriptionUA: selectedItem?.descriptionMultilang.uk,
            descriptionRU: selectedItem?.descriptionMultilang.ru,
            price: selectedItem?.price
          }}
        >
          {({ values, handleChange, dirty }) => {
            return (
              <Form>
                <InformationBlock>
                  <Line>
                    <CustomInput onChange={handleChange} value={values.nameUA} name="nameUA" placeholder="name UA" />
                    <CustomInput onChange={handleChange} value={values.nameRU} name="nameRU" placeholder="name RU" />
                  </Line>
                  <Line>
                    <CustomTextArea
                      onChange={handleChange}
                      value={values.descriptionUA}
                      placeholder="description UA"
                      name="descriptionUA"
                    />
                    <CustomTextArea
                      onChange={handleChange}
                      value={values.descriptionRU}
                      placeholder="description RU"
                      name="descriptionRU"
                    />
                  </Line>
                  <CustomInput onChange={handleChange} value={values.price} name="price" placeholder="price" />

                  <Button type="submit" disabled={!dirty}>
                    Save
                  </Button>
                </InformationBlock>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
    </LoaderWrapper>
  );
};

export default ItemInfo;
