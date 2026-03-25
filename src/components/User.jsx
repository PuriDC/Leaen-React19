import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
export default function User({item}) {
  return (
    <>
      <li
        style={{
          borderStyle: "solid",
          borderColor: item.gender == "Male" ? "Blue" : "pink",
        }}
      >
        <img src={item.gender == "Male" ? boy : girl} width={50} height={50} />
        <p>{item.name}</p>
        <div className="control">
          <button>Delete</button>
        </div>
      </li>
    </>
  );
}
