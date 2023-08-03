import SingleItem from '../SingleItem/SingleItem';
import { SectionWrapper } from './SingleProductC.styled';
import { singleProduct } from '../../../data';

const SingleProductC = () => {
  return (
    <SectionWrapper>
      <SingleItem {...singleProduct} />
    </SectionWrapper>
  );
};

export default SingleProductC;
