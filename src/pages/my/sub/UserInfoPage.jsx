import UserProfileContent from '../../../components/MyPageContents/UserProfileContent';
import PageSection from '../../../components/PageSection';
import UserCartContent from '../../../components/MyPageContents/UserCartContent';
import UserOrderContent from '../../../components/MyPageContents/UserOrderContent';
import UserSaleItemsContent from '../../../components/MyPageContents/UserSaleItemsContent';

const UserInfoPage = () => {
  return (
    <>
<<<<<<< HEAD
{/*       
    <UserProfileSection titleText="내 정보" />
    <UserCartListSection titleText="장바구니" />
    <UserSaleListSection titleText="내가 올린 상품" />
    <UserOrderListSection titleText="구매 상품" /> */}
=======
      <PageSection titleText="내 정보">
        <UserProfileContent />
      </PageSection>
      <PageSection titleText="장바구니">
        <UserCartContent />
      </PageSection>
      <PageSection titleText="구매 목록">
        <UserOrderContent/>
      </PageSection>
      <PageSection titleText="판매 목록">
        <UserSaleItemsContent/>
      </PageSection>
>>>>>>> 7ae2eeb0ca5bd4c4ec15a2b3d360549f831923ed
    </>
  );
};

export default UserInfoPage;
