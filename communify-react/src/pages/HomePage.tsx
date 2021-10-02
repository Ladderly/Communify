import { FC, memo } from "react";
import AddQuestionModal from "../components/AddQuestionModal";

interface Props {}

const HomePage: FC<Props> = (props) => {
  return(
    <div>
      <AddQuestionModal/>
    </div>
  )
}

HomePage.defaultProps = {};

export default memo(HomePage);
