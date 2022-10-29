import React from "react";


const SocialLinks= (props) => {
  const {inputs} = props
  
    return (
      <div className="preview">
        {
           Object.keys(inputs).map(function(key) {
            const keyName = key.replace(/[0-9]/g, '');
            return <div key = {`key${key}`} className={keyName}>{inputs[key]}</div>
          })
        }
      </div>
    );
  };
export default SocialLinks;