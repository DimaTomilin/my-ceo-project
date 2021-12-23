// import { alert } from '../helpers/alerts';

export const consoleMiddleware = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

// export const fetchCitiesMiddleware = (storeAPI) => (next) => (action) => {
//   next(action);
//   const countryName = storeAPI.getState().country.pickedCountry.name;
//   console.log('1');
//   if (action.type === 'SET_COUNTRY') {
//     console.log('2');
//     axios
//       .post(`https://countriesnow.space/api/v0.1/countries/cities`, {
//         country: countryName,
//       })
//       .then((response) => {
//         storeAPI.dispatch({
//           type: 'GET_CITIES',
//           payload: response.data.data,
//         });
//       })
//       .catch((error) => {
//         alert('Citites of this country not found, ' + error.response.data.msg);
//       });
//   }
// };
