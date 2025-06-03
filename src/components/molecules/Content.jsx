import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const Content = () => {
  return (
    <div className="w-full md:w-[calc(100%-256px)] bg-[#0f0f0f] m-auto">
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default Content
