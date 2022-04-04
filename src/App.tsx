import { Card } from "./Components/Card";
import { Layout } from "./Components/Layout";
import "./styles/global.css";
import "./app.css";
import { Typewriter } from "./Components/Typewriter";

function App() {
  return (
    <Layout>
      <div className="app-introduction text-center font-bold bg-highlight-yellow">
        <Typewriter text={<h1>Hey there 👋 I'm Andrew a developer.</h1>} />
      </div>
      <div className="grid grid-cols-2 grid-cols-2-sm">
        <div>
          <div className="flex space-between">
            <img
              className="round-circle pop-shadow height-128px width-128px"
              alt="profile"
              src="https://avatars.githubusercontent.com/u/13403032"
            ></img>
            <div className="padding-8px">
              A regular guy who enjoys programming, socializing, anime and
              gaming. Currently sporting x amount of public repositories, x
              anime watched, x manga read, x games played. When it comes to
              food, the only thing I consume is coffee and noodles.
            </div>
          </div>
          <div className="flex space-between">
            <figure className="height-640px width-640px">
              <embed src="https://wakatime.com/share/@taghead/1d8dc131-182f-4d23-903b-1c832a81fd70.svg"></embed>
            </figure>
            <figure className="height-640px width-640px">
              <embed src="https://wakatime.com/share/@taghead/513607e2-2efe-4766-b3e6-b0721a4d4763.svg"></embed>
            </figure>
          </div>
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
            <Card
              text="Education"
              textBody={
                <div className="width-full height-full">
                  <table className="width-full height-full text-center padding-2px">
                    <tr>
                      <th>Year</th>
                      <th>Course</th>
                    </tr>
                    <tr>
                      <td>2015</td>
                      <td>Victorian Certificate of Education</td>
                    </tr>
                    <tr>
                      <td>2015</td>
                      <td>Certificate III in Interactive Digital Media</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td>Certificate IV in Information Technology</td>
                    </tr>
                    <tr>
                      <td>2017 - 2018</td>
                      <td>Associate Degree in Information Technology</td>
                    </tr>
                    <tr>
                      <td>2020 - 2021</td>
                      <td>Bachelor of Information Technology</td>
                    </tr>
                  </table>
                </div>
              }
            />
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
