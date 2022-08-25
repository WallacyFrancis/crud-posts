import React, { useEffect, useState } from 'react';
import HeaderMain from '../../components/HeaderMain';
import Card from '../../components/Card';
import BtnCard from '../../components/BtnCard';
import Loading from '../../components/Loading';
import { get, exclude } from '../../utils/service';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const { data } = await get();
    setPosts(data);
  }

  const deletPost = async (id) => {
    await exclude(`/${id}`);
    const data = posts.filter((post) => post._id !== id);
    setPosts(data);
  }

  useEffect(() => {
    getData();
  });

  return (
    <>
      <HeaderMain />
      {posts.length === 0 ? (<Loading />) : posts.map((post) => {
        return (
          <Card 
            title={post.title}
            content={post.description}
          >
            <BtnCard id={post._id} handleDelte={() => deletPost(post._id)} />
          </Card>
      )})}
      
    </>
  )
}
