// import axios from "axios";

// class WeatherPrj extends Component {
//   state = {};

//   async componentDidMount() {
//     //this is the only way to bring API in react
//     const succes = async ({ coords }) => {
//       console.log(coords);
//       const { latittude: lat, longitude: lon } = coords;
//       const { data } = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10&appid=17a3e02a9cc47ed1eac90bc2f9c0012a`
//       );

//       this.state({ weather: data });
//     };

//     navigator.geolocation.getCurrentPosition(succes, fail);
//   }

//   render() {
//     const { list } = this.state.weather; //pull it out to make more conviniet, avoid repetitive calls

//     if (!list) {
//       return <h1>Loading</h1>;
//     }
//     return (
//       <>
//         {list.map((item) => {
//           return (
//             <div>
//               <h1>(new Date(item.dt * 1000)toLocalString())</h1>
//               <p>(Math.round(item.main.temp - 273.15)c)</p>
//             </div>
//           );
//         })}
//       </>
//     );
//   }
// }

// export default WeatherPrj;
