import { Component } from 'react';

class FeedbackOption extends Component {
  render() {
    const { types, handleFeedBackClick } = this.props;
    return (
      <div>
        {types.map(type => (
          <button
            type="button"
            key={type}
            onClick={() => handleFeedBackClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOption;

// import React, { Component } from "react";

// class FeedbackOption extends Component {
//   render() {
//     const { types, handleFeedBackClick } = this.props;

//     return (
//       <div>
//         {types.map((type) => (
//           <button
//             type="button"
//             key={type}
//             onClick={() => handleFeedBackClick(type)}
//           >
//             {type}
//           </button>
//         ))}
//       </div>
//     );
//   }
// }

// export default FeedbackOption;
