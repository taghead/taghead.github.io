import { Card } from "./Components/Card";
import { Layout } from "./Components/Layout";
import "./styles/global.css";
import "./app.css";
import { Typewriter } from "./Components/Typewriter";

function App() {
  return (
    <Layout>
      <div className="appIntroduction">
        <Typewriter text={<h1>Hey there 👋 I'm Andrew a developer.</h1>} />
      </div>
      <div className="grid grid-cols-2">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum diam eu risus pulvinar, eu placerat augue pretium. Nunc
          rutrum sem quis ante cursus, mollis vestibulum metus sodales.
          Phasellus eget fringilla nulla. Nam non semper mi. Nullam vel tellus
          elit. Etiam dignissim urna nec massa pellentesque, sit amet posuere
          massa porta. Nam risus sem, luctus eu vestibulum in, ultrices eget
          odio. Pellentesque condimentum sit amet erat quis gravida. In sed
          iaculis orci. Ut non scelerisque sapien. Suspendisse quis tempor
          tellus, vitae dapibus tortor. Vivamus ultrices finibus velit, ac
          blandit velit pellentesque sed. Proin leo risus, dignissim vitae nisl
          a, hendrerit sodales massa. Praesent nulla est, lobortis id posuere
          at, pellentesque eget dolor. Donec eu iaculis nulla. Pellentesque
          iaculis a ipsum et vulputate. Nunc in erat massa. Nulla dolor ligula,
          maximus varius quam sit amet, commodo tempor metus. Nulla auctor
          tincidunt velit sit amet imperdiet. Donec dictum vel turpis non
          consectetur. Nunc consectetur pellentesque velit, consequat
          ullamcorper arcu pharetra ut. Phasellus sit amet dignissim ante.
          Curabitur elementum purus ex, nec scelerisque dui tincidunt ut. Donec
          eu augue metus. Morbi dapibus lacinia lorem at venenatis. Phasellus
          eget aliquet enim, euismod cursus neque. Morbi ac dolor ornare, varius
          nibh at, consequat leo.
        </div>
        <div className="grid grid-cols-1 grid-col-start-2">
          <div>
            <Card
              text="About me"
              bgColor="bg-blanched-almond"
              textBody={<p></p>}
            />
          </div>
          <div>
            <Card text="Education" textBody={<p></p>} />
          </div>
          <div>
            <Card text="Work" textBody={<p></p>} />
          </div>
          <div>
            <Card text="Projects" textBody={<p></p>} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
