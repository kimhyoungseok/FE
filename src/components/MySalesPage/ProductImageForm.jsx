import styled from 'styled-components';
import Image from '../ui/Image/Image';
import plusIcon from '../../assets/images/plus_Icon.svg';
import ImagePre from '../../assets/images/imagePreview.jpg';

const ProductImageForm = ({ imagePreviewUrl, setImagePreviewUrl }) => {
    
    const handleImageChange = (e) => {
        e.preventDefault();

        const files = e.target.files;
        const tempUrls = [];

        const loadFile = (file, index) => {
            const reader = new FileReader();

            reader.onloadend = (event) => {
                tempUrls[index] = event.target.result;
                if (tempUrls.length === files.length) {
                    setImagePreviewUrl(tempUrls);
                }
            }

            reader.readAsDataURL(file);
        }

        for (let i = 0; i < files.length; i++) {
            loadFile(files[i], i);
        }
    };

    return (
        <ProductImage>
            <ImagePreview style={{ backgroundImage: imagePreviewUrl.length > 0 ? `url(${imagePreviewUrl[0]})` : undefined }}>
                <LabelForFileInput>
                    <CircleButton>
                        <Image imageSrc={plusIcon}/>
                    </CircleButton>
                    <HiddenInput type="file" multiple id="fileInput" onChange={handleImageChange} />
                </LabelForFileInput>
            </ImagePreview>

            {Array.from({ length: 6 }).map((_, index) => (
                <SmallImagePreview key={index} style={{ backgroundImage: imagePreviewUrl[index + 1] ? `url(${imagePreviewUrl[index + 1]})` : undefined }} />
            ))}
        </ProductImage>
    )
}

export default ProductImageForm;

//style component

const LabelForFileInput = styled.label`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const HiddenInput = styled.input`
    display: none;
`;

const CircleButton = styled.span`
    width: 35px;
    height: 35px;
    border-radius: 50%; // 이것으로 원형으로 만듭니다.
    background-color: #ffffff; // 버튼의 배경색을 흰색으로 설정합니다.
    cursor: pointer;
    position: absolute; // ImagePreview 내에서 위치를 지정하기 위해 사용합니다.
    bottom: 10px;
    right: 10px;
    opacity: 50%;
    border:1px solid #a3a3a3;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);


`;
const ProductImage = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 8px;
	width: 330px;
    
`;

const SmallImagePreview =styled.div`
    border-radius: 10px;
	width: 101px;
	height: 101px;
    background-image: url(${ImagePre});
    border:1px solid #a3a3a3;
    background-size: cover;
`;

const ImagePreview = styled.div`
    width: 100%;
	height: 400px;
    border-radius: 10px;
    grid-column: 1/ span 3;
    position: relative;
    background-image: url(${ImagePre});
    border:1px solid #a3a3a3;
    background-size: cover;
`;