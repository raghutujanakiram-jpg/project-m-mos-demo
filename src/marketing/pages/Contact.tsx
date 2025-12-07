import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { uploadFloorPlan, submitLead } from "../../lib/api";
import { useToast } from "../../components/ui/Toast";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter valid phone number")
    .required(),
  email: yup.string().email().required(),
  propertyType: yup.string().required(),
  message: yup.string().min(10).required(),
});

const Contact: React.FC = () => {
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      let fileUrl = null;

      if (data.floorPlan?.length > 0) {
        const formData = new FormData();
        formData.append("file", data.floorPlan[0]);

        const uploadRes = await uploadFloorPlan(formData);
        fileUrl = uploadRes.url;
      }

      await submitLead({ ...data, floorPlan: fileUrl });

      showToast("Request submitted successfully!", "success");
    } catch (err: any) {
      showToast(err.message, "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 fade-section">
      <h1 className="text-2xl font-semibold mb-4">Let’s design your offline home</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <input {...register("name")} placeholder="Name" className="input" />
        <p className="error">{errors.name?.message}</p>

        <input {...register("email")} placeholder="Email" className="input" />
        <p className="error">{errors.email?.message}</p>

        <input {...register("phone")} placeholder="Phone" className="input" />
        <p className="error">{errors.phone?.message}</p>

        <select {...register("propertyType")} className="input">
          <option value="">Select Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="farmhouse">Farmhouse</option>
          <option value="commercial">Hotel / Commercial</option>
        </select>
        <p className="error">{errors.propertyType?.message}</p>

        <textarea
          rows={4}
          {...register("message")}
          placeholder="Tell us about your project"
          className="input"
        />
        <p className="error">{errors.message?.message}</p>

        <input type="file" {...register("floorPlan")} className="input" />

        <button
          type="submit"
          className="px-4 py-2 bg-[var(--mos-red)] text-black rounded-full"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default Contact;