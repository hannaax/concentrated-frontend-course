import styled from "@emotion/styled";

export default function PostRegistrationPage() {
  const PostRegistrationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    padding: 30px;
    border: 1px solid gray;
  `;
  const Label = styled.div`
    font-size: 13px;
    font-weight: 600;
    padding-bottom: 5px;
  `;
  const Input = styled.input`
    font-size: 13px;
    padding: 5px;
    width: 100%;

    &::placeholder {
      color: #bbb;
    }
  `;
  const Textarea = styled.textarea`
    width: 100%;
  `;
  const RadioInput = styled.input``;
  const PostRegistrationTitleDiv = styled.div`
    font-size: 30px;
    font-weight: 700;
  `;
  const WriterPwDiv = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const WriterDiv = styled.div``;
  const WriterInput = styled.input``;
  const PostPwDiv = styled.div``;
  const PostTitleDiv = styled.div``;
  const PostContentDiv = styled.div``;
  const WriterAdressDiv = styled.div``;
  const WriterAdressInputDiv = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const PostYoutubeDiv = styled.div``;
  const PictureUploadDiv = styled.div``;
  const PictureUploadBtn = styled.button`
    border: none;
    background: #bdbdbd;
    margin-right: 20px;
  `;
  const PostMainSettingDiv = styled.div``;
  const PostRegistrationBtnDiv = styled.div``;
  const PostRegistrationBtn = styled.button`
    border: none;
    background: #ffd600;
    padding: 5px 30px;
    font-weight: 600;
  `;
  return (
    <PostRegistrationWrapper>
      <PostRegistrationTitleDiv>게시물 등록</PostRegistrationTitleDiv>
      <WriterPwDiv>
        <WriterDiv>
          <Label>작성자</Label>
          <Input placeholder="이름을 적어주세요"></Input>
        </WriterDiv>
        <PostPwDiv>
          <Label>비밀번호</Label>
          <Input placeholder="비밀번호를 입력해주세요"></Input>
        </PostPwDiv>
      </WriterPwDiv>
      <PostTitleDiv>
        <Label>제목</Label>
        <Input placeholder="제목을 입력해주세요"></Input>
      </PostTitleDiv>
      <PostContentDiv>
        <Label>내용</Label>
        <Textarea placeholder="내용을 작성해주세요"></Textarea>
      </PostContentDiv>
      <WriterAdressDiv>
        <Label>주소</Label>
        <WriterAdressInputDiv>
          <Input placeholder="07250" style={{ width: "50px" }}></Input>
          <Input></Input>
          <Input></Input>
        </WriterAdressInputDiv>
      </WriterAdressDiv>
      <PostYoutubeDiv>
        <Label>유튜브</Label>
        <Input placeholder="링크를 복사해주세요"></Input>
      </PostYoutubeDiv>
      <PictureUploadDiv>
        <Label>사진 첨부</Label>
        <PictureUploadBtn>
          <p>+</p>upload
        </PictureUploadBtn>
        <PictureUploadBtn>
          <p>+</p>upload
        </PictureUploadBtn>
        <PictureUploadBtn>
          <p>+</p>upload
        </PictureUploadBtn>
      </PictureUploadDiv>
      <PostMainSettingDiv>
        <Label>메인 설정</Label>
        <RadioInput type="radio" name="mainSetting"></RadioInput>유튜브
        <RadioInput type="radio" name="mainSetting"></RadioInput>사진
      </PostMainSettingDiv>
      <PostRegistrationBtnDiv>
        <PostRegistrationBtn>등록하기</PostRegistrationBtn>
      </PostRegistrationBtnDiv>
    </PostRegistrationWrapper>
  );
}
