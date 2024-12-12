import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IResult } from '../types/Article'
import SingleArticle from './SingleArticle'

const Homepage = () => {
  const SPACEFLIGHT_URL = 'https://api.spaceflightnewsapi.net/v4/articles'

  const [articles, setArticles] = useState<IResult[]>([])

  const getArticles = async () => {
    try {
      const response = await fetch(SPACEFLIGHT_URL)
      if (response.ok) {
        const arrayOfArticles = await response.json()
        console.log('arrayOfArticles', arrayOfArticles)
        setArticles(arrayOfArticles.results)
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
        <Row className="d-flex justify-content-between g-3">
          {articles.map((a) => {
            return (
              <Col
                xs={12}
                md={4}
                key={a.id}
                className="d-flex align-items-stretch"
              >
                <SingleArticle article={a} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Homepage
