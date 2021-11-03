import Head from "next/head";
import { LandingPage } from "./landingPage";
import { AppBar, Toolbar, Button } from "@material-ui/core";
export default function Home() {
  // const [count, setCounter] = useState(1);

  // useEffect(() => {
  //   document.getElementById(`radio${count}`).checked = true;

  //   setTimeout(() => {
  //     if (count < 4) {
  //       setCounter(count + 1);
  //     } else {
  //       setCounter(1);
  //     }
  //   }, 4000);
  // }, [count]);

  return (
    <>
      <Head>
        <title>Front</title>
        <meta name="projeto-front" content="front" />
      </Head>

      <div className= "subsoul2">
      <AppBar
        position="absolute"
        color="default"
        elevation="1"
        style={{ justifyContent: "flex-end", height: 40, padding: -10 }}
      >
        <Toolbar style={{ justifyContent: "flex-end", color: "#000000" }}>
          <Button
            variant="dense"
            color="inherit"
            style={{
              justifyContent: "flex-end",
              color: "#000000",
              marginTop: 20,
              fontSize: 10,
              fontFamily:" Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;"
            }}
          >
            ENTRAR
          </Button>

          <Button
            variant="dense"
            color="inherit"
            boxShadow="transparent"
            style={{
              justifyContent: "flex-end",
              color: "#000000",
              marginTop: 20,
              fontSize: 10,
              fontFamily:" Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;"
            }}
          >
            CADASTRAR
          </Button>

          <Button
            variant="dense"
            color="inherit"
            boxShadow="transparent"
            style={{
              justifyContent: "flex-end",
              color: "#000000",
              marginTop: 20,
              fontSize: 10,
              fontFamily:" Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;"
            }}
          >
            VOLTAR PARA OS PLANOS
          </Button>
        </Toolbar>
      </AppBar>

      <main>
        <LandingPage />
      </main>
      </div>
    </>
  );
}
// import Img01 from "./1.jpg";
// import Img02 from "./2.jpg";
// import Img03 from "./3.jpg";
// import Img04 from "./4.jpg";
