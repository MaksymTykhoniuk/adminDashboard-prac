import SingleItem from '../SingleItem/SingleItem';
import { SectionWrapper } from './SingleUserC.styled';
import { singleUser } from '../../../data';

const SingleUserC = () => {
  return (
    <SectionWrapper>
      <SingleItem {...singleUser} />
    </SectionWrapper>
  );
};

export default SingleUserC;
