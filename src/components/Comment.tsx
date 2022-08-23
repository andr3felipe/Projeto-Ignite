import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Comment.module.css'

interface CommentProps{
  content: string;
  date: Date;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment, date }: CommentProps) {
  const publishedDateFormatted = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
  
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(state => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andr3felipe.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>André Felipe</strong>
              <time title={publishedDateFormatted} dateTime={date.toISOString()}>{publishedDateRelativeToNow}</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20} 
              onClick={handleDeleteComment}
              />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button
          onClick={handleLikeComment}
          >
            <ThumbsUp />
            Aplaudir 
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}