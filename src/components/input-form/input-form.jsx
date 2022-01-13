import React from 'react';
import './input-form.scss';

function InputForm({handleChange,label,...otherProps}){
    return(
        <div className='group'>
            <input onChange={handleChange} className='form-input' {...otherProps} />
            {label? 
            (<label className={`form-input-label ${otherProps.value.length?'shrink':''}`}>
            {label}</label>)
            :null
            }

        </div>

    );
}
export default InputForm;