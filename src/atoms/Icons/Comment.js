import React from "react"

const Comment = ({ width = '38', height = '38', fill = 'grey', fillOpacity = ".7", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path fill={"rgb(20, 139, 114)"} d="M5 11.667h6.708v-1.75H5Zm0-2.459h10v-1.75H5ZM5 6.75h10V5H5ZM1.667 18.333V3.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v9.833q0 .729-.51 1.24-.511.51-1.24.51H5Z"/></svg>
)

export default Comment;