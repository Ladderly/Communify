import { Disclosure } from "@headlessui/react";
import { TextField } from "@mui/material";
import { ChangeEvent, Fragment, memo, useState } from "react";
import { IoMdShareAlt } from "react-icons/io";
import AnswerCard from "../../components/AnswerCard";
import Button from "../../components/Button";
import { FaPenAlt } from "react-icons/fa";

interface Props {}

const Question: React.FC<Props> = (props) => {
  const [answer, setAnswer] = useState<string>("");
  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  return (
    <div className="flex flex-col mt-10 space-y-4">
      <div className="relative flex flex-col w-2/5 mx-auto bg-gray-100 shadow-lg">
        <h1 className="items-center p-5 text-xl font-semibold h-15">
          Ayaan Bhai kaise kar lete ho?
        </h1>
        <Disclosure as={Fragment}>
          <Disclosure.Button as={Fragment}>
            <button className="block mr-auto">
              <FaPenAlt className="w-10 h-10 p-2 ml-4 border rounded-full border-secondary-400 text-secondary-300" />{" "}
            </button>
          </Disclosure.Button>
          <Disclosure.Panel as={Fragment}>
            <div className="mt-5 ml-4 mr-4 transform ">
              <TextField
                onChange={handleAnswerChange}
                value={answer}
                className="w-full"
                id="outlined-multiline-static"
                label="Enter Answer"
                multiline
                rows={4}
                placeholder="Please enter appropriate answer.."
                color="success"
              />
              <Button className="block w-32 mt-2 mr-auto">Add Answer</Button>
            </div>
          </Disclosure.Panel>
        </Disclosure>
        <div className="mt-4 border-b-2 border-secondary-400"></div>
        <div className="py-2 mx-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold">32 ANSWERS</p>
            <div>
              <button>
                <IoMdShareAlt className="w-8 h-8 rounded-full text-secondary-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnswerCard
        resolver="Shashank Jain"
        answer="Are bhai kch nhi bas 12th ke baad drop liya tha usi ka kamaal hai, aur kch nhi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi a quibusdam dolorum deserunt, cupiditate blanditiis dolor ullam, nulla fugiat autem similique amet repellendus ratione atque sequi labore reiciendis qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt cumque at impedit saepe sequi ullam pariatur ab veritatis alias, in odio, natus, corrupti optio non ratione doloribus dolorum debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, dolorum iste vitae asperiores id consequuntur. Quas veniam repellendus suscipit sequi, sapiente, laboriosam atque animi voluptatum repudiandae ratione assumenda error!"
        imgSrc="https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg"
      />
      <AnswerCard
        resolver="Shashank Jain"
        answer="Are bhai kch nhi bas 12th ke baad drop liya tha usi ka kamaal hai, aur kch nhi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi a quibusdam dolorum deserunt, cupiditate blanditiis dolor ullam, nulla fugiat autem similique amet repellendus ratione atque sequi labore reiciendis qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt cumque at impedit saepe sequi ullam pariatur ab veritatis alias, in odio, natus, corrupti optio non ratione doloribus dolorum debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, dolorum iste vitae asperiores id consequuntur. Quas veniam repellendus suscipit sequi, sapiente, laboriosam atque animi voluptatum repudiandae ratione assumenda error!"
        imgSrc="https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg"
      />
      <AnswerCard
        resolver="Shashank Jain"
        answer="Are bhai kch nhi bas 12th ke baad drop liya tha usi ka kamaal hai, aur kch nhi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi a quibusdam dolorum deserunt, cupiditate blanditiis dolor ullam, nulla fugiat autem similique amet repellendus ratione atque sequi labore reiciendis qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt cumque at impedit saepe sequi ullam pariatur ab veritatis alias, in odio, natus, corrupti optio non ratione doloribus dolorum debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, dolorum iste vitae asperiores id consequuntur. Quas veniam repellendus suscipit sequi, sapiente, laboriosam atque animi voluptatum repudiandae ratione assumenda error!"
        imgSrc="https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg"
      />
      <AnswerCard
        resolver="Shashank Jain"
        answer="Are bhai kch nhi bas 12th ke baad drop liya tha usi ka kamaal hai, aur kch nhi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi a quibusdam dolorum deserunt, cupiditate blanditiis dolor ullam, nulla fugiat autem similique amet repellendus ratione atque sequi labore reiciendis qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt cumque at impedit saepe sequi ullam pariatur ab veritatis alias, in odio, natus, corrupti optio non ratione doloribus dolorum debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis, dolorum iste vitae asperiores id consequuntur. Quas veniam repellendus suscipit sequi, sapiente, laboriosam atque animi voluptatum repudiandae ratione assumenda error!"
        imgSrc="https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg"
      />
    </div>
  );
};
Question.defaultProps = {};
export default memo(Question);
