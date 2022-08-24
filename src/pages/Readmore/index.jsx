import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { getOne } from '../../utils/service';

export default function Readmore() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const getUnicPost = async () => {
    const { data } = await getOne(`/posts/${id}`);
    setPosts(data);
  }

  useEffect(() => {
    getUnicPost()
  }, []);

  return (
    <>
      <Header title="LEIA MAIS" />
      {posts !== undefined && posts.map((post) => {
        return (
          <Card 
            title="Consumindo API's com ReactJs"
            content="Esta aplicação é utilizada para fazer a requisição de uma api inter com controler de react-hook-form. Esta aplicação é utilizada para fazer a requisição de uma api inter com controler de react-hook-form. Esta aplicação é utilizada para fazer a requisição de uma api inter com controler de react-hook-form. Esta aplicação é utilizada para fazer a requisição de uma api inter com controler de react-hook-form"
          />
        )
      })}
      {}
    </>
  )
}
