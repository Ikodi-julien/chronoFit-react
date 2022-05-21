import CMForm from "./CMForm";
import CMOptionsContainer from "../../../containers/CMOptionsContainer";

import "./custommanager.scss";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
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
      {location.pathname === "/entrainement" && <CMOptionsContainer />}
    </div>
  );
};
export default CustomManager;
