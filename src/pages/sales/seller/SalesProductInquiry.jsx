// import styled from 'styled-components';
import Main from '../../../components/ui/Main/Main';
import SalesUserProfile from '../../../components/MySalesPage/SalesUserProfile';
import PageSectionTitle from '../../../components/MySalesPage/PageSectionTitle';
const SalesProductInquiryPage = () => {
  return (
    <Main>
      <SalesUserProfile 
        ImageUrl="이미지URL"
        name="닉네임"
        email="이메일"/>
        <PageSectionTitle sectiontitle="판매상품조회" sectionsummary="당신이 판매하는 상품을 여기서 조회하세요!" />
    </Main>
  )
}

export default SalesProductInquiryPage
