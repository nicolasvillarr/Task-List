import { useRouter } from "next/navigation";
import React from "react";
import { useTasks } from "@/context/TaskContext";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { VscTrash } from "react-icons/vsc";
function TaskCard({ id, title, desc }) {
  const router = useRouter();

  const { deleteTask } = useTasks();

  if (title == undefined) {
    return <div></div>;
  }

  return (
    <div
    className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between"
    onClick={() => router.push(`/edit/${id}`)}
  >
    <div>
      <div className="flex justify-between"> 
        <h1 className="font-bold">{title}</h1>
      </div>
      <p className="text-gray-300">{desc}</p>
    </div>
        <button
          className="px-3 py-1 inline-flex text-white transition duration-300 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm text-center mr-2 mb-2 items-center"
          onClick={(e) => {
            e.stopPropagation();
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                deleteTask(id);
                toast.success("task deleted successfully");
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
            // const confirm = window.confirm("are you sure?")
            // if(confirm){
            //   deleteTask(id)
            //   toast.success("task deleted successfully")
            //   }
          }}
        >
 <VscTrash className="mr-2" /> Delete</button>
  </div>
  );
}

export default TaskCard;
