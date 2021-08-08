import { useState, useEffect, useCallback, useReducer } from 'react';
import {API} from '../API'

import {axiosReducer, initialState} from '../reducers/axios'
import { ACTIONS } from '../actions/axios'

export const useAxios = (endpoint = "") => {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const [state, dispatch] = useReducer(axiosReducer, initialState);
  // DISPATCH → método → mediante acciones  actualizamos el state DEL REDUCER
  // DISPATCH → como minimo se le pasa 1 parametro, como máximo 2 parametros
  const getData = useCallback(async () => {
    try {
      const {data} = await API.get(`${endpoint}`);
      dispatch({type: ACTIONS.SET_DATA, payload: data})
      // setData(resData);
    } catch (e) {
      console.error(e);
      dispatch({ type: ACTIONS.SET_ERROR });
      // setError(true);
    }
    // setLoading(false);
  }, [endpoint]);

  useEffect(() => {
    getData();
  }, [endpoint, getData]);

  return state;
  // return [data, loading, error];
};


