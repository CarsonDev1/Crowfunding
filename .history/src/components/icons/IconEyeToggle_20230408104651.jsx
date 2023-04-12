import React from 'react'

function IconEyeToggle({ toggle = false }) {
  if (toggle) return ()
  return (
    <span>
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L19 20" stroke="#A2A2A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </span>
  )
}

export default IconEyeToggle