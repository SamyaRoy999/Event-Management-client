import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Event Created Successfully!");
  };

  return (
    <>
      <div className="flex  min-h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://i.ibb.co/chkFtjL/patrick-robert-doyle-AH8z-KXq-FITA-unsplash.jpg')]">
        <ToastContainer />
        <div className="rounded-xl my-20 bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="https://i.ibb.co/y6M2n3G/loginer-removebg-preview.png"
                width="150"
                alt=""
              />
              <h1 className="mb-2 text-2xl">Create Event</h1>
              <span className="text-gray-300">Enter Event Details</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 text-lg">
                <input
                  type="text"
                  name="title"
                  className="rounded-3xl w-full border-none bg-[#90B0B7] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  placeholder="Event Title"
                  {...register("title", { required: true })}
                />
                {errors.title && <span>This field is required</span>}
              </div>

              <div className="mb-4 text-lg">
                <input
                  type="date"
                  name="date"
                  className="rounded-3xl w-full  border-none bg-[#90B0B7] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  {...register("date", { required: true })}
                />
                {errors.date && <span>This field is required</span>}
              </div>

              <div className="mb-4 text-lg">
                <textarea
                  name="description"
                  rows="4"
                  className="rounded-3xl w-full border-none bg-[#90B0B7] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  placeholder="Event Description"
                  {...register("description", { required: true })}
                />
                {errors.description && <span>This field is required</span>}
              </div>

              <div className="mb-4 text-lg">
                <input
                  type="file"
                  name="image"
                  className="rounded-3xl w-full border-none bg-[#90B0B7] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  {...register("image", { required: true })}
                />
                {errors.image && <span>This field is required</span>}
              </div>

              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl w-full bg-[#90B0B7] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
