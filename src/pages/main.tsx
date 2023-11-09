import { startRidingApi } from "../apis/riding";
import Navbar from "../components/common/Navbar";
import { useUserLocation } from "../store/userStore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const { longitude, latitude, speed } = useUserLocation();

  const { setLocation } = useUserLocation();
  function handleMessage(e: { data: string }) {
    const { latitude, longitude, speed } = JSON.parse(e.data);
    setLocation({
      latitude,
      longitude,
      speed,
    });
  }
  const navigate = useNavigate();

  async function handleClickRiding() {
    const res = await startRidingApi();
    if (res === 200) {
      navigate("/riding");
      window.postMessage("주행시작");
    }
  }

  window.addEventListener("message", handleMessage);

  return (
    <div className="h-screen">
      <div className="h-auto min-h-screen pb-14">
        <div className="py-4 px-2">
          <div className="flex items-center justify-between">
            <Link
              to="/register/terms"
              className="text-blue-500 hover:underline"
            >
              회원가입
            </Link>
            <Link to="/login" className="text-blue-500 hover:underline">
              로그인
            </Link>

            <div>
              <p>Latitude: {latitude !== null ? latitude : "N/A"}</p>
              <p>Longitude: {longitude !== null ? longitude : "N/A"}</p>
              <p>Speed: {speed !== null ? speed : "N/A"}</p>
            </div>
          </div>
          <div>
            <Link to="/riding/before" className="text-blue-500 hover:underline">
              주행 전 설정
            </Link>
          </div>
          <div>
            <div
              className="text-blue-500 hover:underline"
              onClick={handleClickRiding}
            >
              주행
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default MainPage;
