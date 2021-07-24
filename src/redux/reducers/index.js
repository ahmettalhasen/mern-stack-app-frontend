import {combineReducers} from "redux";
import user from "./userReducer";
import entities from "./entitiesReducer";
import selectedMovie from "./selectedMovieReducer";
import {selectedLaundryRoom, allLaundryRooms, updatedRoom, myLaundryRooms} from "./laundryRoomReducer";
import {selectRoom} from "./roomReducer";
import {allAnnouncements, announcement} from "./announcementReducer";
import {selectMachine, selectMachines,selectMachinesInRoom} from "./machineReducer";
import {statistics} from "./statisticsReducer";
import reserveReducer from "./reserveReducer";


//reducers
export default combineReducers({
    user,
    entities,
    selectedMovie,
    selectedLaundryRoom,
    allLaundryRooms,
    selectRoom,
    updatedRoom,
    allAnnouncements,
    selectMachine,
    selectMachines,
    selectMachinesInRoom,
    statistics,
    announcement,
    reserveReducer,
    myLaundryRooms
});
