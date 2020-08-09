import * as React from 'react';
import { useMemo } from 'react';

interface IRenderItemProps<ItemT> {
  item: ItemT;
  index: number;
}

interface MemoListProps<ItemT> {
  data: ReadonlyArray<ItemT>;
  renderItem: ({ item, index }: IRenderItemProps<ItemT>) => JSX.Element | null;
  keyExtractor?: (item: ItemT, index: number) => string | number;
}

const defaultKeyExtractor = (item: any, index: any) => index;

function MemoList<ItemT>({
  data,
  renderItem,
  keyExtractor = defaultKeyExtractor,
}: MemoListProps<ItemT>) {
  const RenderItem = renderItem;
  return (
    <>
      {data.map((item, index) => (
        <MemoItem item={item} key={keyExtractor(item, index)}>
          <RenderItem item={item} index={index} />
        </MemoItem>
      ))}
    </>
  );
}

const MemoItem = ({ children, item }: any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => <>{children}</>, [item]);
};

export default MemoList;
