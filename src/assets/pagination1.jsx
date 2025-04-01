import React, { useEffect, useState } from 'react';

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  }, [products]);

  if (loading) return <div>Loading Data...Please wait </div>;
  return (
    <>
      <div className='flex flex-wrap justify-center gap-2 items-top'>
        {products && products.length
          ? products.map((item) => (
              <div
                className='flex flex-col w-[200px] border-2 border-gray-400 shadow-md rounded-md p-2'
                key={item.id}
              >
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          className={
            disableBtn
              ? ' w-[300px] mt-4 rounded-lg p-2 text-white bg-gray-300'
              : ' w-[300px] mt-4 rounded-lg p-2 text-white bg-blue-600'
          }
          disabled={disableBtn}
          onClick={() => setCount(count + 1)}
        >
          Load more
        </button>
        {disableBtn ? <p>You have reached the 100 products limit</p> : null}
      </div>
    </>
  );
};

export default LoadMoreData;
