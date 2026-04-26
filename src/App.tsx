import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { ScrollToTop } from "./components/common/ScrollToTop";
import AppLayout from "./layout/AppLayout";

import NotFound from "./pages/OtherPage/NotFound";
import Home from "./pages/Dashboard/Home";
import UserList from "./pages/UserList/UserList";
import GiftingManager from "./pages/Gifting/GiftingManager";
import EmojiManager from "./pages/Emoji/EmojiManager";
import IdEntryManager from "./pages/IdEntry/IdEntryManager";
import FrameManager from "./pages/Frame/FrameManager";
import CoinManager from "./pages/CoinManage/CoinManager";
import LevelBadgeManager from "./pages/LevelBadgeManage/LevelBadgeManager";
import AgencyManager from "./pages/Agency/AgencyManager";
import AgencyDetails from "./pages/Agency/AgencyDetails";
import ThemeManager from "./pages/ThemeManager/ThemeManager";
import RoomSkinManager from "./pages/RoomThemeManage/RoomSkinManager";
import AboutUsManager from "./pages/AboutUs/AboutUsManager";
import LiveModerator from "./pages/BoardManager/LiveModerator";
import AudioRoomList from "./pages/BoardManager/AudioBoard/AudioRoomList";
import VideoLiveList from "./pages/BoardManager/VideoBoard/VideoLiveList";
import Support from "./pages/Support/Support";
import { useAuth } from "./lib/AuthProvider";
import SignIn from "./AuthPage/SignIn";
import AdminManagement from "./pages/AdminManagement/AdminManagement";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/admin-management" element={<AdminManagement />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/gifts" element={<GiftingManager />} />
              <Route path="/emojis" element={<EmojiManager />} />
              <Route path="/id-entry" element={<IdEntryManager />} />
              <Route path="/frames" element={<FrameManager />} />
              <Route path="/Coin-manage" element={<CoinManager />} />
              <Route path="/level-badge-manage" element={<LevelBadgeManager />} />
              <Route path="/room-skins" element={<RoomSkinManager />} />
              <Route path="/agencies" element={<AgencyManager />} />
              <Route path="/agency/:id" element={<AgencyDetails />} />
              <Route path="/theme-upload" element={<ThemeManager />} />
              <Route path="/about-us" element={<AboutUsManager />} />
              <Route path="/audio-board" element={<AudioRoomList />} />
              <Route path="/video-board" element={<VideoLiveList />} />
              <Route path="/live-moderate/:mode/:roomId" element={<LiveModerator />} />
              <Route path="/support" element={<Support />} />
            </Route>

            <Route path="/signin" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </Router>
  );
}