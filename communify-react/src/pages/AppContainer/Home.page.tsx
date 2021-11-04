import { FC, memo } from "react";
import AddQuestionModal from "../../components/AddQuestionModal";
import QACard from "../../components/QACard";

interface Props {}

const Home: FC<Props> = (props) => {
  return (
    <div>
      <div className="flex flex-col w-full px-2 mt-10 space-y-4 sm:w-2/5 sm:mx-auto sm:px-0">
        <QACard
          title="Ayaan Bhai kaise kar lete ho?"
          resolver="Shashank Jain"
          answer="Are bhai kch nhi bas 12th ke baad drop liya tha usi ka kamaal hai, aur kch nhi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi a quibusdam dolorum deserunt, cupiditate blanditiis dolor ullam, nulla fugiat autem similique amet repellendus ratione atque sequi labore reiciendis qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt cumque at impedit saepe sequi ullam pariatur ab veritatis alias, in odio, natus, corrupti optio non ratione doloribus dolorum debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, dolorum iste vitae asperiores id consequuntur. Quas veniam repellendus suscipit sequi, sapiente, laboriosam atque animi voluptatum repudiandae ratione assumenda error!"
          imgSrc="https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg"
        />
        <QACard
          title="Ayaan Bhai kaise kar lete ho?"
          resolver="Shashank Jain"
          answer="Are bhai kch nhi bas 12th ke baad drop liya tha usi ka kamaal hai, aur kch nhi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi a quibusdam dolorum deserunt, cupiditate blanditiis dolor ullam, nulla fugiat autem similique amet repellendus ratione atque sequi labore reiciendis qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt cumque at impedit saepe sequi ullam pariatur ab veritatis alias, in odio, natus, corrupti optio non ratione doloribus dolorum debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, dolorum iste vitae asperiores id consequuntur. Quas veniam repellendus suscipit sequi, sapiente, laboriosam atque animi voluptatum repudiandae ratione assumenda error!"
          imgSrc="https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg"
        />
        <QACard
          title="Ayaan Bhai kaise kar lete ho?"
          resolver="Shashank Jain"
          answer="Are bhai kch nhi bas 12th ke baad drop liya tha usi ka kamaal hai, aur kch nhi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi a quibusdam dolorum deserunt, cupiditate blanditiis dolor ullam, nulla fugiat autem similique amet repellendus ratione atque sequi labore reiciendis qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt cumque at impedit saepe sequi ullam pariatur ab veritatis alias, in odio, natus, corrupti optio non ratione doloribus dolorum debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, dolorum iste vitae asperiores id consequuntur. Quas veniam repellendus suscipit sequi, sapiente, laboriosam atque animi voluptatum repudiandae ratione assumenda error!"
          imgSrc="https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg"
        />
        <QACard
          title="Ayaan Bhai kaise kar lete ho?"
          resolver="Shashank Jain"
          answer="Are bhai kch nhi bas 12th ke baad drop liya tha usi ka kamaal hai, aur kch nhi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi a quibusdam dolorum deserunt, cupiditate blanditiis dolor ullam, nulla fugiat autem similique amet repellendus ratione atque sequi labore reiciendis qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt cumque at impedit saepe sequi ullam pariatur ab veritatis alias, in odio, natus, corrupti optio non ratione doloribus dolorum debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, dolorum iste vitae asperiores id consequuntur. Quas veniam repellendus suscipit sequi, sapiente, laboriosam atque animi voluptatum repudiandae ratione assumenda error!"
          imgSrc="https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg"
        />
      </div>
      <AddQuestionModal />
    </div>
  );
};

Home.defaultProps = {};

export default memo(Home);
