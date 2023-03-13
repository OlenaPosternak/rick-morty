import { BtnsSection, Button } from './Buttons.styled';
export const PaginationBtns = ({ setPage, page, numberOfChars }) => {
  return (
    <BtnsSection>
      {numberOfChars > 20 && page !== 1 && (
        <Button onClick={() => setPage(page - 1)}>"Prev page..."</Button>
      )}
      {numberOfChars > 20 && (
        <Button onClick={() => setPage(page + 1)}>"Next page..."</Button>
      )}
    </BtnsSection>
  );
};
