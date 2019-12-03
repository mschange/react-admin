import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        首页 ---- 环境变量 == {process.env.NODE_ENV}
      </div>
    )
  }
}

export default Home;
