import React from 'react';

function Alert(props) {

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1);
  };
  return (
    props.alert && (
      <>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert' style={{margin: '20px'}}>
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
        </div>
      </>
    )
  );
}

export default Alert;
