import { Container, Spinner } from "react-bootstrap"

export const Loading = () => {
  return (
    <Container className="d-flex justify-content-center p-5">
      <Spinner animation="border" variant="info" />
    </Container>
  )
}
