import AppNav from "../AppNav/AppNav";
import CustomRoundManagerContainer from "../../containers/CustomRoundManagerContainer";
import RoundInCustomRoundContainer from "../../containers/RoundInCustomRoundContainer";

const CustomRoundView = ({ localRound, isToRender, moveRoundInState }) => {
  return (
    <section className="training__container">
      <AppNav />
      <CustomRoundManagerContainer />
      <RoundInCustomRoundContainer />
    </section>
  );
};

export default CustomRoundView;
