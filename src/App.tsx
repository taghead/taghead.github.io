import { Button } from "./Components/Button";
import { Card } from "./Components/Card";
import { Layout } from "./Components/Layout";
import "./styles/global.css";
import "./app.css";

function App() {
  return (
    <Layout>
      <div className="appIntroduction">
        <p>
          Hey there 👋 <br /> I'm Andrew a developer.
        </p>
      </div>
      <div className="appGridContainer">
        <div>
          <Card text="About me" textBody={<p></p>} />
        </div>
        <div>
          <Card text="About me" textBody={<p></p>} />
        </div>
        <div>
          <Card text="About me" textBody={<p></p>} />
        </div>
        <div>
          <Card text="About me" textBody={<p></p>} />
        </div>
        <div>
          <Card text="About me" textBody={<p></p>} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
