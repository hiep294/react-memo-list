import React from 'react';
import MemoList from '../index';

const Demo = () => {
  let idAuto = 0;
  const [todos, setTodos] = React.useState([
    {
      title: ' nulla magnam. ',
      id: idAuto++,
    },
    {
      title: 'officia doloremque',
      id: idAuto++,
    },
    {
      title: 'repellendus',
      id: idAuto++,
    },
  ]);
  return (
    <MemoList
      data={todos}
      renderItem={({ item }) => <div>{JSON.stringify(item, null, 2)}</div>}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Demo;
