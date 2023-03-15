import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../components/table/Table";
import { RootState } from "../../redux/reducers/rootReducer";
import { Wrapper } from "../../style/general";
import { header } from "./Shop.config";
import { fetchShopListAction } from "./store/actions";

const Shop: FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { list, isLoading } = useSelector(({ shop }: RootState) => ({
    list: shop.list,
    isLoading: shop.isLoadingList,
  }));

  useEffect(() => {
    if (page === 1) {
      dispatch(
        fetchShopListAction({
          last_id: null,
        })
      );
    } else {
      dispatch(
        fetchShopListAction({
          last_id: list ? list[list?.length - 1].id : null,
        })
      );
    }
  }, [page]);

  useEffect(() => {
    if (list) console.log(list);
  }, [list]);

  const products = useMemo(
    () =>
      list?.map(({ name, group, price, main_image, id }) => ({
        image: (
          <div>
            <img src={main_image} alt="" />
          </div>
        ),
        name,
        group: group.name,
        price,
        id,
        smallTitle: name,
      })) ?? [],
    [list]
  );

  const pagination = (
    <div>
      {page > 1 && (
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          prev
        </button>
      )}
      {page}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next
      </button>
    </div>
  );

  return (
    <Wrapper>
      {pagination}
      <CustomTable
        body={products}
        header={header}
        loading={isLoading}
        keyTemplate={"1"}
        onRowClick={(id) => {
          navigate(`/item/${id}`);
        }}
      />
      {pagination}
    </Wrapper>
  );
};

export default Shop;
