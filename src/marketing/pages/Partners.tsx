import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { submitPartnerRequest } from "../../lib/api";
import { useToast } from "../../components/ui/Toast";

type PartnerFormValues = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  partnershipType: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  company: yup.string().required("Company is required"),
  role: yup.string().required("Role is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  partnershipType: yup.string().required("Select a partnership type"),
  message: yup.string().min(10, "Share a bit more detail").required(),
});

const Partners: React.FC = () => {
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PartnerFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: PartnerFormValues) => {
    try {
      await submitPartnerRequest({
        ...data,
        source: "partners-page",
      });
      showToast("Partner request submitted. We’ll get back to you soon.", "success");
      reset();
    } catch (err: any) {
      showToast(err.message || "Unable to send request", "error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20 fade-section">
      <IntroSection />
      <WhyPartnerSection />

      <section className="pb-6">
        <SectionHeader
          eyebrow="Partner with us"
          title="Tell us about your organisation."
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
              label="Company"
              error={errors.company?.message}
              input={<input {...register("company")} className="field" />}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <Field
              label="Role / designation"
              error={errors.role?.message}
              input={<input {...register("role")} className="field" />}
            />
            <Field
              label="Phone"
              error={errors.phone?.message}
              input={<input {...register("phone")} className="field" />}
            />
          </div>

          <Field
            label="Work email"
            error={errors.email?.message}
            input={<input {...register("email")} className="field" />}
          />

          <Field
            label="Partnership type"
            error={errors.partnershipType?.message}
            input={
              <select {...register("partnershipType")} className="field">
                <option value="">Select one</option>
                <option value="builder">Real estate / builder</option>
                <option value="hospitality">Hospitality</option>
                <option value="system-integrator">System integrator</option>
                <option value="technology">Technology / device partner</option>
                <option value="other">Other</option>
              </select>
            }
          />

          <Field
            label="Tell us about your projects and how you’d like to work with Project-M"
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
            {isSubmitting ? "Submitting..." : "Submit partner request"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Partners;

/* ---------- content sections ---------- */

const IntroSection = () => (
  <section className="pt-12 pb-8">
    <SectionHeader
      eyebrow="Partners"
      title="Powering the future of offline automation."
      description="Project-M collaborates with builders, architects, integrators and hardware developers to deliver reliable offline-first automation for modern spaces."
    />
  </section>
);

const WhyPartnerSection = () => (
  <section className="pb-10">
    <h3 className="text-lg font-semibold mb-3">
      Why partner with an offline-first platform?
    </h3>
    <ul className="text-sm text-[var(--text-muted,#9ca3af)] space-y-2 max-w-3xl">
      <li>• Offer automation that works even during internet or cloud outages.</li>
      <li>• Differentiate your projects with ultra-low latency experiences.</li>
      <li>• Reduce long-term support overhead for you and your customers.</li>
      <li>• Avoid mandatory subscription models that customers dislike.</li>
    </ul>
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

// Tailwind helper class suggestion (optional via @apply in CSS):
// .field { @apply px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-700 text-sm; }
