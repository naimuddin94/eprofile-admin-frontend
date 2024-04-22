import { FaUserGraduate } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineWorkHistory, MdWorkHistory } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { VscGraphLine } from "react-icons/vsc";
import Swal from "sweetalert2";

export const navigation = [
  { name: "Dashboard", icon: { name: LuLayoutDashboard, size: 20 } },
  {
    name: "User",
    icon: { name: FaUserGraduate, size: 20 },
    child: ["Add User", "Manage Users"],
  },
  {
    name: "Company",
    icon: { name: MdOutlineWorkHistory, size: 22 },
    child: ["Pending Company", "Published Company", "All Company"],
  },
  {
    name: "Profile",
    icon: { name: SlNotebook, size: 20 },
    child: ["Pending Profile", "Published Profile", "All Profile"],
  },
  // {
  //   name: "Reports",
  //   icon: { name: TbReportSearch, size: 24 },
  //   child: [
  //     "Sales Reports",
  //     "Stock Reports",
  //     "Purchase Reports",
  //     "Due Report",
  //     "Deposit Reports",
  //   ],
  // },
  {
    name: "Settings",
    icon: { name: IoSettingsOutline, size: 22 },
    child: ["Business Settings", "SMS Settings"],
  },
];

export const customerTabs = [
  { label: "Project", icon: { name: MdWorkHistory, size: 24 } },
  // { label: "Ledger", icon: { name: PiNotebookFill, size: 24 } },
  // { label: "Sales", icon: { name: HiMiniShoppingBag, size: 24 } },
  { label: "Documents & Notes", icon: { name: SlNotebook, size: 20 } },
  // { label: "Payment", icon: { name: MdPayments, size: 24 } },
  { label: "Tasks", icon: { name: VscGraphLine, size: 22 } },
];

export const permissions = [
  {
    name: "Role Management",
    permissionsGroup: ["Add Role", "Update Role", "Delete Role"],
  },
  {
    name: "Biodata",
    permissionsGroup: ["Add Biodata", "Update Biodata", "Delete Biodata"],
  },
  {
    name: "Packages",
    permissionsGroup: ["Add Package", "Update Package", "Delete Package"],
  },
  {
    name: "Subscriptions",
    permissionsGroup: [
      "Add Subscription",
      "Update Subscription",
      "Delete Subscription",
    ],
  },
  {
    name: "Restaurants",
    permissionsGroup: [
      "Add Restaurant",
      "Update Restaurant",
      "Delete Restaurant",
    ],
  },
  {
    name: "Kazi Office",
    permissionsGroup: ["Add Office", "Update Office", "Delete Office"],
  },
];

export const banks = [
  "AB Bank",
  "Dutch Bangla Bank",
  "City Bank",
  "Islami Bank",
  "One Bank",
];

export const convertToSlug = (text: string, replaceWith = "-") => {
  return text.toLowerCase().replace(/\s+/g, replaceWith);
};

// delete function
export const handleDelete = (
  id: string,
  deleteFn: (id: string) => Promise<any>
) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteFn(id).then((res) => {
        if (!res.error) {
          Swal.fire({
            title: "Deleted!",
            text: "Deleted successfully",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: res?.error?.data?.message,
            icon: "error",
          });
        }
      });
    }
  });
};

// date initial range
export const initialRange = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
];
