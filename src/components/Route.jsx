import { BrowserRouter, Routes, Route } from "react-router-dom";
import HideoutItemAll from "./HideoutItemAll";
import HideoutSettingAll from "./HideoutSettingAll";
import PrivacyPolicy from "./PrivacyPolicy";
import TaskItemAll from "./TaskItemAll";
import TaskSettingAll from "./TaskSettingAll";
import TopPageAll from "./TopPageAll";
import AmmoAll from "./AmmoAll";
import ContactForm from "./ContanctAll";
const TaskRoute = () => {
    return (
        <BrowserRouter basename={process.env.REACT_APP_HOMEPAGE}>
            <Routes>
                <Route path={`/`} element={<TopPageAll />} />
                <Route path={`/task/`} element={<TaskSettingAll />} />
                <Route path={`/task/item/`} element={<TaskItemAll />} />
                <Route path={`/hideout/`} element={<HideoutSettingAll />} />
                <Route path={`/hideout/item/`} element={<HideoutItemAll />} />
                <Route path={`/privacy/`} element={<PrivacyPolicy />} />
                <Route path={`/ammo/`} element={<AmmoAll />} />
                <Route path={`/contact/`} element={<ContactForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default TaskRoute;