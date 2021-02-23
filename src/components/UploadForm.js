import React, { useState } from 'react';


const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // setting what types of files we allow to be uploaded
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    // checking selected file and it's type. will show either file or error msg
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected)
      setError('');
    } else {
      // we reset value in case selected file is wrong type
      setFile(null)
      setError('Wybrano niewłaściwy format pliku. Dozwolone są tylko obrazy');
    }
  }

  return (
    <form action="">
      <input type="file" onChange={changeHandler}/>
      <span>+</span>
      {/* div below will give an output to selected file */}
      <div className="output">
        { error && <p className="error">{ error }</p> } 
        { file && <p>{ file.name }</p> }
      </div>
    </form>
  )
}

export default UploadForm;