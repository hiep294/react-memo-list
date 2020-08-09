Lib for rendering list with better-performance in react

## Installation

```
import MemoList from 'react-memo-list'
```

For example:

```
const [todos, setTodos] = React.useState([
    {
      title: ' nulla magnam. ',
      id:b idAuto++,
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
```

```
const Todo = ({ item, onDel = () => {} }) => {
  const { title } = item;
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={onDel}>Del</button>
    </div>
  );
};
```

you may know about the method to render the todos like this

```
<>
  {todos.map((item, index) => (
    <Todo
      item={item}
      key={index}
      onDel={() => {
        setTodos((td) => td.filter((i) => i.id !== item.id));
      }}
    />
  ))}
</>
```

But when click to del a todo, the component will render all Todo components again, that is not good for performance. You can use `react-memo-list` for better performance:

```
<MemoList
  data={todos}
  renderItem={({ item }) => (
    <Todo
      item={item}
      onDel={() => {
        setTodos((td) => td.filter((i) => i.id !== item.id));
      }}
    />
  )}
  keyExtractor={(item) => item.id}
/>
```

With `react-memo-list`, when a todo is deleted, the app will memo others todos, and not render them again
