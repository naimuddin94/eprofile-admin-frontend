import Modal from "../../components/Utility/Modal";
import moment from "moment";
import { IUser } from "../../types/type";

interface UserDetailsModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: IUser | null;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  showModal,
  setShowModal,
  selectedUser,
}) => {
  return (
    <Modal openModal={showModal} setOpenModal={setShowModal}>
      <div className="p-3">
        <h2 className="text-xl font-bold mb-2">User Details</h2>
        {selectedUser && (
          <div className="max-w-[500px] lg:max-w-[400px] xl:max-w-[600px] grid grid-cols-2 gap-2">
            <div className="col-span-2 md:col-span-1">
              <div className="bg-gray-100 rounded-lg p-2">
                <p className="font-bold mb-1">Personal Information</p>
                <p>
                  <span className="font-bold">Name:</span>{" "}
                  {selectedUser.first_name} {selectedUser.last_name}
                </p>
                <p>
                  <span className="font-bold">Email:</span> {selectedUser.email}
                </p>
                <p>
                  <span className="font-bold">Country:</span>{" "}
                  {selectedUser.country}
                </p>
                <p>
                  <span className="font-bold">Role:</span>{" "}
                  {selectedUser.role}
                </p>
                <p>
                  <span className="font-bold">Birth Date:</span>{" "}
                  {moment(selectedUser.date_of_birth).format("YYYY-MM-DD")}
                </p>   
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default UserDetailsModal;
