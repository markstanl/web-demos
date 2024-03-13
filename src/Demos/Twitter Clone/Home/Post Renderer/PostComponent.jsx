import React from "react";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
  person10,
  person12,
  profile,
} from "./assets/index";

const PostComponent = ({ userComment }) => {
  const names = [
    "Emily Johnson",
    "Emma Smith",
    "Michael Williams",
    "Maria Rodriguez",
    "Ravi Patel",
    "Sophia Brown",
    "Jacob Thompson",
    "Ryan Nguyen",
    "Ethan Wilson",
    "Mia Kim",
    "You",
    "Mark Stanley",
  ];

  const twitterHandles = [
    "@emily_the_explorer_23",
    "@emma_artsy_17",
    "@mike05",
    "@maria_melodies_92",
    "@ravi_the_traveller_11",
    "@sophia_storyteller",
    "@jake.the.snake_99",
    "@tvshowjunkie",
    "@ethan_caffeineconnoisseur_36",
    "@mia_inspiration_27",
    "@you",
    "@markstanl",
  ];

  const people = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
    person7,
    person8,
    person9,
    person10,
    profile,
    person12,
  ];

  return (
    <div className="w-full p-2 pb-6 bg-black border-b-2 border-gray-500">
      <div className="flex">
        <img
          src={people[userComment.userId - 1]}
          alt="person"
          className="w-12 h-12 rounded-full m-2"
        />
        <div className="flex flex-col mt-2">
          <div className="flex justify-start items-center">
            <h1 className="text-lg text-white font-bold mr-2">
              {names[userComment.userId - 1]}
            </h1>
            <h2>
              <span className="text-gray-500">
                {twitterHandles[userComment.userId - 1]}
              </span>
            </h2>
          </div>
          <p className="text-white w-[95%]">{userComment.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
