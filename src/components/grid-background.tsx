import React from "react";
import FloatICon from "./float-icon";
import Chess from "@/assets/chess.png";
import Calculator from "@/assets/calculator.png";
import Tictactoe from "@/assets/tictactoe.png";
import Todolist from "@/assets/todolist.png";
import Textutils from "@/assets/textutils.png";
import Pingpong from "@/assets/pingpong.png";
import Bricball from "@/assets/brickbll.png";
import Whacamole from "@/assets/whacamole.png";

import { GitHubLogoIcon } from "@radix-ui/react-icons";


const getUrl = (projectname: string) =>
  `https://codebykaran.github.io/PortFolio/Projects/${projectname}/index.html`;

function GridBackground() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center">
      <p className="text-4xl sm:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 select-none ">
        My Projects
      </p>
      <a href="https://github.com/CodeByKaran?tab=repositories" target="_blank" className="flex">
      
      <GitHubLogoIcon width={24} height={24} className=" z-50 -translate-y-1 text-gray-500  hover:text-gray-900 dark:hover:text-gray-200"/></a>
      
      </div>
     
      <FloatICon source={Chess} title="Chess" link="https://chess-game-six-cyan.vercel.app/" range={100} />
      <FloatICon
        source={Calculator}
        title="Calculator"
        link={getUrl("Calculator")}
        range={300}
      />
      <FloatICon
        source={Tictactoe}
        title="Tictactoe"
        link={getUrl("Tic-Tac-Toe")}
        range={180}
      />
      <FloatICon
        source={Todolist}
        title="Todolist"
        link={getUrl("ToDo")}
        range={250}
      />
      <FloatICon
        source={Textutils}
        title="Textutils"
        link={getUrl("TextUtils")}
        range={350}
      />
      <FloatICon
        source={Pingpong}
        title="Pingpong"
        link={getUrl("PingPong")}
        range={200}
      />
      <FloatICon
        source={Bricball}
        title="Bricball"
        link={getUrl("BrickBall")}
        range={90}
      />
      <FloatICon
        source={Whacamole}
        title="Whacamole"
        link={getUrl("WhacAMole")}
        range={280}
      />
    </div>
  );
}

export default GridBackground;
