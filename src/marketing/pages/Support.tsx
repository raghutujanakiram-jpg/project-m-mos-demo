import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { submitSupport } from "../../lib/api";
import { useToast } from "../../components/ui/Toast";

type SupportFormValues = {
  name: string;
  email: string;
  phone: string;
  category: string;
  homeId: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  category: yup.string().required("Select a category"),
  homeId: yup.string().optional(),
  message: yup.string().min(10, "Tell us a bit more").required(),
});

const Support: React.FC = () => {
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SupportFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SupportFormValues) => {
    try {
      await submitSupport({
        ...data,
        source: "support-page",
      });
      showToast("Support request submitted.", "success");
      reset();
    } catch (err: any) {
      showToast(err.message || "Unable to submit support request", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 fade-section">
      <IntroSection />
      <CategoriesSection />

      <section className="pb-6">
        <SectionHeader
          eyebrow="Support request"
          title="Tell us what you need help with."
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 grid gap-3"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label="Name"
              error={errors.name?.message}
              input={<input {...register("name")} className="field" />}
            />
            <Field
              label="Email"
              error={errors.email?.message}
              input={<input {...register("email")} className="field" />}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label="Phone"
              error={errors.phone?.message}
              input={<input {...register("phone")} className="field" />}
            />
            <Field
              label="Category"
              error={errors.category?.message}
              input={
                <select {...register("category")} className="field">
                  <option value="">Select category</option>
                  <option value="product">Product / feature</option>
                  <option value="installation">Installation</option>
                  <option value="troubleshooting">Troubleshooting</option>
                  <option value="project">Project consultation</option>
                </select>
              }
            />
          </div>

          <Field
            label="Home ID / Project ID (if available)"
            error={errors.homeId?.message}
            input={<input {...register("homeId")} className="field" />}
          />

          <Field
            label="Describe the issue or question"
            error={errors.message?.message}
            input={
              <textarea
                rows={4}
                {...register("message")}
                className="field"
              />
            }
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[var(--mos-red)] text-black text-sm font-medium hover:bg-red-500 disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit support request"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Support;

/* ---------- content ---------- */

const IntroSection = () => (
  <section className="pt-12 pb-8">
    <SectionHeader
      eyebrow="Support"
      title="We’re here to help — online or offline."
      description="Project-M support covers product guidance, installation assistance, troubleshooting and project-level consultation."
    />
  </section>
);

const CategoriesSection = () => {
  const items = [
    {
      title: "Product inquiries",
      body: "Features, capabilities and compatibility with your project.",
    },
    {
      title: "Installation support",
      body: "Help for electricians and installers during rollout.",
    },
    {
      title: "Troubleshooting",
      body: "Scenes, pairing, device behaviour and performance checks.",
    },
    {
      title: "Project consultation",
      body: "Mapping circuits, modules and panels for homes and hotels.",
    },
  ];

  return (
    <section className="pb-10 grid sm:grid-cols-2 gap-4">
      {items.map((i) => (
        <div
          key={i.title}
          className="rounded-2xl border border-white/10 bg-black/40 p-4"
        >
          <div className="text-sm font-medium mb-1">{i.title}</div>
          <div className="text-xs text-[var(--text-muted,#9ca3af)]">
            {i.body}
          </div>
        </div>
      ))}
    </section>
  );
};

/* ---------- shared helpers ---------- */

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <div className="fade-up">
    <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--mos-red,#ff0033)] mb-1">
      {eyebrow}
    </div>
    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted,#9ca3af)]">
        {description}
      </p>
    )}
  </div>
);

const Field = ({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-[var(--text-muted,#9ca3af)]">{label}</label>
    {input}
    {error && (
      <span className="text-[11px] text-red-400 leading-tight">{error}</span>
    )}
  </div>
);
