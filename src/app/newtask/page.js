"use client";
import { useTasks } from "@/context/TaskContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
function Page({ params }) {
  const router = useRouter();
  const { tasks, createTask, updateTask } = useTasks();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((task) => {
    if (params.id) {
      updateTask(params.id, task);
      toast.success("task updated successfully");
    } else {
      createTask(task.title, task.desc);
      toast.success("task create successfully");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const encontreTarea = tasks.find((t) => t.id === params.id);
      if (encontreTarea) {
        setValue("title", encontreTarea.title);
        setValue("desc", encontreTarea.desc);
      }
    }
  }, []);

  return (
    <div>
      <Link href={"/"}>
        <button
          type="button"
          className="text-white transition duration-300 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Go to Home
        </button>
      </Link>
      <div className="flex justify-center items-center h-full">
        <form className="bg-gray-700 p-10" onSubmit={onSubmit}>
          <h1 className="text-3xl mb-3">
            {params.id ? "Edit this task" : "New Task"}
          </h1>
          <input
            className="bg-gray-800 focus:text-white-100 focus:outline-none w-full py-3 px-4 mb-2 block"
            placeholder="write a title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="block text-red-400 mb-2">
              this filed is required
            </span>
          )}
          <textarea
            className="bg-gray-800 focus:text-white-100 focus:outline-none w-full py-3 px-4 mb-2 block"
            placeholder="write a task"
            {...register("desc", { required: true })}
          />
          {errors.desc && (
            <span className="block text-red-400 mb-2">
              this filed is required
            </span>
          )}

          <button className="text-white transition duration-300 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
