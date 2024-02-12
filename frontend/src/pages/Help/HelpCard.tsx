import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import MagnifyingGlassChart from "./MagnifyingGlassChart";
import UserDoctor from "./UserDoctor";
import FeedbackIcon from "./FeedbackIcon";

interface HelpProps {
    icon: string;
    title: string;
    paragraph: string;
}

function HelpCard(data: HelpProps){
  const [paragraph, setParagraph] = useState("");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (!data.paragraph ) {
        setParagraph("Error: No paragraph provided.");
    }
    if (!data.title ) {
        setTitle("Error: No title provided.");
    }
        setTitle(data.title);
        setParagraph(data.paragraph);
        if (data.icon=="UserDoctor") {
            setIcon(<UserDoctor />);
        } else if (data.icon=="FeedbackIcon"){
            setIcon(<FeedbackIcon />);
        } else if (data.icon=="MagnifyingGlassChart"){
            setIcon(<MagnifyingGlassChart />);  
        }
  }, [paragraph, data, title]);

  return (
    <div className="h-72 flex w-full max-w-6xl flex-col items-center justify-center px-4 shadow-md md:mt-28 bg-neutral-50 rounded-xl border-2 border-blue-100">
      <div className="flex flex-col items-center h-48">
      {icon && <div className="h-24 w-24">{icon}</div>}
          <h1 className="text-center text-black py-4">{title}</h1>
          <p
            className="text-log sm:text-x; mx-auto
          hidden max-w-[100%] text-center font-satoshi text-gray-600 md:block"
          >
            {paragraph}
          </p>
      </div>
    </div>
  );
}


export default HelpCard;
