import React, {useState, useEffect} from 'react';
import {GifCard} from '../../components';
import {fetchTrending} from '../../adapters';

export default function GifFrame() {
  const [gifList, setGifList] = useState([]);
  useEffect(async () => {
    const result = fetchTrending();
    setGifList(result);
    console.log("Gif List", gifList);
  }, []);
  return (
    <>
      {gifList.length > 0 ?
        gifList.map(gif => {
          <GifCard>
          {gif.type}
          </GifCard>
        }) :
        null
      }
    </>
  );
};
