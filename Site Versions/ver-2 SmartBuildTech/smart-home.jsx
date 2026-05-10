/* global React */
const { useState, useEffect, useRef } = React;

// === Smart Home Live Demo ===
function SmartHomeDemo({ size = "lg" }) {
  const [tab, setTab] = useState("light");
  const [rooms, setRooms] = useState({
    living:   { on: true,  temp: 22 },
    kitchen:  { on: false, temp: 21 },
    bed:      { on: false, temp: 19 },
    bath:     { on: false, temp: 23 },
    office:   { on: true,  temp: 20 },
  });
  const [tiles, setTiles] = useState({
    door:    { on: true,  v: "Закрыто" },
    cam:     { on: true,  v: "5 камер · онлайн" },
    music:   { on: false, v: "Sonos · гостиная" },
  });
  const [bright, setBright] = useState(72);
  const [climate, setClimate] = useState(21);

  // Auto-cycle a few rooms for "alive" feel when idle
  const idleRef = useRef(0);
  useEffect(() => {
    const id = setInterval(() => {
      idleRef.current += 1;
      const keys = ["living", "kitchen", "bed", "bath", "office"];
      const k = keys[idleRef.current % keys.length];
      setRooms(prev => ({
        ...prev,
        [k]: { ...prev[k], on: !prev[k].on }
      }));
    }, 4200);
    return () => clearInterval(id);
  }, []);

  const toggleRoom = (k) => {
    setRooms(prev => ({ ...prev, [k]: { ...prev[k], on: !prev[k].on } }));
  };
  const toggleTile = (k) => {
    setTiles(prev => ({ ...prev, [k]: { ...prev[k], on: !prev[k].on } }));
  };

  // Slider drag
  const trackRef = useRef(null);
  const onTrackClick = (e) => {
    const r = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100));
    setBright(Math.round(pct));
  };

  return (
    <div className="shd">
      <div className="shd-header">
        <div className="shd-title">
          <span className="shd-pulse"></span>
          <span>Дом · Прихожая</span>
          <span className="mono" style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginLeft: 4 }}>online</span>
        </div>
        <div className="shd-tabs">
          <button className={tab === "light" ? "active" : ""} onClick={() => setTab("light")}>Свет</button>
          <button className={tab === "climate" ? "active" : ""} onClick={() => setTab("climate")}>Климат</button>
          <button className={tab === "secure" ? "active" : ""} onClick={() => setTab("secure")}>Безопасность</button>
        </div>
      </div>

      <div className="shd-grid">
        {/* Floor plan */}
        <div className="shd-floor">
          {/* Living room */}
          <div
            className={`shd-room ${rooms.living.on ? "on" : ""}`}
            style={{ left: "4%", top: "4%", width: "55%", height: "52%" }}
            onClick={() => toggleRoom("living")}
          >
            <div className="bulb"></div>
            <div className="rname">Гостиная</div>
            <div className="rtemp">{rooms.living.temp}° · {rooms.living.on ? "вкл" : "выкл"}</div>
          </div>
          {/* Kitchen */}
          <div
            className={`shd-room ${rooms.kitchen.on ? "on" : ""}`}
            style={{ left: "61%", top: "4%", width: "35%", height: "32%" }}
            onClick={() => toggleRoom("kitchen")}
          >
            <div className="bulb"></div>
            <div className="rname">Кухня</div>
            <div className="rtemp">{rooms.kitchen.temp}°</div>
          </div>
          {/* Bath */}
          <div
            className={`shd-room ${rooms.bath.on ? "on" : ""}`}
            style={{ left: "61%", top: "38%", width: "35%", height: "18%" }}
            onClick={() => toggleRoom("bath")}
          >
            <div className="bulb"></div>
            <div className="rname">Ванная</div>
          </div>
          {/* Bedroom */}
          <div
            className={`shd-room ${rooms.bed.on ? "on" : ""}`}
            style={{ left: "4%", top: "58%", width: "40%", height: "38%" }}
            onClick={() => toggleRoom("bed")}
          >
            <div className="bulb"></div>
            <div className="rname">Спальня</div>
            <div className="rtemp">{rooms.bed.temp}°</div>
          </div>
          {/* Office */}
          <div
            className={`shd-room ${rooms.office.on ? "on" : ""}`}
            style={{ left: "46%", top: "58%", width: "50%", height: "38%" }}
            onClick={() => toggleRoom("office")}
          >
            <div className="bulb"></div>
            <div className="rname">Кабинет</div>
            <div className="rtemp">{rooms.office.temp}°</div>
          </div>
        </div>

        {/* Side tiles */}
        <div className="shd-side">
          <div className="shd-slider">
            <div className="top">
              <div className="nm">Яркость</div>
              <div className="vl mono">{bright}%</div>
            </div>
            <div className="track" ref={trackRef} onClick={onTrackClick}>
              <div className="fill" style={{ width: `${bright}%` }}></div>
              <div className="knob" style={{ left: `${bright}%` }}></div>
            </div>
          </div>

          <div className={`shd-tile ${tiles.door.on ? "on" : ""}`}>
            <div className="l">
              <div className="icn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="6" y="3" width="12" height="18" rx="1"/>
                  <circle cx="14" cy="12" r="1" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="nm">Входная дверь</div>
                <div className="vl">{tiles.door.v}</div>
              </div>
            </div>
            <div className={`tgl ${tiles.door.on ? "on" : ""}`} onClick={() => toggleTile("door")}></div>
          </div>

          <div className={`shd-tile ${tiles.cam.on ? "on" : ""}`}>
            <div className="l">
              <div className="icn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 7l-7 5 7 5V7z"/>
                  <rect x="1" y="5" width="15" height="14" rx="2"/>
                </svg>
              </div>
              <div>
                <div className="nm">Камеры</div>
                <div className="vl">{tiles.cam.v}</div>
              </div>
            </div>
            <div className={`tgl ${tiles.cam.on ? "on" : ""}`} onClick={() => toggleTile("cam")}></div>
          </div>

          <div className={`shd-tile ${tiles.music.on ? "on" : ""}`}>
            <div className="l">
              <div className="icn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18V5l12-2v13"/>
                  <circle cx="6" cy="18" r="3"/>
                  <circle cx="18" cy="16" r="3"/>
                </svg>
              </div>
              <div>
                <div className="nm">Музыка</div>
                <div className="vl">{tiles.music.v}</div>
              </div>
            </div>
            <div className={`tgl ${tiles.music.on ? "on" : ""}`} onClick={() => toggleTile("music")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// === Logo orbits decoration (used in V2) ===
function HeroOrbit() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio: "1/1",
      maxWidth: 520,
      margin: "0 auto",
    }}>
      {/* Orbit rings */}
      <svg viewBox="0 0 400 400" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
        <circle cx="200" cy="200" r="180" stroke="#E6E5E0" strokeWidth="1" fill="none" strokeDasharray="2 4"/>
        <circle cx="200" cy="200" r="130" stroke="#E6E5E0" strokeWidth="1" fill="none"/>
        <circle cx="200" cy="200" r="80"  stroke="#E6E5E0" strokeWidth="1" fill="none" strokeDasharray="2 4"/>
      </svg>
      {/* Logo center */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: "44%", aspectRatio: "1/1",
        background: "#fff",
        borderRadius: "50%",
        border: "1px solid #E6E5E0",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
      }}>
        <img src="assets/logo.png" alt="DevHome" style={{ width: "70%" }} />
      </div>
      {/* Orbiting devices */}
      <OrbitNode deg={-30} r={45} label="Свет" icon="bulb" />
      <OrbitNode deg={45}  r={45} label="Климат" icon="temp" />
      <OrbitNode deg={130} r={45} label="Камеры" icon="cam" />
      <OrbitNode deg={-110} r={45} label="Замок" icon="lock" />
      <OrbitNode deg={-160} r={32} label="Wi-Fi" icon="wifi" small />
      <OrbitNode deg={70}  r={32} label="Музыка" icon="music" small />
    </div>
  );
}

function OrbitNode({ deg, r, label, icon, small }) {
  const rad = (deg * Math.PI) / 180;
  const x = 50 + r * Math.cos(rad);
  const y = 50 + r * Math.sin(rad);
  const sz = small ? 44 : 60;
  const icons = {
    bulb: "M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.8.7 1 1.4 1 2.3v1h6v-1c0-.9.2-1.6 1-2.3A7 7 0 0012 2z",
    temp: "M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z",
    cam:  "M23 7l-7 5 7 5V7zM1 5h15v14H1z",
    lock: "M5 11h14v10H5zM8 11V7a4 4 0 018 0v4",
    wifi: "M5 12.55a11 11 0 0114 0M1.42 9a16 16 0 0121 0M8.5 16.43a6 6 0 017 0M12 20h.01",
    music:"M9 18V5l12-2v13M6 21a3 3 0 100-6 3 3 0 000 6zM18 19a3 3 0 100-6 3 3 0 000 6z",
  };
  return (
    <div style={{
      position: "absolute",
      left: `${x}%`, top: `${y}%`,
      width: sz, height: sz,
      transform: "translate(-50%, -50%)",
      background: "#fff",
      borderRadius: "50%",
      border: "1px solid #E6E5E0",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
      animation: `floaty 4s ease-in-out infinite`,
      animationDelay: `${(deg % 360) / 60}s`,
      color: "#0A0A0A",
    }}>
      <svg width={small ? 18 : 22} height={small ? 18 : 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d={icons[icon]} />
      </svg>
      {!small && (
        <div style={{
          position: "absolute", top: "100%", left: "50%",
          transform: "translateX(-50%)",
          marginTop: 8,
          fontSize: 11,
          color: "#707070",
          whiteSpace: "nowrap",
          letterSpacing: "0.04em",
        }}>{label}</div>
      )}
    </div>
  );
}

window.SmartHomeDemo = SmartHomeDemo;
window.HeroOrbit = HeroOrbit;
