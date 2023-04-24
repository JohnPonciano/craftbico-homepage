import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an software developer based in Brazil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jonathan Ponciano
          </Heading>
          <p>Digital Craftsman ( Gamer / Developer / Chef )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/perfil.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        I worked as a support and infrastructure analyst at the City Hall of Itu Tourist Instancia.
        </Paragraph>
        <Paragraph>
        Back-end development with Python with Django/Flask, NODEJS and consuming and developing API-REST.<br></br>
        Front-End Bootstrap, SASS and Tailwinds. 
        </Paragraph>
        <Paragraph>
        Also helped in network monitoring, creation and configuration of Linux and Windows servers, also responsible for implementing SOC and SIEM security tools.
        </Paragraph>
        <Paragraph>
        Currently working at Accenture Brasil, with API development in Python, using Flask and FastAPI, in AWS and GCP environments.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Itu São Paulo
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Web Developer in (Singular Estúdio Criativo)
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Support Analyst in (Prefeitura da Instância Turística de Itu | Global Links Consultoria em Informática)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Python Developer Junior in (Accenture Brasil | Adecco)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Games, Music,{' '}
          <Link href="/" target="_blank">
            Anime
          </Link>
          , CyberSecurity,{' '}
          <Link href="https://www.instagram.com/one_eye_nigth/" target="_blank">
            Photography
          </Link>
          , Cooking.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/johnponciano" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @johnponciano
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/@Hakku_001" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @Hakku_001 (PT-BR)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://www.linkedin.com/in/jonathan-ponciano-silva/' target='_blank'>
            <Button 
              variant='ghost'
              colorScheme='teal'
              leftIcon={<IoLogoLinkedin/>}>
              Jonathan Ponciano
            </Button>
            
            </Link>
          </ListItem>
        </List>
        
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
