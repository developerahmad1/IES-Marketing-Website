import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppContextProvider = ({ children }) => {
  const [isOpenChatBot, setIsOpenChatBot] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [iesMessages, setiesMessages] = useState([
      { text: "Hi its Developer Ahmad. If you need any assistance, Chat with me Or WhatsApp 03054474602", type: "ai", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const openChatBot = () => setIsOpenChatBot(true);
  const closeChatBot = () => setIsOpenChatBot(false);

  const blogsData = [
    {
      id: 1,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244553.png',
      title: 'Fintech 101: Exploring the Basics of Electronic Payments',
      title2: `Uneasy barton seeing remark happen his has`,
      author: 'Harsh C.',
      date: '2 year ago',
      paragraphs: [
        "Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six.",

        "Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening newspaper in advantage frankness to concluded unwilling.",

        "Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte discovered uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so prospect no as raptures quitting.",
        "Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore.",

        "Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable.",

        "Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown oh he common future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested simplicity at do projecting increasing terminated. As edward settle limits at in.",

        "Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she.",

        "Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.",

        "Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two real miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it without me.",
      ],
    },
    {
      id: 2,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244579.png',
      title: 'From Classroom to Cyberspace: The Growing Influence of EdTech in Fintech',
      author: 'John D.',
      date: '2 year ago',
      paragraphs: [],
    },
    {
      id: 3,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'Fintech Solutions for Student Loans: Easing the Burden of Education Debt',
      author: 'Alexa H.',
      date: '2 year ago',
      paragraphs: [],
    },
    {
      id: 4,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'Exploring the Future of Urban Living',
      author: 'Emily R.',
      date: '1 year ago',
      paragraphs: [],
    },
    {
      id: 5,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'The Rise of Smart Homes: What to Expect',
      author: 'Michael S.',
      date: '1 year ago',
      paragraphs: [],
    },
    {
      id: 6,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'Investing in Real Estate: Tips for Beginners',
      author: 'Sophia K.',
      date: '1 year ago',
      paragraphs: [],
    },
    {
      id: 7,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'Sustainable Architecture Trends in 2024',
      author: 'Daniel W.',
      date: '1 year ago',
      paragraphs: [],
    },
    {
      id: 8,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'How to Choose the Right Neighborhood',
      author: 'Olivia P.',
      date: '1 year ago',
      paragraphs: [],
    },
    {
      id: 9,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'The Impact of Remote Work on Real Estate',
      author: 'James T.',
      date: '6 months ago',
      paragraphs: [],
    },
    {
      id: 10,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'Real Estate Market Predictions for 2025',
      author: 'Isabella L.',
      date: '6 months ago',
      paragraphs: [],
    },
    {
      id: 11,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'Top Renovation Projects That Add Value',
      author: 'Aiden J.',
      date: '6 months ago',
      paragraphs: [],
    },
    {
      id: 12,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'Understanding Real Estate Investment Trusts (REITs)',
      author: 'Mia C.',
      date: '6 months ago',
      paragraphs: [],
    },
    {
      id: 13,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'How to Finance Your Real Estate Investment',
      author: 'Liam G.',
      date: '3 months ago',
      paragraphs: [],
    },
    {
      id: 14,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'The Benefits of Living in a Gated Community',
      author: 'Charlotte N.',
      date: '3 months ago',
      paragraphs: [],
    },
    {
      id: 15,
      imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'Exploring Historic Homes and Their Value',
      author: 'Noah H.',
      paragraphs: [],
    },
  ];



  return (
    <AppContext.Provider value={{
      openChatBot,
      closeChatBot,
      isOpenChatBot,
      setIsOpenChatBot,
      userMsg,
      setUserMsg,
      iesMessages,
      setiesMessages,
      blogsData,
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easier usage of the context
export const useAppContext = () => {
  return useContext(AppContext);
};
