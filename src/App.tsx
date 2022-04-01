import { Button } from "./Components/Button";
import { Card } from "./Components/Card";
import { Layout } from "./Components/Layout";
import "./styles/global.css";

function App() {
  return (
    <Layout>
      <Button />
      <Card /> <Card /> <Card /> <Card />
    </Layout>
  );
}

export default App;
