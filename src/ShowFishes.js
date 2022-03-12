import { cloneDeep } from "lodash";

function sortFishByField(tank = [], field = "") {
  const sortedFish = cloneDeep(tank);
  if (sortedFish.length > 0 && field.length > 0) {
  }
  return sortedFish;
}

export default function ShowFish(props) {
  const { tank = [] } = props;
  const sortedFish = sortFishByField(tank, "Number");
  return (
    <div>
      <h1 style={{ borderBottom: "4px dotted #004aad" }}>
        Create Your Own Fish
      </h1>
      <h3 style={{ fontWeight: "bold" }}>The ~Catalogue~</h3>
      <p>
        👇 Click on the respective portrait and learn more about your new
        friend! 👇
      </p>
      {sortedFish.map((tanks, index) => (
        <ShowFishes key={index} tanks={tanks} />
      ))}
    </div>
  );
}

function ShowFishes(props) {
  const { species = "", Number = 0, image = "", link = "" } = props.tanks;
  if (species.length > 0) {
    return (
      <div>
        <div style={{ textAlign: "" }}>
          <a href={link}>
            <img src={`images/${image}`} alt={species} width="150" />
          </a>
          <br /> #0{Number} -{" "}
          <span style={{ fontWeight: "bold" }}>{species}</span> <br />
          <br />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
