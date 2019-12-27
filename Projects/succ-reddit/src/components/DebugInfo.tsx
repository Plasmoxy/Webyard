import React, { memo } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../model/AppReducer"
import { RootState } from "../model/Store"

function DebugInfo() {
  console.log("DebugInfo()")
  const app = useSelector<RootState, AppState>(s => s.app)

  return (
    <div>
      count={app.count}
      <br />
      memesRead={app.memesRead}
      <br />
    </div>
  )
}

export default memo(DebugInfo)
