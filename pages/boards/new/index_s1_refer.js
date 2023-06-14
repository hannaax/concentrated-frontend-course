export default function PostRegistrationPage() {
  return (
    <Wrapper>
      <Title></Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label type="password">비밀번호</Label>
          <Password />
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents />
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode />
          <SearchButton></SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton></UploadButton>
        <UploadButton></UploadButton>
        <UploadButton></UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton
          type="radio"
          id="youtube"
          name="radio-button"
        ></RadioButton>
        <RadioLabel htmlFor="">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button"></RadioButton>
        <RadioLabel htmlFor="">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
