import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../../redux/reducers/rootReducer";
import { fetchItemByIdAction } from "../store/actions";

const ItemInfo: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { selectedItem, isLoading } = useSelector(({ shop }: RootState) => ({
    selectedItem: shop.selectedItem,
    isLoading: shop.isLoadingList,
  }));

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    console.log(id);

    if (id) {
      dispatch(
        fetchItemByIdAction({
          id,
        })
      );
    }
  }, [location]);

  return (
    <div>
      <div>
        <img src={selectedItem?.main_image} alt="" />
      </div>

      <div>{selectedItem?.description_multilang.uk}</div>

      <div>
        {selectedItem?.price} {selectedItem?.currency}
      </div>
    </div>
  );
};

export default ItemInfo;
