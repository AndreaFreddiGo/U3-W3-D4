import { Card } from 'react-bootstrap'
import { IResult } from '../types/Article'

interface SingleArticleProps {
  article: IResult
}

const SingleArticle = (props: SingleArticleProps) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={props.article.image_url} />
      <Card.Body>
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text>{props.article.summary}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleArticle
