import dynamic from "next/dynamic";
import styled from "styled-components";
// import ThemeToggle from "../components/themeToggle";
const ThemeToggle = dynamic(() => import("../components/themeToggle"), {
  ssr: false,
});

const Container = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 30vh;
`;

export default function Home() {
  return (
    <Container>
      <section>
        <h1>Dark Mode Rises</h1>
        <h4>Dark mode in Next.js with styledComponents</h4>
        <ThemeToggle />
      </section>
    </Container>
  );
}
