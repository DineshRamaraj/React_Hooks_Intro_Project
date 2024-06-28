import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  //   const [comment, setComment] = useState({name: '', commentText: ''})
  const [commentsList, setCommentsList] = useState([])
  const onChangeName = event => {
    setName(event.target.value)
  }
  const onChangeComment = event => {
    setCommentText(event.target.value)
  }
  //   const commentDetails = {
  //     name,
  //     commentText,
  //   }

  const onAddComment = event => {
    event.preventDefault()
    // setComment({name, commentText})
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
    setName('')
    setCommentText('')
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachItem => (
          <CommentItem commentDetails={eachItem} key={eachItem.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
