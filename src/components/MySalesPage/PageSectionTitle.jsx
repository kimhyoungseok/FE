import styled from 'styled-components';

const PageSectionTitle = ({sectiontitle,sectionsummary}) => {
  return (
    <SectionTitle>
          <h2>
            {sectiontitle} ㅣ<span>{sectionsummary}</span>
          </h2>
    </SectionTitle>
  )
}

export default PageSectionTitle

const SectionTitle = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid red;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
`;
