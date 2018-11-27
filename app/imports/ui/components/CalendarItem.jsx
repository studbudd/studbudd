import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Table } from 'semantic-ui-react';
import { Calendar } from '/imports/api/Calendar/Calendar';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class CalendarItem extends React.Component {
  render() {
    return (
        <div className="ui container">
          <Table celled>
            <Table.Header>
              <Table.Row>
              <Table.HeaderCell colSpan='7'>Availability</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Su</Table.HeaderCell>
                <Table.HeaderCell>Mo</Table.HeaderCell>
                <Table.HeaderCell>Tu</Table.HeaderCell>
                <Table.HeaderCell>We</Table.HeaderCell>
                <Table.HeaderCell>Th</Table.HeaderCell>
                <Table.HeaderCell>Fr</Table.HeaderCell>
                <Table.HeaderCell>Sa</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{this.props.Calendar.timeBegin} to {this.props.Calendar.timeBegin}</Table.Cell>
                <Table.Cell positive>7:00am - 7:00pm</Table.Cell>
                <Table.Cell negative>7:00am - 7:00pm</Table.Cell>
                <Table.Cell negative>7:00am - 7:00pm</Table.Cell>
                <Table.Cell warning>7:00am - 7:00pm</Table.Cell>
                <Table.Cell warning>7:00am - 7:00pm</Table.Cell>
                <Table.Cell>7:00am - 7:00pm</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
    );
  }
}
CalendarItem.propTypes = {
  Calendar: PropTypes.object.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Calendar');
  return {
    Calendar: Calendar.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CalendarItem);