import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="old_Portifolio">
    <Container>
      <Title>
        Old Projects <Badge>2020 to 2022</Badge>
      </Title>
      <P>
      Sequence of projects, which can often be random, because usually when I program something, 
      I do it because I feel like it, and I don't follow a single line of reasoning. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://johnponciano.github.io/CV-Jonathan-Ponciano/">
             Old_CV <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web / Windows/ Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS,React, Python, and Pure HTML/CSS/JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="old_" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="old_" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
