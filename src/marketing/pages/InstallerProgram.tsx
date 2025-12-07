import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { submitPartnerRequest } from "../../lib/api";
import { useToast } from "../../components/ui/Toast";

type InstallerFormValues = {
  name: string;
  company: string;
  city: string;
  experience: string;
  email: string;
  phone: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  company: yup.string().required("Company / firm is required"),
  city: yup.string().required("City is required"),
  experience: yup.string().required("Experience is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  message: yup.string().min(10, "Share a bit more detail").required(),
});

const InstallerProgram: React.FC = () => {
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InstallerFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: InstallerFormValues) => {
    try {
      await submitPartnerRequest({
        ...data,
        partnershipType: "installer-program",
        source: "installer-page",
      });

      showToast("Installer application submitted.", "success");
      reset();
    } catch (err: any) {
      showToast(err.message || "Unable to submit application", "error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20 fade-section">
      <IntroSection />

      <section className="pb-12">
        <SectionHeader
          eyebrow="Who can join?"
          title="Electricians, integrators and smart home professionals."
          description="If you install circuits, panels or sensors — you can build a Project-M practice."
        />
      </section>

      <section className="pb-6">
        <SectionHeader
          eyebrow="Apply"
          title="Tell us about your installation practice."
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 grid gap-3 max-w-3xl"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label="Name"
              error={errors.name?.message}
              input={<input {...register("name")} className="field" />}
            />
            <Field
              label="Company / firm"
              error={errors.company?.message}
              input={<input {...register("company")} className="field" />}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label="City"
              error={errors.city?.message}
              input={<input {...register("city")} className="field" />}
            />
            <Field
              label="Experience (years)"
              error={errors.experience?.message}
              input={<input {...register("experience")} className="field" />}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label="Email"
              error={errors.email?.message}
              input={<input {...register("email")} className="field" />}
            />
            <Field
              label="Phone"
              error={errors.phone?.message}
              input={<input {...register("phone")} className="field" />}
            />
          </div>

          <Field
            label="Tell us about the kind of projects you handle today"
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
            {isSubmitting ? "Submitting..." : "Apply for certification"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default InstallerProgram;

/* ---------- content ---------- */

const IntroSection = () => (
  <section className="pt-12 pb-10">
    <SectionHeader
      eyebrow="Installer Program"
      title="Become a certified Project-M installer."
      description="Join our network of electricians, integrators and automation experts delivering offline-first homes and projects."
    />
  </section>
);

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
  <div className="max-w-3xl fade-up">
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
