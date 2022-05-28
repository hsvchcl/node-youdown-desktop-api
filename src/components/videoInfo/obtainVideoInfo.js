import ytdl from "ytdl-core";

export const obtainVideoInfo = async (videoUrl) => {
  try {
    console.log(videoUrl);
    const videoID = ytdl.getURLVideoID(videoUrl);
    let info = await ytdl.getBasicInfo(videoID);
    const thumbailFilter = info.videoDetails.thumbnail.thumbnails;
    const filterArray = thumbailFilter.filter((el) => el.width <= 336);
    const lastObjectThumbail = filterArray[filterArray.length - 1];

    const data = {
      thumbail: lastObjectThumbail,
      title: info.videoDetails.title,
      author: info.videoDetails.author,
      video_url: info.videoDetails.video_url,
      likes: info.videoDetails.likes,
      views: info.videoDetails.viewCount,
    };
    return { status: true, data };
  } catch (error) {
    console.log(error);
    return { status: false, message: error.message };
  }
};
