import GlobalStyles from "@styles/globalStyles";
import logo from "@assets/logo.svg";
import MainCard from "@features/layout";
import S from "./App.module.scss";

function App() {
  return (
    <div className={S.root}>
      <GlobalStyles />
      <header>
        <img src={logo} alt="Project Logo" />
      </header>
      <main>
        <MainCard />
      </main>
    </div>
  );
}

export default App;
