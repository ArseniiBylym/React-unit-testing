import React, {useState, useEffect} from 'react';
import { URL_PATH, fetchApi } from '../api';

export const useFetch = url => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData()
  }, [url])

  const fetchData = async() => {
    try {
      const res = await fetchApi.get(url);
      setIsLoading(false);
      setData(res.data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  const updateItem = (elem) => {
    const newData = data.map(item => {
      return item._id === elem._id ? elem : item;
    })
    setData(newData)
  }

  const addItem = newElem => {
    setData([...data, newElem])
  }

  const deleteItem = deletedItem => {
    const newData = data.filter(item => item._id !== deletedItem._id);
    setData(newData);
  }

  return {data, isLoading, error, updateItem, addItem, deleteItem};
}


