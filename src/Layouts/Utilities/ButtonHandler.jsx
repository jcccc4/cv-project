import React, { Component } from "react";

class ButtonHandler extends Component {
  constructor(props) {
    super(props);

  } 

  render() {
    const {onAdd , status, linkHandler, removeLink } = this.props
    return (
        <div>
            <button type='button' id = {`add${status}`} onClick={(e) => linkHandler(e)}>{`Add ${status}`}</button>
            {onAdd>0&&<button type='button' id = {`remove${status}`} onClick={(e) => removeLink(e)}>{`Remove ${status}`}</button>}
      </div>
    );
  }
}
export default ButtonHandler;