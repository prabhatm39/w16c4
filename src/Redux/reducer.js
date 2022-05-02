import { DATA } from "./actionTypes";



const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case DATA:
      return{
        ...state,
        data: payload,
      }
  }
};
export { reducer };
