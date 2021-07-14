import React, { useState } from "react";

function App() {
  const apiUrl = "https://api.randomuser.me/";
  const [avatar, setAvatar] = useState("");
  const [phone, setPhone] = useState("");
  const [gmail, setGmail] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [postCode,setPostCode]=useState('')
  const handleGenerateUser = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        setGender(results[0].gender);
        setGmail(results[0].email);
        setAge(results[0].dob.age);
        console.log(results[0]);
        setPhone(results[0].phone);
        setRegion(results[0].nat);
        setAvatar(results[0].picture.large);
        setName(results[0].name.first);
        setCountry(results[0].location.country);
        setPostCode(results[0].location.postcode)
      });
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-400">
      <button
        onClick={handleGenerateUser}
        className="focus:outline-none transtion-all hover:bg-gray-200 mb-6 border-2 rounded bg-white py-3 px-10 font-bold border-gray-700 outline-none"
      >
        Generate User
      </button>
      <div className="useCard p-4 border-4 rounded flex flex-col items-center w-[30rem] h-[25rem]">
        <div className="picture w-28 h-28 rounded-full border object-cover overflow-hidden">
          <img src={avatar} alt={avatar} />
        </div>
        <h1 className="text-xl mt-4 mb-4">
          <span className="font-bold text-lg">Name </span>
          {name || "randomName"}
        </h1>
        <div className="mb-2">
          <span className="font-bold text-lg">Gamil</span> {gmail || "x gmail"}
        </div>
        <div className="details w-full mt-6 flex justify-between">
          <div className="section">
            <div className="mb-2">
              <span className="font-bold text-lg">Phone</span> {phone || "xxx-xxx-xxxx"}
            </div>
            <div className="mb-2">
              <span className="font-bold text-lg">Country</span>{" "}
              {region || "x natinality"}
            </div>
            <div className="mb-2">
              <span className="font-bold text-lg">Nationality</span>{" "}
              {country || "x country"}
            </div>
          </div>
          <div className="section">
            <div className="mb-2">
              <span className="font-bold text-lg">Gender</span> {gender || "x gender"}
            </div>
            <div className="mb-2">
              <span className="font-bold text-lg">Age</span> {age || "x age"}
            </div>
            <div className="mb-2">
              <span className="font-bold text-lg">PostCode</span> {postCode || "x postCode"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
