// import React,{Component} from 'react';
// import {Link } from 'react-router-dom';

// // import Form from '../components/form/Form'
// // import getQueryString from '../utils/getQueryString'
// // import routes from '../routes';
// import {fetchItems} from "../services/TvApi";

// // import Loader from '../components/loader/Loader'



// export default class Shows extends Component {
//     state = {
//       shows: [],
//       error: null,
//       isLoading: false,
//     };
  
//     componentDidMount() {
//       // const {query}= getQueryString(this.propd.location.search)
        
//       fetchItems('cat').then(response => this.setState({ shows:response.data.results}));
//      this.fechApi()
//     }
//     // https://api.themoviedb.org/3/trending/all/day?api_key=bfce076e7c9a3c60d70abb15359c6391
//     fechApi = ()=>{
//         return fetch( `https://api.themoviedb.org/3/trending/all/day?api_key=bfce076e7c9a3c60d70abb15359c6391`)
//         .then(res => res.json())
//         .then((data)=>console.log('popular',data.results))
//     }

//     render() {
//       const { shows } = this.state;
//       const { match } = this.props;
//     console.log('shiw',shows);
//       return (
//         <>
//           {shows.length > 0 && (
//             <ul>
//               {shows.map(show => (
//                 <li key={show.id}>
//                   <Link to={`${this.props.match.url}/${show.id}`}>{show.title}</Link>
              
//                 </li>
//               ))}
//             </ul>
//           )}
  
//           {/* <Route path={`${match.path}/:showId`} component={InlineShowDetails} /> */}
//         </>
//       );
//     }
//   }
