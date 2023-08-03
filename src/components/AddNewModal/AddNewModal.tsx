import { GridColDef } from '@mui/x-data-grid';
import {
  CloseBtn,
  ModalWrapper,
  ModalTitle,
  SectionWrapper,
  FormItem,
  FormWrapper,
  SubmitBtn,
  Label,
  Input,
} from './AddNewModal.styled';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewModal = (props: Props) => {
  const { slug, columns, setOpen } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // addNewItem
  };

  return (
    <SectionWrapper>
      <ModalWrapper>
        <CloseBtn onClick={() => setOpen(false)} />
        <ModalTitle> Add new {slug}</ModalTitle>
        <FormWrapper onSubmit={handleSubmit}>
          {columns
            .filter(el => el.field !== 'id' && el.field !== 'img')
            .map(el => (
              <FormItem key={el.headerName}>
                <Label>{el.headerName}</Label>
                <Input type={el.type} placeholder={el.field} />
              </FormItem>
            ))}
          <SubmitBtn>Send</SubmitBtn>
        </FormWrapper>
      </ModalWrapper>
    </SectionWrapper>
  );
};

export default AddNewModal;
