import React from "react";
import PropTypes from 'prop-types';
import Tab from "./Tab";

const Tabs = props => {
  const { tabs, selectedTab, selectTabHandler } = props;
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map(tab => (
          <Tab
            key={Date.now()}
            tab={tab}
            selectedTab={selectedTab}
            selectTabHandler={selectTabHandler}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tabs;
