import { useLocation } from 'react-router-dom';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RidingPage: React.FC = () => {
  const { state } = useLocation();

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2">
        <MapContainer
          style={{
            width: `50vw`,
            height: `100vh`,
          }}
          center={[37.56675, 126.97842]}
          zoom={13}
          scrollWheelZoom={true}
          attributionControl={false}
          className="leaflet-container"
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[37.56675, 126.97842]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Polyline positions={state.geometry} color={'red'} />
        </MapContainer>
      </div>
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-3 text-center p-6">
        <div className="flex flex-col gap-y-2 justify-center items-center p-6 bg-slate-100 rounded-lg">
          <p className="text-sm">현재 속도</p>
          <div>
            <p className="text-5xl font-semibold">0</p>
            <p className="text-xs">km/h</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center p-6 bg-slate-100 rounded-lg text-sm">
          <p className="text-sm">주행 시간</p>
          <div>
            <p className="text-5xl font-semibold">0</p>
            <p className="text-xs">분</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center p-6 bg-slate-100 rounded-lg text-sm">
          <p className="text-sm">총 거리</p>
          <div>
            <p className="text-5xl font-semibold">0</p>
            <p className="text-xs">km</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center p-6 bg-slate-100 rounded-lg text-sm">
          <p className="text-sm">평균 속도</p>
          <div>
            <p className="text-5xl font-semibold">0</p>
            <p className="text-xs">km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidingPage;