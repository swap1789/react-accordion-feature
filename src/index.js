import React, { Component } from 'react';
import { number, node, arrayOf, bool, string } from 'prop-types';
import classnames from 'classnames';
import './style.css';

class Accordion extends Component {
  /**
   * This is static property bound to the Class
   * Displays the accordion title and content
   */
  static Pane = ({ children, onTogglePanel, isExpanded, ...props }) => {
    return (
      <div className="accordion">
        <div className="accordion--pane">
          <button
            aria-expanded={isExpanded}
            className={classnames('accordion--title', {
              'accordion--title_expanded': isExpanded
            })}
            onClick={() => onTogglePanel(props.index)}
          >
            <h3>{props.title}</h3>
            <span
              className={classnames('accordion--icon', {
                'accordion--icon_expanded': isExpanded
              })}
            >
              {props.hasCustomIcon ? '' : isExpanded ? '-' : '+'}
            </span>
          </button>
          <div
            aria-hidden={!isExpanded}
            className={classnames('accordion--content', {
              'accordion--content_expanded': isExpanded
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };

  state = {
    activePane: this.props.activePane, // state to maintain expand/collapse feature of accordion
    isMultiple: this.props.mutiplePane // type , expansion of multiple accordions
  };

  /**
   * This function is used to expand or collapse the accordion content section
   * @param index : type nummber, index of clicked accordion
   */
  toggle = selectedIndex => {
    const { activePane, isMultiple } = this.state;
    // check if the accordion is already in expanded state
    // by checking the index,  whether present in the activePane array
    const isIndexPresent = activePane.indexOf(selectedIndex) >= 0;
    if (activePane.length > 0) {
      if (isMultiple) {
        if (isIndexPresent) {
          const newIndexes = activePane;
          // if type of accordion is multiple, remove the index from array
          // so that the accordion gets collapsed
          newIndexes.splice(activePane.indexOf(selectedIndex), 1);
          this.setState({
            activePane: [...newIndexes]
          });
        } else {
          // if index is not present, push it in the activePane array
          activePane.push(selectedIndex);
          this.setState({
            activePane
          });
        }
      } else if (isIndexPresent) {
        // in case of one accordion expanded at a time, if same accordion is clicked
        // make the activePane array empty, so that it will collapsed the accordion
        this.setState({
          activePane: []
        });
      } else {
        // expand the accordion
        this.setState({
          activePane: [selectedIndex]
        });
      }
    } else {
      // if the activePane array is empty , simply push the index to it
      activePane.push(selectedIndex);
      this.setState({
        activePane
      });
    }
  };
  /**
   * function to determine if the accordion is expanded or collapsed
   * @param index : type number, index of accordion
   * @return flag : type bool
   */
  isExpanded = index => {
    const { activePane } = this.state;
    return activePane.indexOf(index) >= 0;
  };
  render() {
    const { customClass, hasCustomIcon } = this.props;
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        hasCustomIcon, // provision to have custom icon
        index, // pass the index value to each accordion
        isExpanded: this.isExpanded(index), // check if accordion needs to be displayed in expanded state
        onTogglePanel: this.toggle // function to toggle the state of accordion
      });
    });
    return <div className={classnames(`${customClass}`)}>{children}</div>;
  }
}

Accordion.propTypes = {
  activePane: arrayOf(number),
  children: node,
  mutiplePane: bool,
  hasCustomIcon: bool,
  customClass: string
};

Accordion.defaultProps = {
  activePane: [],
  children: '',
  mutiplePane: false,
  hasCustomIcon: false,
  customClass: ''
};

export default Accordion;
