import CMForm from "./CMForm";
import CMOptionsContainer from "../../containers/CMOptionsContainer";

import "./custommanager.scss";

const CustomManager = ({
  item,
  itemName,
  itemList,
  getItems,
  setItem,
  setItemName,
  createItem,
  deleteItem,
}) => {
  return (
    <div className="trainingmanager__container">
      <CMForm
        item={item}
        itemName={itemName}
        itemList={itemList}
        getItems={getItems}
        setItem={setItem}
        setItemName={setItemName}
        createItem={createItem}
        deleteItem={deleteItem}
      />
      <CMOptionsContainer />
    </div>
  );
};
export default CustomManager;
