import ShowFishes from "./ShowFishes";
import { FishData } from "./data/FishData";

import React, { useState } from "react";
import Forms from "./Register";
import "./styles.css";

export default function App() {
  const [active, setActive] = useState("createpet");
  // Could use a variable for component selection
  let choice = <CreateFish />;
  if (active === "createpet") choice = <CreateFish />;
  return (
    <div className="App">
      <div>
        <button onClick={() => setActive("register")}>Log In/Register</button>
        &nbsp;
        <button onClick={() => setActive("createpet")}>Create Fish</button>
        &nbsp;
        <button onClick={() => setActive("fishage")}>Calculate Age</button>
        &nbsp;
        <button onClick={() => setActive("fishgallery")}>Catalogue</button>
        &nbsp;
        <button onClick={() => setActive("whatsnext")}>What's Next?</button>
      </div>
      <hr />

      {active === "register" && <Forms />}
      {active === "createpet" && <CreateFish />}
      {active === "fishage" && <FishAge />}
      {active === "fishgallery" && <ShowFishes tank={FishData} />}
      {active === "whatsnext" && <WhatsNext />}
    </div>
  );
}

// Sample forms child component
const CreateFish = () => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    const { petname = "", color = "", accessories = "", bg = "" } = item;
    setItems([...items, { petname, color, accessories, bg }]);
  };
  console.log(items);
  return (
    <div>
      <h1 style={{ borderBottom: "4px dotted #004aad" }}>
        Create Your Own Fish
      </h1>
      <h3 style={{ fontWeight: "bold" }}>
        Give your new friend a rad name and cool accessories!
      </h3>
      <FishForm addItem={addItem} />
    </div>
  );
};

const groups = [
  { id: "black", name: "Black", color: "black" },
  { id: "orange", name: "Orange", color: "orange" },
  { id: "blue", name: "Blue", color: "blue" }
];
const bgs = [
  { id: "green", name: "Green", color: "green" },
  { id: "purple", name: "Purple", color: "purple" },
  { id: "blue", name: "Blue", color: "blue" }
];

const FishForm = (props) => {
  const { addItem = () => {} } = props;
  const [inputs, setInputs] = useState({});
  const [errorText, setErrorText] = useState("");
  const [fishImage, setFishImage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    switch (type) {
      case "checkbox":
        setInputs((values) => ({ ...values, [name]: checked }));
        break;
      default:
        setInputs((values) => ({ ...values, [name]: value }));
        return;
    }
  };

  const handleImage = () => {
    if (
      inputs.color === "orange" &&
      inputs.accessories === true &&
      inputs.bg === "purple"
    ) {
      setFishImage(
        <img src={"images/4.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Your fish looks super amazing!");
    } else if (
      inputs.color === "orange" &&
      inputs.accessories === true &&
      inputs.bg === "green"
    ) {
      setFishImage(
        <img src={"images/5.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Your fish is awesome!");
    } else if (
      inputs.color === "orange" &&
      inputs.accessories === true &&
      inputs.bg === "blue"
    ) {
      setFishImage(
        <img src={"images/6.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("The crown is a nice touch!");
    } else if (
      inputs.color === "blue" &&
      inputs.accessories === true &&
      inputs.bg === "purple"
    ) {
      setFishImage(
        <img src={"images/10.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Wow, what a cute fish!");
    } else if (
      inputs.color === "blue" &&
      inputs.accessories === true &&
      inputs.bg === "green"
    ) {
      setFishImage(
        <img src={"images/11.png"} alt={inputs.petname} width="250" />
      );
      setErrorText(
        "There are so many fish in the sea... but you're the only one I see!"
      );
    } else if (
      inputs.color === "blue" &&
      inputs.accessories === true &&
      inputs.bg === "blue"
    ) {
      setFishImage(
        <img src={"images/12.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Wow, what a fabulous fish!");
    } else if (
      inputs.color === "black" &&
      inputs.accessories === true &&
      inputs.bg === "purple"
    ) {
      setFishImage(
        <img src={"images/16.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Your fish is looking awesome!");
    } else if (
      inputs.color === "black" &&
      inputs.accessories === true &&
      inputs.bg === "green"
    ) {
      setFishImage(
        <img src={"images/17.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Wow, what a lovely fish!");
    } else if (
      inputs.color === "black" &&
      inputs.accessories === true &&
      inputs.bg === "blue"
    ) {
      setFishImage(
        <img src={"images/18.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Wow, what a cute fish!");
    } else if (inputs.color === "orange" && inputs.bg === "purple") {
      setFishImage(
        <img src={"images/1.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Your fish is looking awesome!");
    } else if (inputs.color === "orange" && inputs.bg === "green") {
      setFishImage(
        <img src={"images/2.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Your fish is looking fantastic!");
    } else if (inputs.color === "orange" && inputs.bg === "blue") {
      setFishImage(
        <img src={"images/3.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Those are some pretty fins!");
    } else if (inputs.color === "blue" && inputs.bg === "purple") {
      setFishImage(
        <img src={"images/7.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Don't be shy... put on that crown!");
    } else if (inputs.color === "blue" && inputs.bg === "green") {
      setFishImage(
        <img src={"images/8.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Wow, what a cutie pie!");
    } else if (inputs.color === "blue" && inputs.bg === "blue") {
      setFishImage(
        <img src={"images/9.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Your fish is so cute!");
    } else if (inputs.color === "black" && inputs.bg === "purple") {
      setFishImage(
        <img src={"images/13.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Wow, what a cutie pie!");
    } else if (inputs.color === "black" && inputs.bg === "green") {
      setFishImage(
        <img src={"images/14.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("That's a lovely name!");
    } else if (inputs.color === "black" && inputs.bg === "blue") {
      setFishImage(
        <img src={"images/15.png"} alt={inputs.petname} width="250" />
      );
      setErrorText("Your fish has wonderful scales!");
    } else if (inputs.petname === undefined || inputs.petname.trim() === "") {
      setErrorText("Don't be shy, give your friend a name!");
    } else if (inputs.color === undefined || inputs.color === "") {
      setErrorText("Come on, pick a color!");
    } else if (inputs.bg === undefined || inputs.bg === "") {
      setErrorText("Almost there, pick a background color!");
    } else {
      addItem(inputs);
      setInputs({});
      setErrorText("");
    }
  };

  console.log(inputs);
  return (
    <div className="attendance-form-wrapper">
      <div className="row">
        <div className="column">
          <label className="label">Fish Name: </label>
        </div>
        <div className="column">
          <input
            name="petname"
            className="inputs"
            onChange={handleChange}
            value={inputs.petname || ""}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="column">
          <label className="label">Color:</label>
        </div>
        <div className="column">
          <select
            className="inputs"
            name="color"
            onChange={handleChange}
            value={inputs.color || ""}
          >
            <option value="">Select Color</option>
            {groups.map((color) => {
              return (
                <option key={`color-${color.id}`} value={color.id}>
                  {color.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="column">
          <label className="label">Accessories:</label>
        </div>
        <div className="column">
          <label className="labels">
            <input
              className="checkbox"
              type="checkbox"
              defaultValue={false}
              name="accessories"
              onChange={handleChange}
              value={inputs.accessories || true}
            />
            👑
          </label>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="column">
          <label className="label">Background Color:</label>
        </div>
        <div className="column">
          <select
            className="inputs"
            name="bg"
            onChange={handleChange}
            value={inputs.bg || ""}
          >
            <option value="">Select Color</option>
            {bgs.map((bg) => {
              return (
                <option key={`bg-${bg.id}`} value={bg.id}>
                  {bg.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <br />
      <div style={{ color: "blue" }}>{errorText}</div>
      <br />
      <div>
        <button
          onClick={handleImage}
          // style={{
          //   background: "#008CBA",
          //   color: "white",
          //   padding: "8px 24px",
          //   fontSize: "16px",
          //   display: "inline-block",
          //   textDecoration: "none",
          //   margin: "4px 2px",
          //   border: "none",
          //   cursor: "pointer"
          // }}
        >
          {" "}
          Create Fish{" "}
        </button>
      </div>
      <br />
      <button onClick={() => window.location.reload()}>Restart</button>
      <br />
      <br />
      <span style={{ fontWeight: "bold" }}>
        <h3> Meet {inputs.petname}... your new friend! </h3>
      </span>
      <span style={{ fontWeight: "bold" }}>{inputs.petname}</span> is a{" "}
      <span style={{ fontWeight: "bold" }}>{inputs.color}</span> fish with a{" "}
      <span style={{ fontWeight: "bold" }}>{inputs.bg}</span> background. <br />
      <span style={{ fontWeight: "bold" }}>{inputs.petname}</span> is the cutest
      fish!
      <br />
      <br />
      {fishImage}
    </div>
  );
};

////////////////////////////////////////////////////////////
const numberNames = {
  a: "years",
  b: "Enter MMDDYY"
};

function FishAge() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const handleChange = (num, nums) => {
    //console.log(num, scale);
    if (nums === "a") {
      setFirstNum(num);
      setSecondNum(tryConvert(num, toSecondNum));
    } else if (nums === "b") {
      setSecondNum(num);
      setFirstNum(tryConvert(num, toFirstNum));
    }
  };
  return (
    <div>
      <div>
        <div>
          <h1 style={{ borderBottom: "4px dotted #004aad" }}>
            Create Your Own Fish
          </h1>
          <h3 style={{ fontWeight: "bold" }}>
            Want to know how old your new friend is?
          </h3>
          <h4>
            {" "}
            Enter your favorite celebrity's birthday (MMDDYY)
            <br />
            in the first box to obtain a realistic age for your fish!
          </h4>
        </div>
        <Age nums="b" handleChange={handleChange} ages={secondNum} />
      </div>
      <div>
        <Age nums="a" handleChange={handleChange} ages={firstNum} />
      </div>
    </div>
  );
}
///////////////////

function WhatsNext() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const fetchPug = async () => {
    const link = "https://dog.ceo/api/breed/pug/images/random";

    fetch(link).then(async (response) => {
      const json = response.headers
        .get("content-type")
        ?.includes("application/json");
      const image = json ? await response.json() : null;
      if (!response.ok) {
        const error = (image && image.status) || response.status;
        console.log("** Error:", error);
        setError(error);
        return Promise.reject(error);
      }
      setImage(image);
    });
  };

  const fetchShiba = async () => {
    const link = "https://dog.ceo/api/breed/shiba/images/random";

    fetch(link).then(async (response) => {
      const json = response.headers
        .get("content-type")
        ?.includes("application/json");
      const image = json ? await response.json() : null;
      if (!response.ok) {
        const error = (image && image.status) || response.status;
        console.log("** Error:", error);
        setError(error);
        return Promise.reject(error);
      }
      setImage(image);
    });
  };

  const fetchHusky = async () => {
    const link = "https://dog.ceo/api/breed/husky/images/random";

    fetch(link).then(async (response) => {
      const json = response.headers
        .get("content-type")
        ?.includes("application/json");
      const image = json ? await response.json() : null;

      if (!response.ok) {
        const error = (image && image.status) || response.status;
        console.log("** Error:", error);
        setError(error);
        return Promise.reject(error);
      }
      setImage(image);
    });
  };
  // fetch info from week 8 sandbox
  return (
    <div>
      <div>
        <div>
          <h1 style={{ borderBottom: "4px dotted #004aad" }}>
            Create Your Own Fish
          </h1>
          <h3 style={{ fontWeight: "bold" }}>
            Wondering what's next? Look no further!
          </h3>
          <p>
            We are looking to expand "Create Your Own Fish" to "Create Your Own
            Pet" by adding more household pets.
            <br /> <br /> In the future, we will be adding dogs, cats, parrots,
            snakes, and so many other friends! <br />
            <br /> As of right now, we are in the process of adding dogs to the
            mix and...{" "}
            <h3 style={{ fontWeight: "bold" }}>WE NEED YOUR HELP!</h3>
            Between the three breeds of dogs, select the breed that you'd like
            to see first!
          </p>

          <select name="breed">
            <option>Select Breed</option>;<option>Pug</option>;
            <option>Shiba</option>;<option>Husky</option>;
          </select>
        </div>
      </div>
      <h3 style={{ fontWeight: "bold" }}>
        To help with your (almost impossible) decision, we pulled a never-ending
        list of open-sourced images for each breed.
      </h3>
      <div>
        <button onClick={fetchPug}>Random PUG Image</button> &nbsp;
        <button onClick={fetchShiba}>Random SHIBA Image</button>&nbsp;&nbsp;
        <button onClick={fetchHusky}>Random HUSKY Image</button>&nbsp; <br />
      </div>
      <br />
      {image !== null && <img src={image.message} alt="" width="250" />} <br />
      <br />
      <button>Submit Your Selection</button>
      <div></div>
    </div>
  );
}
///////////////////////

/////////////////////
function Age(props) {
  const { nums = "a", handleChange = () => {}, ages = "" } = props;

  const handleInputChange = (e) => {
    handleChange(e.target.value, e.target.name);
  };
  return (
    <div>
      Age ({numberNames[nums]}):{" "}
      <input value={ages} name={nums} onChange={handleInputChange} />
      <br />
      <br />
    </div>
  );
}

function toFirstNum(secondNum) {
  return secondNum / 33733;
}

function toSecondNum(firstNum) {
  return firstNum / 33733;
}

function tryConvert(fishAges, convert) {
  const input = parseFloat(fishAges);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
