import React, { memo } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../model/Store"

function DebugInfo() {
  console.log("DebugInfo()")
  const { app, memes } = useSelector<RootState, RootState>(s => s)

  return (
    <div>
      count={app.count}
      <br />
      memesAvailable={memes.currentMemes.length}
      <br />
    </div>
  )
}

export default memo(DebugInfo)
