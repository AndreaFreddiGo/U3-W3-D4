import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IArticle } from '../types/Article'

const Homepage = () => {
  const SPACEFLIGHT_URL = 'https://api.spaceflightnewsapi.net/v4/articles'

  const [articles, setArticles] = useState<IArticle[]>([])

  const getArticles = async () => {
    try {
      const response = await fetch(SPACEFLIGHT_URL)
      if (response.ok) {
        const arrayOfArticles = await response.json()
        console.log('arrayOfArticles', arrayOfArticles)
        setArticles(arrayOfArticles)
      } else {
        throw new Error('Unable to fetch articles')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <>
      <h1>SPACEFLIGHT</h1>
      <Container>
        <Row className=" justify-content-center">
          <Col xs={12} md={6}></Col>
        </Row>
      </Container>
    </>
  )
}

export default Homepage
