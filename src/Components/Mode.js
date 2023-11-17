import React from 'react'

export default function Mode(props) {
  return (
    <div className={`container d-inline border form-check ` }>
          <input className="form-check-input"   type="radio" name="gridRadios" id="gridRadios1" onClick={props.togglemode} />
          <label className={`form-check-label text-${props.mode=="light"?"DARK":"light"}`} htmlFor="gridRadios1">
            {`${props.mode=="light"?"Dark":"Light"} Mode`}
          </label>
        </div>
  )
}
