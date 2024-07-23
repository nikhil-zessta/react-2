import { StyledHeader, Nav, Logo,Image } from "./styles/Header.Styled";
import { Container } from "./styles/Container.Styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader bg="#ebfbff">
      <Container>
        <Nav>
          <Logo src="./image/logo.svg" alt="logo-image" />
          <Button>Try it free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Yours Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
                Get Started For Free
            </Button>
          </div>

          <Image src="./image/illustration-mockups.svg"/>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
