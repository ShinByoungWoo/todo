import GlobalCss from "./components/GlobalCss";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <GlobalCss />
      <Layout>
        <Header />
      </Layout>
    </>
  );
}

export default App;
