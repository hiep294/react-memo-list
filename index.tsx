import * as React from 'react';
import { useMemo } from 'react';

const defaultKeyExtractor = (item: any, index: number) => `${index}`;

function MemoList<ItemT>({
  data,
  renderItem,
  keyExtractor = defaultKeyExtractor,
}: MemoListProps<ItemT>) {
  const RenderItem = renderItem;
  return (
    <>
      {data.map((item, index) => (
        <WrapperMemoItem item={item} key={keyExtractor(item, index).toString()}>
          <RenderItem item={item} index={index} />
        </WrapperMemoItem>
      ))}
    </>
  );
}

const WrapperMemoItem = ({ children, item }: IWrapperMemoItem) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => <>{children}</>, [item]);
};

interface MemoListProps<ItemT> {
  data: ReadonlyArray<ItemT>;
  renderItem: TRenderItem<ItemT>;
  keyExtractor?: TKeyExtractor<ItemT>;
}

type TKeyExtractor<ItemT> = (item: ItemT, index: number) => string | number;

type TRenderItem<ItemT> = ({
  item,
  index,
}: IRenderItemProps<ItemT>) => JSX.Element | null;

interface IRenderItemProps<ItemT> {
  item: ItemT;
  index: number;
}

// IMemoItem
interface IWrapperMemoItem {
  children: any;
  item: any;
}

export default MemoList;
