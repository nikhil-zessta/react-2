import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import { Container } from "./components/styles/Container.Styled";
import GlobalStyles from "./components/styles/Global";
import content from './content'
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <p>Hello World</p>
          {content.map((item,index)=>(
           <Card key={index} item={item}/>
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
