import {
    Button
} from 'react-bootstrap';
import { BsCodeSlash } from "react-icons/bs";

const ViewCodeButton = ({show, setShow}) => {

  return (
    <>
      <Button
        onClick={()=>setShow(!show)}
        variant="outline-primary"
        type="button"
        className="py-1 px-2 btn-sm"
      >
        <BsCodeSlash />
      </Button>
    </>
  );
};

export default ViewCodeButton;
