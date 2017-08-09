import React, { Component } from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';
import DestinationTable from './components/Destinations/DestinationTable';
import AddNewDestinationRow from './components/AddNewDestination/AddNewDestinationRow';
import './App.css';
import { WIDGET_ID } from './constants/constants';


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

App.propTypes = {
  widgetId: PropTypes.string.isRequired,
};

App.defaultProps = {
  widgetId: WIDGET_ID,
};

App.childContextTypes = {
  widgetId: PropTypes.string,
};

export default App;
