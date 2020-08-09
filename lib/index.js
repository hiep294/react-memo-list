"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const defaultKeyExtractor = (item, index) => `${index}`;
function MemoList({ data, renderItem, keyExtractor = defaultKeyExtractor, }) {
    const RenderItem = renderItem;
    return (React.createElement(React.Fragment, null, data.map((item, index) => (React.createElement(WrapperMemoItem, { item: item, key: keyExtractor(item, index).toString() },
        React.createElement(RenderItem, { item: item, index: index }))))));
}
const WrapperMemoItem = ({ children, item }) => {
    return react_1.useMemo(() => React.createElement(React.Fragment, null, children), [item]);
};
exports.default = MemoList;
//# sourceMappingURL=index.js.map