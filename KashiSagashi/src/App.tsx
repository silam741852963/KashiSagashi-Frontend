import { useEffect, useState } from "react";
import Background from "./components/Background";
import { Routes, Route, Link } from "react-router-dom";
import AddSong from "./components/AddSong";
import Nav from "./components/Nav";
import SongsView from "./components/SongsView";
import { song } from "./model/Song";
import { SearchBar } from "./components/SearchBar";
import { PopupProps } from "./components/Popup";
import Register from "./components/Register";
import Login from "./components/Login";
import Popup from "./components/Popup";
import ForgotPw from "./components/ForgotPw";
import MailCode from "./components/MailCode";
import Success from "./components/Success";
import ResetPw from "./components/ResetPw";
import { useCookies, CookiesProvider } from "react-cookie";

function App() {
  const songs: song[] = [
    {
      name: "Love Yourself",
      lyric:
        "\nFor all the times that you rained on my parade\nAnd all the clubs you get in using my name\nYou think you broke my heart, oh, girl, for goodness' sake\nYou think I'm crying on my own, well, I ain't\nAnd I didn't wanna write a song\n'Cause I didn't want anyone thinkin' I still care, I don't, but\nYou still hit my phone up\nAnd baby, I'll be movin' on\nAnd I think you should be somethin' I don't wanna hold back\nMaybe you should know that\nMy mama don't like you and she likes everyone\nAnd I never like to admit that I was wrong\nAnd I've been so caught up in my job\nDidn't see what's going on, but now I know\nI'm better sleeping on my own\n'Cause if you like the way you look that much\nOh, baby, you should go and love yourself\nAnd if you think that I'm still holdin' on to somethin'\nYou should go and love yourself\nBut when you told me that you hated my friends\nThe only problem was with you and not them\nAnd every time you told me my opinion was wrong\nAnd tried to make me forget where I came from\nAnd I didn't wanna write a song\n'Cause I didn't want anyone thinkin' I still care, I don't, but\nYou still hit my phone up\nAnd baby, I'll be movin' on\nAnd I think you should be somethin' I don't wanna hold back\nMaybe you should know that\nMy mama don't like you and she likes everyone\nAnd I never like to admit that I was wrong\nAnd I've been so caught up in my job\nDidn't see what's going on, but now I know\nI'm better sleeping on my own\n'Cause if you like the way you look that much\nOh, baby, you should go and love yourself\nAnd if you think that I'm still holdin' on to somethin'\nYou should go and love yourself\nFor all the times that you made me feel small\nI fell in love, now I feel nothin' at all\nI never felt so low and I was vulnerable\nWas I a fool to let you break down my walls?\n'Cause if you like the way you look that much\nOh, baby, you should go and love yourself\nAnd if you think that I'm still holdin' on to somethin'\nYou should go and love yourself\n'Cause if you like the way you look that much\nOh, baby, you should go and love yourself (yeah)\nAnd if you think (you think) that I'm (that I'm)\nStill holdin' on to somethin' (holdin' on, no)\nYou should go and love yourself\n  ",
      link: "https://open.spotify.com/track/5FyHq4U5Ky1yub7XFKgC0S?autoplay=true",
      release_date: new Date("2015"),
      album: ["Purpose (Deluxe)"],
      artist: ["Justin Bieber"],
      band: [],
    },
    {
      name: "Take me to Your heart",
      lyric:
        "\nMmm, hmm, yeah\nMmm, hmm\nHiding from the rain and snow\nTrying to forget, but I won't let go\nLooking at a crowded street\nListening to my own heartbeat\nSo many people all around the world\nTell me, where do I find someone like you, girl?\nTake me to your heart, take me to your soul\nGive me your hand before I'm old\nShow me what love is, haven't got a clue\nShow me that wonders can be true\nThey say nothing lasts forever\nWe're only here today\nLove is now or never\nBring me far away\nTake me to your heart, take me to your soul\nGive me your hand and hold me\nShow me what love is, be my guiding star\nIt's easy, take me to your heart\nStanding on a mountain high\nLooking at the moon through a clear blue sky\nI should go and see some friends\nBut they don't really comprehend\nDon't need too much talking without saying anything\nAll I need is someone who makes me wanna sing\nTake me to your heart, take me to your soul\nGive me your hand before I'm old\nShow me what love is, haven't got a clue\nShow me that wonders can be true\nThey say nothing lasts forever\nWe're only here today\nLove is now or never\nBring me far away\nTake me to your heart, take me to your soul\nGive me your hand and hold me\nShow me what love is, be my guiding star\nIt's easy, take me to your heart\nTake me to your heart, take me to your soul\nGive me your hand and hold me\nShow me what love is, be my guiding star\nIt's easy, take me to your heart\n ",
      link: "https://open.spotify.com/track/1IeKFDvfsfmR3VVAws3lqT?autoplay=true",
      release_date: new Date("2005"),
      album: ["Michael Learns to Rock"],
      artist: ["Jascha Richter"],
      band: ["Michael Learns to Rock"],
    },
    {
      name: "In the name of love",
      lyric:
        "\nIf I told you this was only gonna hurt\nIf I warned you that the fire's gonna burn\nWould you walk in?\nWould you let me do it first?\nDo it all in the name of love\nWould you let me lead you even when you're blind?\nIn the darkness, in the middle of the night\nIn the silence, when there's no one by your side\nWould you call in the name of love?\nIn the name of love, name of love\nIn the name of love, name of love\nIn the name of\n(In the name, name)\nIf I told you we could bathe in all the lights\nWould you rise up, come and meet me in the sky?\nWould you trust me when you're jumping from the heights?\nWould you fall in the name of love?\nWhen there's madness, when there's poison in your head\nWhen the sadness leaves you broken in your bed\nI will hold you in the depths of your despair\nAnd it's all in the name of love\nIn the name of love, name of love\nIn the name of love, name of love\nIn the name of\n(In the name, name)\nI wanna testify\nScream in the holy light\nYou bring me back to life\nAnd it's all in the name of love\nI wanna testify\nScream in the holy light\nYou bring me back to life\nAnd it's all in the name of love\nIn the name of love, name of love\nIn the name of love, name of love\nIn the name of\n(In the name, name)\n  ",
      link: "https://open.spotify.com/track/6Xhbrtw5PNo9NAgPdhOBHE?autoplay=true",
      release_date: new Date("2017"),
      album: ["538 Hitzone - Best Of 2016"],
      artist: ["Martin Garrix"],
      band: [],
    },
    {
      name: "Never Say Never",
      lyric:
        "\nNever say never\nYeah, yeah, never ever\nNever ever, ever, ever, ever, ever\nSee I never thought that I\nCould walk through fire\nI never thought that I\nCould take the burn\nI never had the strength\nTo take it higher\nUntil I reached the point\nOf no return\nAnd there's just no turning back\nWhen your heart's under attack\nGonna give everything I have\nIt's my destiny\nI will never say never\nI will fight\nI will fight 'til forever\nTo make it right\nWhenever you knock me down\nI will not stay on the ground\nPick it up, pick it up\nPick it up, pick it up, up, up\nAnd never say never\nNe-never say never\nNe-never say never\nNe-never say never\nNever say it\nNever, Never say it\nI never thought I\nCould feel this power\nI never thought that I\nCould feel this free\nI'm strong enough to climb\nThe highest tower\nAnd I'm fast enough to run\nAcross the sea\nAnd there's just no turning back\nWhen your heart's under attack\nGonna give everything I have\n'Cause this is my destiny\nI will never say never\nI will fight\nI will fight 'til forever\nTo make it right\nWhenever you knock me down\nI will not stay on the ground\nPick it up, pick it up\nPick it up, pick it up, up, up\nAnd never say never\nHere we go\nGuess who\nJ Smith and JB\nI gotcha lil' bro\nI can handle him\nHold up, I\nI can handle him\nNow he's bigger than me\nTaller than me\nAnd he's older than me\nAnd stronger than me\nAnd his arm's a little bit longer than me\nBut he ain't on a JB song with me\nI be tryna chill\nThey be trying to side with the thrill\nNo pun intended\nWas raised by the power of Will\nLike Luke with the Force\nIf push comes to shove\nLike Kobe in the fourth\nIce water in blood (let's go)\nI gotta be the best\nAnd yes we're the fliest\nLike David and Goliath\nI conquered the giant\nSo now I got the world in my hand\nI was born from two stars\nSo the moon's where I land (I'm gone)\nI will never say never\nI will fight\nI will fight 'til forever\nTo make it right\nWhenever you knock me down\nI will not stay on the ground\nPick it up, pick it up\nPick it up, pick it up, up, up\nAnd never say never\nI will never say never\nI will fight 'til forever\nTo make it right\nWhenever you knock me down\nI will not stay on the ground\nPick it up, pick it up\nPick it up, Pick it up, up, up\nAnd never say never\nNe-never say never\nNever say it\nNe-never say never\nNever say it\nNe-never say never\nNever say it\nAnd never say never\nNe-never say never\nNever say it\nNe-never say never\nNever say it\nNe-never say never\nAnd never say never\n ",
      link: "https://open.spotify.com/track/5GYbkDveRD2I8M5ZJ14hWn?autoplay=true",
      release_date: new Date("2010"),
      album: ["my worlds: the collection"],
      artist: ["Justin Bieber"],
      band: [],
    },
  ];
  const [cookies, setCookies] = useCookies(["search", "user", "admin"]);

  useEffect(() => {
    setCookies("admin", false);
    setCookies("search", "");
    setCookies("user", false);
  }, []);

  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [forgotPw, setForgotPw] = useState(false);
  const [mailCode, setMailCode] = useState(false);
  const [resetPw, setResetPw] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [resetPwSuccess, setResetPwSuccess] = useState(false);
  const [addSongSuccess, setAddSongSuccess] = useState(false);
  const [addSong, setAddSong] = useState(false);

  const registerPopup: PopupProps = {
    open: register,
    close: setRegister,
    children: (
      <Register
        register={register}
        setRegister={setRegister}
        success={registerSuccess}
        setSuccess={setRegisterSuccess}
      />
    ),
  };
  const loginPopup: PopupProps = {
    open: login,
    close: setLogin,
    children: (
      <Login
        register={register}
        setRegister={setRegister}
        login={login}
        setLogin={setLogin}
        forgotPw={forgotPw}
        setForgotPw={setForgotPw}
        success={loginSuccess}
        setSuccess={setLoginSuccess}
      />
    ),
  };
  const forgotPwPopup: PopupProps = {
    open: forgotPw,
    close: setForgotPw,
    children: (
      <ForgotPw
        mailCode={mailCode}
        setMailCode={setMailCode}
        forgotPw={forgotPw}
        setForgotPw={setForgotPw}
      />
    ),
  };
  const mailCodePopup: PopupProps = {
    open: mailCode,
    close: setMailCode,
    children: (
      <MailCode
        mailCode={mailCode}
        setMailCode={setMailCode}
        resetPw={resetPw}
        setResetPw={setResetPw}
      />
    ),
  };
  const resetPwPopup: PopupProps = {
    open: resetPw,
    close: setResetPw,
    children: (
      <ResetPw
        resetPw={resetPw}
        setResetPw={setResetPw}
        success={resetPwSuccess}
        setSuccess={setResetPwSuccess}
      />
    ),
  };
  const RegisterSuccessPopup: PopupProps = {
    open: registerSuccess,
    close: setRegisterSuccess,
    children: <Success message="New account created" />,
  };
  const LoginSuccessPopup: PopupProps = {
    open: loginSuccess,
    close: setLoginSuccess,
    children: <Success message="Logged In" />,
  };
  const ResetPwSuccessPopup: PopupProps = {
    open: resetPwSuccess,
    close: setResetPwSuccess,
    children: <Success message="Password changed" />,
  };
  const AddSongSuccessPopup: PopupProps = {
    open: addSongSuccess,
    close: setAddSongSuccess,
    children: <Success message="Song submitted" />,
  };
  const AddSongPopup: PopupProps = {
    open: addSong,
    close: setAddSong,
    children: (
      <AddSong
        addSong={addSong}
        setAddSong={setAddSong}
        success={addSongSuccess}
        setSuccess={setAddSongSuccess}
      />
    ),
    extended: true,
  };
  return (
    <CookiesProvider>
      <section className="view_font">
        <Popup {...registerPopup} />
        <Popup {...loginPopup} />
        <Popup {...forgotPwPopup} />
        <Popup {...mailCodePopup} />
        <Popup {...resetPwPopup} />
        <Popup {...RegisterSuccessPopup} />
        <Popup {...LoginSuccessPopup} />
        <Popup {...ResetPwSuccessPopup} />
        <Popup {...AddSongSuccessPopup} />
        <Popup {...AddSongPopup} />
        <div
          className={
            register ||
            login ||
            forgotPw ||
            mailCode ||
            resetPw ||
            registerSuccess ||
            loginSuccess ||
            resetPwSuccess ||
            addSongSuccess ||
            addSong
              ? "fixed h-screen w-screen top-0 right-0 bg-black opacity-50 z-40 pointer-events-none"
              : ""
          }
        ></div>
        <section
          className=""
          onClick={() => {
            if (register) {
              setRegister(false);
            }
            if (login) {
              setLogin(false);
            }
            if (forgotPw) {
              setForgotPw(false);
            }
            if (mailCode) {
              setMailCode(false);
            }
            if (resetPw) {
              setResetPw(false);
            }
            if (registerSuccess) {
              setRegisterSuccess(false);
            }
            if (loginSuccess) {
              setLoginSuccess(false);
            }
            if (resetPwSuccess) {
              setResetPwSuccess(false);
            }
            if (addSongSuccess) {
              setAddSongSuccess(false);
            }
            if (addSong) {
              setAddSong(false);
            }
          }}
        >
          <Nav
            register={register}
            setRegister={setRegister}
            login={login}
            setLogin={setLogin}
            addSong={addSong}
            setAddSong={setAddSong}
          />
          <Routes>
            <Route
              path="verifySong"
              element={<SongsView songs={songs} verify={true} />}
            />
            <Route
              path="searchSong"
              element={<SongsView songs={songs} verify={false} />}
            />
            <Route path="/" element={<SearchBar search={cookies.search} />} />
          </Routes>
          <Background />
        </section>
      </section>
    </CookiesProvider>
  );
}

export default App;
