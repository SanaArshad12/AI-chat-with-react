import { useContext, useState } from "react"
import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { Context } from "../../context/Context"

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className={`sidebar ${extended ? "extended" : ""}`}>
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon || "/placeholder.svg"}
          alt="Menu"
          style={{ display: "block", width: "20px", height: "20px" }}
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon || "/placeholder.svg"} alt="" />
          {extended ? <p>Start a new chat</p> : null}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon || "/placeholder.svg"} alt="" />
                <p>{item.slice(0, 18)}.. </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon || "/placeholder.svg"} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon || "/placeholder.svg"} alt="" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon || "/placeholder.svg"} alt="" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar

