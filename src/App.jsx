import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import { Dropdown } from "flowbite-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-3xl text-red-700 flex gap-2">hello world</h2>
      <Button></Button>
      <Dropdown
        className="text-red-500"
        label="Dropdown button"
        dismissOnClick={false}
      >
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </>
  );
}

export default App;
