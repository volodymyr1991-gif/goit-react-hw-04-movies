// import React, { Component } from 'react';
// // import  {fetchShowDetails} from '../services/TvApi';

// export default class ShowDetails extends Component {
//   state = { 
//     show: null 
//   };

//   componentDidMount() {
   
//       fetchShowDetails(this.props.match.params.showId)
//       .then(show => this.setState({ show }));
//   }

//   render() {
// // const {show} = this.state.show;
// // const pas = show.poster_path
//     // const fre=image.tmdb.org/t/p/w500/{poster_path}
//     return (
//       <div>

//           shov details
//         {this.state.show && (
//           <>
//             <img
//               src={this.state.show.poster_path}
//               alt={this.state.show.name}
//             />
//             <h1>{this.state.show.name}</h1>
//           </>
//         )}
//       </div>
//     );
//   }
// }