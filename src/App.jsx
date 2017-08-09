import React, { Component } from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';
import DestinationTable from './components/Destinations/DestinationTable';
import AddNewDestinationRow from './components/AddNewDestination/AddNewDestinationRow';
import './App.css';

const PropTypes = require('prop-types');

class App extends Component {
  getChildContext() {
    return { widgetId: this.props.widgetId };
  }

  render() {
    return (
      <div>
        <Container>
          <Grid padded centered>
            <Grid.Column id="content-container">
              <Grid.Row id="destinations-container">
                <DestinationTable />
              </Grid.Row>

              <Grid.Row id="new-destination-container">
                <Segment>
                  <AddNewDestinationRow />
                </Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

App.childContextTypes = {
  widgetId: PropTypes.string,
};

// const App = ({ widgetId }) => {
//   getChildContext() {
//     return {color: "purple"};
//   }
// // componentDidMount : utils.setWidgetId(widgetId)
//
//   render() {
//     <div>
//       <Container>
//         <Grid padded centered>
//           <Grid.Column id="content-container">
//             <Grid.Row id="destinations-container">
//               <DestinationTable />
//             </Grid.Row>
//
//             <Grid.Row id="new-destination-container">
//               <Segment>
//                 <AddNewDestinationRow />
//               </Segment>
//             </Grid.Row>
//           </Grid.Column>
//         </Grid>
//       </Container>
//     </div>
//   };
// }

export default App;
