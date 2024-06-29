import BodyContent from "../../../../components/BodyContent/BodyContent";
import { HobbiesAdminContextProvider } from "../../../../context/Hobbies/Admin/HobbiesAdminContext";
import {
  HobbiesListContextProvider,
} from "../../../../context/Hobbies/List/HobbiesListContext";
import HobbiesList from "../HobbiesList/HobbiesList";

export default function HobbiesAdminPage() {
  return (
    <BodyContent>
      <HobbiesAdminContextProvider>
        <HobbiesListContextProvider>
          <HobbiesList />
        </HobbiesListContextProvider>
      </HobbiesAdminContextProvider>
    </BodyContent>
  );
}
