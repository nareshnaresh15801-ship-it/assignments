// App.jsx
import React from "react";
import Button from "./Button";
import CenteredLayout from "./CenteredLayout";
import ColoredBox from "./ColoredBox";
import ResponsiveText from "./ResponsiveText";
import Card from "./Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-10 p-6">
      <Button />
      <CenteredLayout />
      <ColoredBox />
      <ResponsiveText />
      <Card />
    </div>
  );
}

export default App;