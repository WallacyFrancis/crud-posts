import React, { useEffect, useState } from 'react';
import HeaderMain from '../../components/HeaderMain';
import Card from '../../components/Card';
import BtnCard from '../../components/BtnCard';
import { get } from '../../utils/service';

export default function Home() {
  const [posts, setPosts] = useState();

  const getData = async () => {
    const { data } = await get();
    setPosts(data)
    return data;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HeaderMain />
      {posts !== undefined && posts.map((post) => {
        return (
          <Card 
            title={post.title}
            content={post.description}
          >
            <BtnCard id={post._id}/>
          </Card>
      )})}
    </>
  )
}
