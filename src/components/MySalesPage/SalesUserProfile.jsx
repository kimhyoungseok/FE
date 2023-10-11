import styled from 'styled-components';

const SalesUserProfile = ({ profileImageUrl, name, email }) => {
    return (
        <UserProfileContainer>
            <ProfileImage src={profileImageUrl} alt="프로필 이미지" />
            <UserInfo>
                <div>{name}</div>
                <div>{email}</div>
            </UserInfo>
        </UserProfileContainer>
    );
};

const UserProfileContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 1920px;
    max-height: 1000px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 20px;
    border: 1px solid red;
    border-radius: 7px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 15px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default SalesUserProfile;