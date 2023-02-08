import { useState, useEffect } from "react";
import { Buffer } from "buffer";
import "./spotify-now-playing.scss";
import { T } from "@tolgee/react";

const SpotifyNowPlaying = () => {
  const [song, setSong] = useState();
  const [isSong, setIsSong] = useState(false);
  const [songArtists, setSongArtists] = useState("");
  const [isLongTitle, setIsLongTitle] = useState(false);
  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "post",
          headers: {
            Authorization:
              "Basic " +
              Buffer(
                process.env.REACT_APP_CLIENT_ID +
                  ":" +
                  process.env.REACT_APP_CLIENT_SECRET
              ).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `grant_type=refresh_token&refresh_token=${process.env.REACT_APP_REFRESH_TOKEN}`,
        });
        const data = await response.json();

        return data.access_token;
      } catch (error) {
        console.log(error);
      }
    };

    const getCurrentlyPlaying = async (access_token) => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (response.status === 200) {
          const data = await response.json();
          return data;
        }

        return "NOT_PLAYING";
      } catch (error) {
        console.log(error);
      }
    };

    const getSongDetails = async () => {
      const accessToken = await getAccessToken();
      const song = await getCurrentlyPlaying(accessToken);
      if (song !== "NOT_PLAYING" && song.currently_playing_type !== "episode") {
        if (song.item.name.length > 20 || song.item.artists.length > 5) {
          setIsLongTitle(true);
        }
        let artists = "";
        song.item.artists.forEach((item) => {
          artists += item.name + ", ";
        });

        setSongArtists(artists.substring(0, artists.length - 2));
        setIsSong(true);
        setSong(song);
      }
    };
    getSongDetails();
    setInterval(async () => {
      await getSongDetails();
    }, 60000);
  }, []);

  return (
    <div className="container center-v mt-5">
      <div className="row">
        <div className="col wow fadeIn">
          <h3>
            <T keyName="listeningNow" />
          </h3>
        </div>
      </div>
      {isSong ? (
        <div
          className={
            isLongTitle
              ? "spotify-card large wow fadeIn"
              : "spotify-card wow fadeIn"
          }
        >
          <div className="song-img-container">
            <img
              className="song-img wow fadeInLeft"
              src={song.item.album.images[0].url}
              width={80}
              alt=""
            />
          </div>
          <div className="song-details container">
            <div className="row">
              <div className="col">
                <h6 className="song-title wow fadeInRight">{song.item.name}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h6 className="song-subtitle wow fadeInDown">{songArtists}</h6>
              </div>
            </div>
          </div>
          <a
            className="link-to-song"
            href={song.item.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="spotify-logo wow fadeIn"
              src="/assets/images/spotify-logo.png"
              alt=""
            />
          </a>
        </div>
      ) : (
        <div className="spotify-card">
          <div className="song-img-container">
            <img
              className="song-img wow fadeInLeft"
              src="/assets/images/notPlayingImage.jpg"
              width={80}
              alt=""
            />
          </div>
          <div className="song-details container">
            <div className="row">
              <div className="col">
                <h6 className="song-title wow fadeInRight">
                  <T keyName="notListening" />
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h6 className="song-subtitle wow fadeInDown">Spotify</h6>
              </div>
            </div>
          </div>
          <img
            className="spotify-logo wow fadeIn"
            src="/assets/images/spotify-logo.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default SpotifyNowPlaying;
