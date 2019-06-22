import React from "react"

export default ({
  height = 430,
  width = 600,
  scrolling = "no",
  title = "Recent Episodes",
}) => (
  <div
    style={{
      width: "100%",
      height,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h4>{title}</h4>

    <iframe
      title={title}
      id="multi_iframe"
      src="https://www.podbean.com/media/player/multi?playlist=http%3A%2F%2Fplaylist.podbean.com%2F4985748%2Fplaylist_multi.xml&vjs=1&kdsowie31j4k1jlf913=2b4ebdca63da5edf25773f4daef8d13947c9a5d7&size=430&skin=4&episode_list_bg=%23ffffff&bg_left=%236569b8&bg_mid=%234f84ab&bg_right=%23393d87&auto=0&share=0&fonts=Helvetica&download=0&rtl=0&show_playlist_recent_number=3&pbad=0"
      frameborder="0"
      scrolling={scrolling}
      width={width}
      height={height}
      allowfullscreen=""
    />
  </div>
)
