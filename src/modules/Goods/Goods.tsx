import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../components/table/Table";
import { RootState } from "../../redux/reducers/rootReducer";
import { Button, Wrapper } from "../../style/general";
import { header } from "./Goods.config";
import { fetchShopListAction } from "./store/actions";

const Goods: FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { list, isLoading } = useSelector(({ goods }: RootState) => ({
    list: goods.list,
    isLoading: goods.isLoadingList
  }));

  useEffect(() => {
    if (page === 1) {
      dispatch(
        fetchShopListAction({
          lastId: null
        })
      );
    } else {
      dispatch(
        fetchShopListAction({
          lastId: list ? list[list.length - 1].id : null
        })
      );
    }
  }, [page]);

  const products = useMemo(
    () =>
      list?.map(({ name, group, price, mainImage, id }) => ({
        image: (
          <div>
            <img src={mainImage} alt="" />
          </div>
        ),
        name,
        group: group.name,
        price,
        id,
        smallTitle: name
      })) ?? [],
    [list]
  );

  const pagination = (
    <div>
      {page > 1 && (
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          prev
        </Button>
      )}
      {page}
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next
      </Button>
    </div>
  );

  return (
    <Wrapper>
      {pagination}
      <CustomTable
        body={products}
        header={header}
        loading={isLoading}
        keyTemplate="1"
        onRowClick={(id) => {
          navigate(`/item/${id}`);
        }}
      />
      {pagination}
    </Wrapper>
  );
};

export default Goods;
