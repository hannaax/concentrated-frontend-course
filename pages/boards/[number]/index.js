import * as S from "../../../styles/styles"
import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
    }
  }
`

export default function PostDetailPage() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  })

  console.log(data)

  return (
    <S.Container>
      <S.PostWrapper>
        <S.PostHead>
          <S.LeftPostHead>
            <S.PostWriterImg>사진</S.PostWriterImg>
            <S.PostWriterDate>
              <S.PostWriter>hanna</S.PostWriter>
              <S.PostDateWrapper>
                <S.PostDateLabel>Date</S.PostDateLabel>
                <S.PostDate>2023.06.13.</S.PostDate>
              </S.PostDateWrapper>
            </S.PostWriterDate>
          </S.LeftPostHead>
          <S.RightPostHead>
            <S.PostUrlCopy>주소 복사</S.PostUrlCopy>
            <S.PostLocation>위치</S.PostLocation>
          </S.RightPostHead>
        </S.PostHead>
        <S.PostBody>
          <S.PostTitle>게시글 제목</S.PostTitle>
          <S.PostContent>게시글 내용</S.PostContent>
        </S.PostBody>
        <S.PostLikeBtns>
          <S.LikeBtnWrapper>
            <S.LikeBtn>좋아요 버튼</S.LikeBtn>
            <S.LikeCount>좋아요 수</S.LikeCount>
          </S.LikeBtnWrapper>
          <S.DislikeBtnWrapper>
            <S.DislikeBtn>싫어요 버튼</S.DislikeBtn>
            <S.DislikeCount>싫어요 수</S.DislikeCount>
          </S.DislikeBtnWrapper>
        </S.PostLikeBtns>
      </S.PostWrapper>
      <S.MoveEditBtnsWrapper>
        <S.PostListMoveBtn>목록으로</S.PostListMoveBtn>
        <S.PostEditBtn>수정하기</S.PostEditBtn>
      </S.MoveEditBtnsWrapper>
      <S.ReplyWrapper>댓글창</S.ReplyWrapper>
    </S.Container>
  )
}
