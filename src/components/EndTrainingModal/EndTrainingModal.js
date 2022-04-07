import RecapExoLine from "./RecapExoLine/RecapExoLine";

const EndTrainingModal = ({ timeline }) => {
  return (
    <section className="training__container">
      <h1>End training View</h1>
      {timeline.map((exo, index) => {
        if (index < 2 || index > timeline.length - 2) return null;
        return <RecapExoLine key={index} exo={exo} />;
      })}
    </section>
  );
};

export default EndTrainingModal;
