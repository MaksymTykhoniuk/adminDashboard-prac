import SingleItem from '../SingleItem/SingleItem';
import { SectionWrapper } from './SingleProductC.styled';
import { singleProduct } from '../../../data';

const SingleProductC = () => {
  return (
    <SectionWrapper>
      SingleProductC
      <SingleItem {...singleProduct} />
    </SectionWrapper>
  );
};

export default SingleProductC;
